$(document).ready(function () {
    let currentDay = $('#currentDay');
    let eachHour = $('.time-block');
    let savBtn = $('.saveBtn'); 
    let currentHour = dayjs().hour();

    // Display the current date
    currentDay.text(dayjs().format('MM/DD/YYYY'));


    // Function used to update the hours and display the past, preasent and past color scheme to each text block.
    function getTime() {
        
        console.log(currentHour);
        eachHour.each(function () {
          let setHour = parseInt($(this).attr('id'));

            console.log(setHour);
          if (setHour < currentHour) {
            $(this).addClass('past');
          } else if (setHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
        });
        
        setInterval(getTime, 15000);
      }
      getTime();


    savBtn.on('click', function() {
        // get the save buttons parent id
        let currentTime = $(this).parent().attr('id');
        // get the value for any sibbling elements of the button elements
        let textValue = $(this).siblings('.description').val();
        // save the parrent id as the key value and save the text as the value in local storage.
        localStorage.setItem(currentTime, textValue);
        // $('.saved').show();

        // setTimeout(()=> {
        //   $('.saved').hide();
        // }, 5000);

        
    })














})