// put everything in a document ready function
$(document).ready(function () {
    var currentDay = moment().format('dddd, MMMM Do'); // Wednesday, January 27th
    // print currentday txt to top of page
    $("#currentDay").text(currentDay);

    //standard biz hours are 8am-5pm- 9 blocks
    var workingHours = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    // start of day variable
    var startOfDay = moment().set('hour', 8);
    console.log(startOfDay);
    // var for how much time has passed since start of day
    var currentHour = moment().startOf("day").fromNow();
    console.log(currentHour);

    var calendar = document.querySelector('.timeblock');
    var past = true;
    var present = true;
    var future = true;

    // var for the current day, for Denver tz displayed at top of page

    // create element li item for time blocks for that day
    for (let i = 0; i < workingHours.length; i++) {
        var hour = document.createElement('li');
        var input = document.createElement('input');
        var saveBtn = document.createElement('button');
        var icon = document.querySelector('.far');
        saveBtn.innerHTML = [icon];
        input.type = 'text';
        input.name = 'event' + i;
        hour.textContent = workingHours[i];
        calendar.append(hour);
        hour.appendChild(input);
        hour.append(saveBtn);
        saveBtn.classList.add('saveBtn');
        hour.classList.add('hour');
        input.setAttribute('style', 'width: 80%; height: 10vh;')

    }

    if (hour === past) {
        
    } 
    else if (hour === present) {
       
    } 
    else if (hour === future) {
        
    }

    



    
    
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