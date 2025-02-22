function reserve(date, time, no) {
    /*
    *data: the date of reservation
    *time: the time of reservation
    *no: the number of people, type: int
    */
    if (arguments.length != 3) {
        alert("incorrect arguments detected"); // this is not a good way to handle error, this alert should not be activated by your code
        return;
    }
    //an random int as the valid quota
    let valid_quota = Math.floor(Math.random() * 2.0 * no);
    if (no > valid_quota) return false // the quota is full
    else return true; // the quota is not full
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var visitors = document.getElementById('nv').value;

    if (!date || !time || !visitors) {
        document.getElementById('alertingText').innerText =  'Data not completed, please re-enter.';
        document.getElementById('alertingText').style.color = 'red';
        document.getElementById('alertingText').style.textAlign = 'center';

    }
    else if(isNaN(visitors) || visitors < 1) {
        
        document.getElementById('alertingText').innerText =  'Please enter a valid number of people!';
        document.getElementById('alertingText').style.color = 'red';
        document.getElementById('alertingText').style.textAlign = 'center';

    }

    else{
        document.getElementById('alertingText').innerText =  '';

        if (reserve(date, time, parseInt(visitors))) {
            alert("Your reservation is successful!");
        } else {
            alert("Sorry, the reservation is full!");
        }
        return;

    }



});

var btn = document.getElementById('r');

btn.onclick = function(){
    document.getElementById('alertingText').innerText =  '';
};
