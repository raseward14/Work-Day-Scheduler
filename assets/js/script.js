// put everything in a document ready function
$(document).ready(function () {
    // define variables
    // var for the current day, for Denver tz displayed at top of page
    // var for how much time has passed since 8am
    var past = true;
    var present = true;
    var future = true;

    // current day formats
    // var currentDay = moment().format('LLLL'); // friday january 27th at 5:56am
    // var currentDay = moment().format('MM DD YYYY'); // 01 27 2021
    var currentDay = moment().format('MMMM DD YYYY'); // January 27 2021
    // var currentDay = moment().format('MMMM Do [the great year of] YYYY'); // January 27th the great year of 2021
    // var currentDay = moment().format('LLLL'); // friday january 27th at 5:56am
    console.log(currentDay);

    // from now 
    var fromNow = moment('20210101', 'YYYYMMDD').fromNow(); // a month ago
    console.log(fromNow);

    // from start of day
    var startOfDay = moment().startOf("day").fromNow(); // 6 hours ago
    console.log(startOfDay);

    // getters - calling WITHOUT parameter
    // these two are the exact same
    // moment().seconds(30) === new Date().setSeconds(30);
    console.log(moment().seconds(30)); // will log in increments of 30
    // setters - calling WITH a paramenter
    // these two are the exact same
    // moment().seconds() === new Date().setSeconds();
    console.log(moment().seconds()); // logs the exact second, will change every time i refresh page

    // duration- length of time- parameter = #of milliseconds
    console.log(moment.duration(3000)); // PT3s... whaaaa
    console.log(moment.duration(3000).humanize()); // a few seconds ago (3000 milliseconds is 3 seconds)
    // can specify type of time measure
    console.log(moment.duration(3600, 'seconds').hours()); // 1 (3600 seconds is indeed 1 hour)
    console.log(moment.duration(7200, 'seconds').hours()); // 2 (7200 seconds is indeed 2 hour)

    // display dates in many languages
    moment.locale('es'); // this is the country code for spanish - logs march in spanish.. whoa
    var march = moment('2021-03');
    console.log(march.format('MMMM'));

    // check out moment.js documentation
    // good examples on how to use it
    // instructions on how to include moment.js into project



    // print currentday txt to top of page
    $("#currentDay").text(currentDay);

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

