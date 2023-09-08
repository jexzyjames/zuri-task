var day = document.getElementById('day')
var utc = document.getElementById('time')

var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let show = new Date().getDay();



//cDay.innerText = f.format(date);//




// console.log(show);


 window.addEventListener('DOMContentLoaded', ()=>{
for (let index = 0; index < days.length; index++) {
        setInterval(   function result() {
        
        let shoe = new Date();
         console.log(shoe);
        const seconds = shoe.getTime();
        // console.log(second);
        utc.innerText = seconds;

        if (show.length = days[index]) {

            day.innerText = days[show];
            return show;

        }

    }, 1000);
}
})





