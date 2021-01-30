// put everything in a document ready function
$(document).ready(function () {
    // var for the current day, for Denver tz displayed at top of page
    var currentDay = moment().format('dddd, MMMM Do'); // Wednesday, January 27th
    // print currentday txt to top of page
    $("#currentDay").text(currentDay);

    //standard biz hours are 8am-5pm- 9 blocks
    var workingHours = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

    var currentHour = parseInt(moment().format('HH'));
    // var currentHour = 13;
    console.log(currentHour);

    // create element p item for time blocks for that day
    for (let i = 0; i < workingHours.length; i++) {
        var schedule = document.querySelector('.container');
        var hour = document.createElement('p');
        var input = document.createElement('input');
        var saveBtn = document.createElement('button');
        var timeBlock = document.createElement('div');
        saveBtn.innerHTML = 'save';
        input.type = 'text';
        hour.textContent = workingHours[i];
        schedule.appendChild(timeBlock);
        timeBlock.appendChild(hour);
        timeBlock.appendChild(input);
        timeBlock.appendChild(saveBtn);
        saveBtn.classList.add('saveBtn');
        hour.classList.add('hour');
        input.classList.add('textarea');
        timeBlock.classList.add('row');
        var hr = parseInt(workingHours[i].replace('am', '').replace('pm', ''));
        if (hr < 8) {
            hr = hr + 12;
        };
        $(input).attr('data-hour', hr);
    }

    $('.textarea').each(function (index, input) {
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

    // array of storedtodos
    // var storedTodos = [];
    // console.log(storedTodos);

    // print todos onto page when refreshed
    function renderTodos() {
        // value of todoInput printed to input element value
        // each todo will be one of the storedTodos items indexes
        var storedTodos = JSON.parse(localStorage.getItem('todos'));
    }

    // on click event for timeblocks
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        // store input value
        var todoInput = $(this).siblings('input').val();
        console.log("The todo is = " + todoInput);

        // todo input is pushed onto stored todos array
        // storedTodos.push(todoInput);

        // stored hour value
        var hour = $(this).siblings('p').text();
        console.log("The hour is = " + hour);

        // object with input value and hour
        var storedTodos = {
            time: hour,
            item: todoInput
        };    

        // store all todos that have been pushed to the array
        localStorage.setItem('todos', JSON.stringify(storedTodos));

        renderTodos();

    });

    console.log(document.body);
});


    // saved events stay in local storage after refreshing page
