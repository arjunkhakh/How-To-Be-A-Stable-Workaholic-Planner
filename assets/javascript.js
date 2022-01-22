var date = document.querySelector("#currentDay");

var textArea = document.querySelectorAll(".textarea");

var container = document.querySelector(".container")

var hour = document.querySelectorAll(".hour") 

var button = document.querySelectorAll(".saveBtn")

date.textContent = moment().format("dddd DDDo MMMM YYYY")

var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

// Get data-id and get into local storage as long as each button is unique. Set Two Variables for the unique data-id and the value of the textArea for the buttons so it can grab these items and set into Local Storage.
// May not need to parse as it is not part of an array.
// Compare the times with moment.js (May come in EU hours).

$(hour).each(function(i)
{
     $(this).attr("data-id",time[i]);
      $(this).html(time[i]);
 });

 function clearStorage(event) {
     localStorage.clear()
 }

 $(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // $(".saveBtn").on("click", function(){
    // var plannerText = $(this).siblings(".description").val();
    // var time = $(this).siblings().attr("data-id");
    // localStorage.setItem(time, plannerText);

    $(button).on("click", function(){
        var plannerText = $(button).siblings(".description").val();
        var time = $(button).parent().attr("id");
        localStorage.setItem(time, plannerText);

})

 $("#9am. description").val(localStorage.getItem("9am"));
 $("#10am. description").val(localStorage.getItem("10am"));
 $("#11am. description").val(localStorage.getItem("11am"));
 $("#12pm. description").val(localStorage.getItem("12pm"));
 $("#1pm. description").val(localStorage.getItem("1pm"));
 $("#2pm. description").val(localStorage.getItem("2pm"));
 $("#3pm. description").val(localStorage.getItem("3pm"));
 $("#4pm. description").val(localStorage.getItem("4pm"));
 $("#5pm. description").val(localStorage.getItem("5pm"));
 $("#6pm. description").val(localStorage.getItem("6pm"));
 
});

// function set(){
//     var sendJSON = JSON.stringify(textArea.value);
//     localStorage.setItem('textarea', sendJSON)
// }

// function get(){
//     var getJSON = localStorage.getItem('textarea') || [];
//     if (getJSON){
    
//     textArea = JSON.parse(getJSON)
//     }
// }



// function onClick() {
//     // let textValue = textArea.value;
//     // if (textValue) {
//     //     var userScore = { time: textValue };
//     //     textArea.value = '';
//     //     highScores = JSON.parse(localStorage.getItem(textArea)) || [];
//     //     highScores.push(userScore)
//     //     localStorage.setItem(textArea, JSON.stringify(highScores));
        
//     // }

//     set()
//     get()
// }

// if (hour < moment().format("HH")) {
//     container.attr({ "class": "past", 
//     })
// }
// else if (hour === moment().format("HH")) {
//     container.attr({ "class": "present", 
//     })
// }
// else if (hour > moment.format("HH")) {
//     container.attr({ "class": "future", 
//     })
// }