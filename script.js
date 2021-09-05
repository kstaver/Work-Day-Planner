//Global Variables
    //Moment assignments
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
    //Hours
var ninAM = $("#9am");
var tenAM = $('#10am');
var elevenAM = $('#11am');
var twelvePM = $('#12am');
var onePM = $('#1pm');
var twoPM = $('#2pm');
var threePM = $('#3pm');
var fourPM = $('#4pm');
var fivePM = $('#5pm');
var sixPM = $('#6pm');
var sevenPM = $('#7pm');

var hour = moment().hours();
var userInput;
var hourSpan;
//var hourString = $(".hour").text().split(" ");

//Calculate the date and hour in real time
var interval = setInterval(function(){

    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' ' + momentNow.format('dddd').substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

//Store user's input and assign it to a time
function initPage(){

    console.log("Current Hour " + hour);

    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAM.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"));
    tenAM.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("11:00 am"));
    elevenAM.val(init11);
    
    var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
    twelveAM.val(init12);
    
    var init1 = JSON.parse(localStorage.getItem("01:00 pm"));
    oneAM.val(init1);
    
    var init2 = JSON.parse(localStorage.getItem("02:00 pm"));
    twoAM.val(init2);
    
    var init3 = JSON.parse(localStorage.getItem("03:00 pm"));
    threeAM.val(init3);
    
    var init4 = JSON.parse(localStorage.getItem("04:00 pm"));
    fourAM.val(init4);

    var init5 = JSON.parse(localStorage.getItem("05:00 pm"));
    fiveAM.val(init5);

    var init6 = JSON.parse(localStorage.getItem("06:00 pm"));
    sixAM.val(init6);
 
    var init7 = JSON.parse(localStorage.getItem("07:00 pm"));
    sevenAM.val(init7);
}

function background(){

    $(".form-control").each(function(){

        var timeTest = parseInt($(this).attr("id"));
        hour = pasreInt(hour);
        console.log(timeTest);
        console.log(hour);

        if(hour > timeTest){
            $(this).addClass("past");
        }else if(hour < timeTest){
            $(this).addClass("future");
        }else{
            $(this).addClass("present");
        }
    });
}

$(document).ready(function(){

    initPage()
    background()

    //Buttons for gathering data from a user and saving it
    $(".saveBtn").on("click", function (){

        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".inout-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })

    //Button for Clear Day
    $("#clearDay").on("click", function(){

        localStorage.clear();
        initPage()
    })
});
