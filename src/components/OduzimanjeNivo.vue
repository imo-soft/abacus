<template>
	<div class="main_container">

		<h4 class="title is-5">{{ title }}</h4>

		<div class="math_box">
			<input class="input is-normal input_blue" type="number" readonly="readonly" v-model="add1">
			&nbsp-&nbsp
			<input class="input is-normal input_blue" type="number" readonly="readonly" v-model="add2">
			&nbsp=&nbsp
			<input class="input is-danger is-focused is-normal input_red" ref="answer" type="number"  maxlength="2" min="1" max="20" v-model="answer">
		</div>

		<div class="answer_box">
        	<button v-show="answer != null && showresult==false" class="button is-info is-small is-rounded" @click="getResult">Одговор</button>
        </div>

		<div class="scoreboard_box">
			<div v-show="showresult">
        		<i v-if="correct" class="far fa-check-circle fa-3x" style="color:blue"></i>
        		<i v-else class="far fa-times-circle fa-3x" style="color:red"></i>
        		<p v-show="!correct">Тачан одговор je: {{ add1 }}-{{ add2 }}=<b>{{ add1 - add2 }}</b></p>
        		<br>
        	</div>
        </div>
        
		<div class="bottom_box">   
        	<p>Успех: <b>{{ score }} / {{ played }}</b></p>
        	<br>		     
			<div class="columns is-mobile">
				<div class="column is-half has-text-left">
        			<button class="button is-link is-small is-rounded" @click="resetGame">Из почетка</button>
				</div>
				<div class="column is-half has-text-right">
        			<button v-show="showresult==true"class="button is-link is-small is-rounded" @click="nextCalculation">Даље ></button>
				</div>
        	</div>
        </div>

	</div>
</template>

<script>
export default {
	name: 'Oduzimanje_nivo1',
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
		  audio_filename: ''
		}
	},	
	mounted () {
		this.title = this.prop_title;
		this.add_1_max = this.prop_max_1;
		this.add_2_max = this.prop_max_2;
		this.nextCalculation ();
	},
  	methods : {
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
    			this.audio_filename = 'ok_' + this.randomNumber (5);
    			this.playSound();    			
    		} else {
    		// incorrect answer
    			this.correct = false;
    			this.audio_filename = 'wrong_' + this.randomNumber (5);
    			this.playSound();    			
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
	        var audio = new Audio('/static/audio/'+this.audio_filename+'.mp3');
	        audio.play();
    	}    	
  	}	
}
</script>
