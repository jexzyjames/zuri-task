var day = document.getElementById('day')
var utc = document.getElementById('time')

var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let show = new Date().getDay();

let open = new Intl.DateTimeFormat("en-us",{dateStyle : "full"});

//cDay.innerText = f.format(date);//


let current = new Date();
console.log(current);
console.log(open);
// console.log(show);


 window.addEventListener('DOMContentLoaded', ()=>{
for (let index = 0; index < days.length; index++) {
        setInterval(   function result() {
        const seconds = shoe.getUTCMilliseconds();
        
         
        // console.log(second);
        utc.innerText = seconds;

        if (show.length = days[index]) {

            day.innerText = days[show];
            return show;

        }

    }, 1000);
}
})





