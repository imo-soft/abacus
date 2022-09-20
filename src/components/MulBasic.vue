<template>
	<div class="main_container">

		<h4>{{ title }}</h4>

		<div class="math_box">
			<div class="form-group row">
				<div class="col-3"></div>
				<div class="col-6">
					<input class="form-control" readonly="readonly" type="number" v-model="mul1">
					<b>*</b><br>
					<input class="form-control" readonly="readonly" type="number" v-model="mul2">
					<b>=</b><br>
					<input class="form-control" ref="answer" type="number"  maxlength="4" min="1" max="20" v-model="answer">
				</div>
				<div class="col-3"></div>
			</div>
		</div>
		<div class="bottom_box">
			<div>
        		Успех: <b>{{ score }} / {{ played }}</b>
			</div>
			<div class="row">
				<div class="col-6">
        			<button class="btn btn-info" @click="resetGame">Из почетка</button>
				</div>
				<div class="col-6">
        			<button v-show="showresult==true" class="btn btn-info" @click="nextCalculation">Даље ></button>
				</div>
        	</div>
        </div>
		<div class="answer_box">
			<button v-show="answer != null && showresult==false" class="btn btn-success" @click="getResult">Одговор</button>
			<div v-show="showresult" style="min-heigth: 10px;">
				<i v-if="correct" class="far fa-check-circle fa-2x" style="color:blue"></i>
				<i v-else class="far fa-times-circle fa-2x" style="color:red"></i>
				<p v-show="!correct">Тачан одговор je: {{ mul1 }}*{{ mul2 }}=<b>{{ result }}</b></p>
			</div>
        </div>

	</div>
</template>

<script>
import Swal from "sweetalert2";

export default {
	name: "SabiranjeNivo",
	props: {
		prop_title: { String, default: "Сабирање" },
		prop_1_min: { Number },
		prop_1_max: { Number },
		prop_2_min: { Number },
		prop_2_max: { Number }
		},
	data () {
		return {
		  title: null,
		  mul_1_min: 0,
		  mul_1_max: 0,
		  mul_2_min: 0,
		  mul_2_max: 0,
		  result: 0,
		  add: null,
		  mul1: null,
		  mul2: null,
		  answer: null,
		  answered: false,
		  correct: false,
		  showresult: false,
		  score: 0,
		  text_score: null,
		  played: 0,
		  audio_filename: "",
		  rnd: 0
		}
	},
	mounted () {
		this.title = this.prop_title;
		this.mul_1_min = parseInt(this.prop_1_min);
		this.mul_1_max = parseInt(this.prop_1_max);
		this.mul_2_min = parseInt(this.prop_2_min);
		this.mul_2_max = parseInt(this.prop_2_max);
		this.nextCalculation ();
	},
	watch: {
		played: function (value) {
			if (value==5) {
				if (this.score==4 || this.score==5) {
	    			this.audio_filename = "ok_" + this.randomNumber (1,4);
	    			this.playSound();
					new Swal("Одлично", "Тачних " + this.score + " од " + this.played);
				} else {
    				this.audio_filename = "wrong_" + this.randomNumber (1,4);
    				this.playSound();
					new Swal("Пробај поново", "Тачних " + this.score + " од " + this.played);
				}
		        this.resetGame();
		    }
		}
	},
  	methods : {
    	randomNumber : function(min, max) {
			this.rnd = Math.floor(Math.random() * (max - min + 1)) + min;
			while (this.rnd > max)
				this.rnd = Math.floor(Math.random() * (max - min + 1)) + min;
			return this.rnd
    	},
    	getResult () {
    		this.played++;
    		this.answered = true;
    		this.showresult = true;
    		// correct answer
    		if (parseInt(this.answer) == this.result) {
				this.correct = true;
    			this.score ++;
    		} else {
    		// incorrect answer
    			this.correct = false;
    		}
    	},
    	nextCalculation () {
			// console.log (this.mul_1_min, this.mul_1_max, this.mul_2_min, this.mul_2_max)
			this.mul1 = this.randomNumber (this.mul_1_min, this.mul_1_max);
			this.mul2 = this.randomNumber (this.mul_2_min, this.mul_2_max);
			this.result = this.mul1 * this.mul2
			this.add = null;
			this.answer = null;
			this.answered = false;
			this.showresult = false;
			this.correct = false;
			this.$refs.answer.focus();
    	},
    	resetGame () {
    		this.score = this.played = 0;
    		this.nextCalculation();
    	},
	    playSound () {
	        var audio = new Audio("/audio/"+this.audio_filename+".mp3");
	        audio.play();
    	}
  	}
}
</script>
