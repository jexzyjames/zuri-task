var day = document.getElementById('day')
var utc = document.getElementById('time')

var days = ['days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let show = new Date().getDay();


let current = new Date();
console.log(current);
// console.log(show);


for (let index = 0; index < days.length; index++) {
    const shoe = new Date();

    const hours = shoe.getUTCHours() 
    const minutes = shoe.getUTCMinutes() 
    const seconds =shoe.getUTCSeconds()
   utc.innerText = hours + ':' + minutes + ':' + seconds;
    function result(){
        if(show.length = days[index]){
    
            day.innerText =  days[show] ;
            return show;
            
                }
    }
  
    
}

window.onload = ()=>{
    result();

}
