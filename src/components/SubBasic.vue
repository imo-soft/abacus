<template>
	<div class="main_container">

		<h4>{{ title }}</h4>

		<div class="math_box">
			<div class="form-group row">
				<div class="col-3"></div>
				<div class="col-6">
					<input class="form-control" readonly="readonly" type="number" v-model="add1">
					<b>-</b><br>
					<input class="form-control" readonly="readonly" type="number" v-model="add2">
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
        	<br>
			<div class="row">
				<div class="col-6 text-left">
        			<button class="btn btn-info" @click="resetGame">Из почетка</button>
				</div>
				<div class="col-6 text-right">
        			<button v-show="showresult==true" class="btn btn-info" @click="nextCalculation">Даље ></button>
				</div>
        	</div>
        </div>

		<div class="answer_box">
        	<button v-show="answer != null && showresult==false" class="btn btn-success" @click="getResult">Одговор</button>
			<div v-show="showresult">
        		<i v-if="correct" class="far fa-check-circle fa-2x" style="color:blue"></i>
        		<i v-else class="far fa-times-circle fa-2x" style="color:red"></i>
        		<p v-show="!correct">Тачан одговор je: {{ add1 }}-{{ add2 }}=<b>{{ add1 - add2 }}</b></p>
        		<br>
        	</div>
        </div>



	</div>
</template>

<script>
import Swal from "sweetalert2"

export default {
	name: "Oduzimanje_nivo1",
	props: {
		prop_title: { String, default: "Одузимање"},
		prop_max_1: { Number },
		prop_max_2: { Number }
	},
	data () {
		return {
		  title: null,
		  add_1_max: 0,
		  add_2_max: 0,
		  add: null,
		  add1: null,
		  add2: null,
		  answer: null,
		  answered: false,
		  correct: false,
		  showresult: false,
		  score: 0,
		  played: 0,
		  audio_filename: ""
		}
	},
	mounted () {
		this.title = this.prop_title;
		this.add_1_max = parseInt(this.prop_max_1);
		this.add_2_max = parseInt(this.prop_max_2);
		this.nextCalculation ();
	},
	watch: {
		played: function (value) {
			if (value==5) {
				if (this.score==4 || this.score==5) {
    				this.audio_filename = "ok_" + this.randomNumber (5);
    				this.playSound();
					new Swal("Одлично", "Тачних " + this.score + " од " + this.played);
				} else {
    				this.audio_filename = "wrong_" + this.randomNumber (5);
    				this.playSound();
					new Swal("Пробај поново", "Тачних " + this.score + " од " + this.played);
				}
		        this.resetGame();
		    }
		}
	},
  	methods: {
    	randomNumber : function(max) {
      		return (Math.floor(Math.random()*max)+1);
    	},
    	getResult () {
    		this.played++;
    		this.answered = true;
    		this.showresult = true;
    		// correct answer
    		if (this.answer == this.add1 - this.add2) {
				this.correct = true;
    			this.score ++;
    		} else {
    		// incorrect answer
    			this.correct = false;
    		}
    	},
    	nextCalculation () {
	 		this.add1 = this.randomNumber (this.add_1_max);
	 		this.add2 = this.randomNumber (this.add_2_max);
			while (this.add1 == this.add2) {
				this.add2 = this.randomNumber (this.add_2_max);
			}
			if (this.add2 > this.add1) {
				this.add = this.add2
				this.add2 = this.add1
				this.add1 = this.add
			}
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
