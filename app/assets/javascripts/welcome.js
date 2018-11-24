// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


var titleField = '';
var textField = '';


jQuery(function(){

  $('#aboutPageButton').click(function(){
    console.log('inside aboutPageButton click');
    window.location.href = '/about';
  })

  $('#buttonPOST').click(function(){
    console.log('inside buttonPOST');
    console.log('BEFORE AJAX REQUEST');

    console.log('value of titleField: ', titleField);
    console.log('value of textField: ', textField);

    var dataJSON = JSON.stringify({
      "title": titleField,
      "text": textField
    });

    console.log('value of dataJSON: ', dataJSON);

    fetch("/rez", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
      },
      body: dataJSON
    })
    .then( (response) => { 
      console.log('value of response: ', response);
    })
    .catch( (error) => {
      console.log('value of error: ', error);
    });
    console.log('AFTER AJAX REQUEST');
  });

  $('#buttonGET').click(function(){
    console.log('inside buttonGET');

    fetch("/rez", {
      method: "get",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
      },
    })
    .then( response => response.json())
    .then((data) => {
      console.log('value of data: ', data);
      $("#listReturn").empty();
      data.forEach(element => {
        $("#listReturn").append("<strong>Title:</strong> " + element.title + " <strong>Text:</strong> " + element.text + '<br/>');
      });
    })
    .catch((error) =>{
      console.log('value of error: ', error);
    });

  })

  $('#inputField1').on('keyup', function(inputVal) {
    console.log('inside inputField1 handler on change and inputVal: ', inputVal.target.value);
    titleField = inputVal.target.value;
  });

  $('#inputField2').on('keyup', function(inputVal) {
    console.log('inside inputField2 handler on change and inputVal: ', inputVal.target.value);
    textField = inputVal.target.value;
  });

});

