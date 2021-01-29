// put everything in a document ready function
$(document).ready(function () {
    // var for the current day, for Denver tz displayed at top of page
    var currentDay = moment().format('dddd, MMMM Do'); // Wednesday, January 27th
    // print currentday txt to top of page
    $("#currentDay").text(currentDay);

    //standard biz hours are 8am-5pm- 9 blocks
    var workingHours = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    // var for how much time has passed since start of day
    // var currentHour = parseInt(moment().format('HH'));
    var currentHour = 13;
    console.log(currentHour);

    var schedule = document.querySelector('.container');


    // create element li item for time blocks for that day
    for (let i = 0; i < workingHours.length; i++) {
        var hour = document.createElement('p');
        var input = document.createElement('input');
        var saveBtn = document.createElement('button');
        var timeBlock = document.createElement('div');
        saveBtn.innerHTML = "save";
        input.type = 'text';
        hour.textContent = workingHours[i];
        schedule.append(timeBlock);
        timeBlock.append(hour);
        hour.appendChild(input);
        hour.append(saveBtn);
        saveBtn.classList.add('saveBtn');
        hour.classList.add('hour');
        input.classList.add('textarea');
        var hr = parseInt(workingHours[i].replace('am', '').replace('pm', ''));
        if (hr < 8) {
            hr = hr + 12;
        };
        $(input).attr('data-hour', hr);
        // timeBlock.classList.add('row');
    }

    $('.textarea').each(function(index, input) {
        var hour = parseInt($(this).attr('data-hour'));
        console.log(typeof hour, typeof currentHour);
        if (hour < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } 
        else if (hour === currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        } 
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
    
    
    $(".saveBtn").on("click", function() {
        var todo = {
            time: currentHour.value,
            item: input,
        }
        localStorage.setItem('input', JSON.stringify(todo));

    });

    var todos = JSON.parse(localStorage.getItem('input'));

});
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
