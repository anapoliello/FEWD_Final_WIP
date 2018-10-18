
let totalScore = 0;

// Reveal follow-up questions based on your event type choice
$('#event_type').change(function(followup_questions){
	let	searchQuestions = this.value + '_questions'
	$('.active').removeClass('active');
	$('#' + searchQuestions).addClass('active');
	totalScore = 0
});

// Add points to a total score

//need to reevaluate sum functions - currently adding and not adjusting

let displayTotal = function(){
	console.log(totalScore)
}
$('#user_information input').change(function(){
	totalScore = 0;
	 $('.active input:checked').each(function() {
	 		//console.log('totalScore WAS', totalScore)
	        totalScore += Number($(this).val());
	       // console.log('totalScore IS', totalScore)
	    });
	 displayTotal();
})

//If yes/no, than questions
// $('[name="party1"]').change(function(){
// let answer = $('[name="party1"]:checked').val();
// 	$('.party1Subquestions').removeClass('active');
// 	$('.party1Subquestions[value="' + answer + '"]').addClass("active");
// })

$('.branch [name="branch1"]').change(function(){
let answer = $('[name="branch1"]:checked').val();
	$('.branchpart').removeClass('active');
	$('.branchpart[value="' + answer + '"]').addClass("active");
})

$('#submit').click(function(severity){
	let	severityLevel = this.value + '_advice';
	let levels = ['Low', 'Moderate', 'Severe'];
	$('#submitted').addClass('active');
		if (totalScore <= 3) {
			severityLevel = 'Low';
		}
		else if (totalScore >= 8) {
			severityLevel = 'Severe';
		}
		else {
			severityLevel = 'Moderate';
		}
	 $('.severity-level').text(severityLevel);
	 $('.severity-level').addClass('active')
	
});
