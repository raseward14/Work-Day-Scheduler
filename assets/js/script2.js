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
        var row = document.createElement('div');
        var timeBlock = document.createElement('div');
        var hour = document.createElement('p');
        var textarea = document.createElement('textarea');
        var saveBtn = document.createElement('button');
        // var icon = document.createElement('i')

        saveBtn.innerHTML = 'save';
        // textarea.type = 'text';
        hour.textContent = workingHours[i];

        schedule.appendChild(row);
        row.appendChild(timeBlock);
        timeBlock.append(hour);
        timeBlock.append(textarea);
        timeBlock.append(saveBtn);
        // saveBtn.appendChild(icon);

        row.classList.add('time-block');
        timeBlock.classList.add('row');
        hour.classList.add('hour');
        textarea.classList.add('textarea');
        saveBtn.classList.add('saveBtn');
        // icon.classList.add('far fa-save')
        var hr = parseInt(workingHours[i].replace('am', '').replace('pm', ''));
        if (hr < 8) {
            hr = hr + 12;
        };
        $(textarea).attr('data-hour', hr);
    }

    $('.textarea').each(function (index, textarea) {
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
    var todosArray = [];
    console.log(todosArray);

    // print the objects from our array onto the page
    function renderTodos() {

        var todo = document.querySelector('.textarea');
        todo.textContent = todosArray[0].item;
        console.log(todo);

        // for each object in the todosArray, loop through and if the object.time is strictly equal to the hour.textcontent from the html, then make this object.items value equal to the hour's sibling textarea element
        for (let i = 0; i < todosArray.length; i++) {

            
            
        }
       
    }

    // grab any todos strings from local storage, change back into objects
    function init() {
        // parse to change todos strings back into objects, set these objects equal to a variable todaysTodos
        var todaysTodos = JSON.parse(localStorage.getItem('todos'));

        // if we look in local storage, find key todos, then put them back into the array todosArray by making that equal to the varialbe we just made for todaysTodos 
        if (todaysTodos !== null) {
            todosArray = todaysTodos;
        }
        console.log(todosArray);

        // now show them on the screen
        renderTodos();
    }
    init();

    // on click event for timeblocks
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        // store input value
        var todoInput = $(this).siblings('textarea').val();
        console.log("The todo is = " + todoInput);

        // stored hour value
        var hour = $(this).siblings('p').text();
        console.log("The hour is = " + hour);

        // object with input value and hour
        var storedTodos = {
            time: hour,
            item: todoInput
        };

        // push these storedTodos objects to an array of objects
        todosArray.push(storedTodos);

        // store all todos that have been pushed to the array
        // dont forget to stringify
        localStorage.setItem('todos', JSON.stringify(todosArray));

        // call renderTodos function that parses local storage, prints todos to page
        renderTodos();
    });
    
    console.log(document.body);
});


// saved events stay in local storage after refreshing page

// JSON.parse- takes string and creates object, have a string, i want to change it to an object to print back onto my page
// JSON.stringify- takes an object anc creates a string
