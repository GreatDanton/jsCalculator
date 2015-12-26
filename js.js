$(document).ready(function() {
  var expArray = [];
  var resultsArray = [];
  $(".number").on('click', function(){
    var text = $('.display').text();
    var number = $(this).text();
    expArray.push(number);
    $('.display').html(text + number);
  });

  $(".operator").on('click', function() {
    text = $('.display').text();
    var operator = $(this).text();
    $('.display').html(text + operator);
    switch (operator) {
      case '×':
        expArray.push('*');
        break;
      case '+':
        expArray.push('+');
        break;
      case '–':
        expArray.push('-');
        break;
      case '÷':
        expArray.push('/');
        break;
      case 'Ans':
        expArray.push(resultsArray[resultsArray.length-1]);
      default:
    }
  });

  $('.equal').on('click', function() {
    if(expArray.length === 0) {
      return;
    }
    var finalNumber = eval(expArray.join(''));
    var finalNumber = parseFloat(finalNumber.toFixed(4));
    $('.display').text('');
    $('.display').html(finalNumber);
    expArray=[];
    expArray.push(finalNumber);
    resultsArray.push(finalNumber);
  });

  $('.AC').on('click', function() {
    $('.display').text('');
    expArray =  [];
  });

  $('.DEL').on('click', function() {
    expArray.pop();
    var text = $('.display').text();
    text = text.slice(0, text.length - 1);
    $('.display').html(text);
  });
});
