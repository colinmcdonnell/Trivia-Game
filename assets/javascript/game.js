

$('#startButton').on( {
	'click': function() {

    $('#questionsBox').fadeIn(2000);
    
    var count = 30;

    var counter = setInterval(timer, 1000);

    function timer()
    {
      count = count - 1;
      if (count <= 0)
    {
      clearInterval(counter);
      $('#timer').text('OUT OF TIME!');
      $('#correctAnswers').text('Correct Answers: ' + correct)
      return;
    }

    $('#timer').text(count);
    }
	}
});

var correct = 0;

$('.correct').click(function() {
  correct = correct + 1;
  console.log(correct);
}) 


$("#question1").click(function(){
    $('#question1').text('CORRECT!')
    $('.wrong1').text('')
});

$("#question2").click(function(){
    $('#question2').text('CORRECT!')
    $('.wrong2').text('')
});

$("#question3").click(function(){
    $('#question3').text('CORRECT!')
    $('.wrong3').text('')
});

$("#question4").click(function(){
    $('#question4').text('CORRECT!')
    $('.wrong4').text('')
});

$("#question5").click(function(){
    $('#question5').text('CORRECT!')
    $('.wrong5').text('')
});

$("#question6").click(function(){
    $('#question6').text('CORRECT!')
    $('.wrong6').text('')
});

$(".wrong1").click(function(){
    $('.wrong1').text('WRONG!')
    $('#question1').text('')
});

$(".wrong2").click(function(){
    $('.wrong2').text('WRONG!')
    $('#question2').text('')
});

$(".wrong3").click(function(){
    $('.wrong3').text('WRONG!')
    $('#question3').text('')
});

$(".wrong4").click(function(){
    $('.wrong4').text('WRONG!')
    $('#question4').text('')
});

$(".wrong5").click(function(){
    $('.wrong5').text('WRONG!')
    $('#question5').text('')
});

$(".wrong6").click(function(){
    $('.wrong6').text('WRONG!')
    $('#question6').text('')
});