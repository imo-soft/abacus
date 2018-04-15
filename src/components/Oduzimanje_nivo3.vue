<template>
	<div>

		<h4 class="title is-5">Разлика два броја до 10</h4>

		<div class="math_box">
			<input class="input is-normal input_blue" type="number" readonly="readonly" v-model="add1">
			&nbsp-&nbsp
			<input class="input is-danger is-focused is-normal input_red" ref="answer" type="number"  maxlength="2" min="1" max="20" v-model="answer">			
			&nbsp=&nbsp
			<input class="input is-normal input_blue" type="number" readonly="readonly" v-model="add2">
		</div>	

		<div style="height: 30px;">
        	<button v-show="answer != null && showresult==false" class="button is-info is-medium is-rounded" @click="getResult">Одговор</button>
        </div>

		<div style="height: 80px;">   
			<div v-show="showresult">
        		<i v-if="correct" class="far fa-check-circle fa-3x" style="color:blue"></i>
        		<i v-else class="far fa-times-circle fa-3x" style="color:red"></i>
        		<p v-show="!correct">Тачан одговор je: {{ add1 }}-<b>{{ add1 - add2 }}</b>={{ add2 }}</p>
        		<br>
        	</div>
        </div>
		<div style="height: 70px;">   
        	<p>Успех: <b>{{ score }} / {{ played }}</b></p>
        	<br>		     
			<div class="columns is-mobile">        	
				<div class="column is-half has-text-left">
        			<button class="button is-link is-medium is-rounded" @click="resetGame">Из почетка</button>				
				</div>
				<div class="column is-half has-text-right">
        			<button v-show="showresult==true"class="button is-link is-medium is-rounded" @click="nextCalculation">Даље ></button>				
				</div>
        	</div>
        </div>
	</div>
</template>

<script>
export default {
	name: 'Oduzimanje_nivo1',
	data () {
		return {
		  title: "Одузимање",
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
		this.nextCalculation ();
	},
  	methods : {
    	randomNumber : function(min, max) {
      		return Math.floor(Math.random() * (max - min + 1)) + min;
    	},
    	getResult () {
    		this.played++;
    		this.answered = true;
    		this.showresult = true;    		 	
    		// correct answer
    		if (this.answer == this.add1 - this.add2) {
				this.correct = true;
    			this.score ++;
    			this.audio_filename = 'ok_' + this.randomNumber (1,5);
    			this.playSound();    			
    		} else {
    		// incorrect answer
    			this.correct = false;
    			this.audio_filename = 'wrong_' + this.randomNumber (1,5);
    			this.playSound();    			
    		}    		
    	},
    	nextCalculation () {
	 		this.add1 = this.randomNumber (3,10);
			this.add2 = this.randomNumber (1,5);
			if (this.add2 = this.add1)
				this.add2 = this.randomNumber (1,5);
			if (this.add1 < this.add2) {
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
