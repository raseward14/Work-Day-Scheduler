// put everything in a document ready function
$(document).ready(function () {
    // define variables
    // var for the current day, for Denver tz displayed at top of page
    // var for how much time has passed since 8am
    var past = true;
    var present = true;
    var future = true;

    var currentDay = moment().format('dddd, MMMM Do'); // Wednesday, January 27th
    // print currentday txt to top of page
    $("#currentDay").text(currentDay);

    console.log(currentDay);

    var currentHour = moment().startOf("day").fromNow();
    console.log(currentHour);



    // create element li item for time blocks for that day
    //standard biz hours are 8am-5pm- 9 blocks
    // append to the previous li item
    // for loop see activity 8 lotto generator

    // color code time blocks
    // grey for past, red for current, green for future

    // on click event for timeblocks
    // input an event
    // on click save button
    // txt for this timeblock saved to local storage
    // see week 4 local storage set item
    // saved events stay in local storage after refreshing page
});