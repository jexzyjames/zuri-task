var day = document.getElementById('day')
var utc = document.getElementById('time')

var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let show = new Date().getDay();


let current = new Date();
console.log(current);
// console.log(show);


 window.addEventListener('DOMContentLoaded', ()=>{
for (let index = 0; index < days.length; index++) {
        setInterval(   function result() {
        let second;
        let minute;
        let hour;
        const shoe = new Date();
        const hours = shoe.getUTCHours()
        const minutes = shoe.getUTCMinutes()
        const seconds = shoe.getUTCSeconds()
        if (seconds < 10 ) {
            second = '0' + seconds;

        }
         else if(seconds > 9){
            second = seconds;
        }
         if(minutes < 10 ){
            minute = '0' + minutes;
        }
        else if (minutes > 9){
            minute = minutes;

        }
        if(hours < 10 ){
            hour = '0' + hours;
        }
        else if (hours > 9){
            hour = hours;

        }
        // console.log(second);
        utc.innerText = hour + ':' + minute + ':' + second + '  GMT';

        if (show.length = days[index]) {

            day.innerText = days[show];
            return show;

        }

    }, 1000);
}
})





