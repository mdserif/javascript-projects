const endDate="19 February 2024 08:08 PM "
document.getElementById("date").innerText =endDate;
const input=document.querySelectorAll("input")


const clock=()=>{
    const end=new Date(endDate);
    const now=new Date();

    const diff=(end-now)/1000; // this time is in sec

    if (diff<0) return; // to prevent negative number 

    const days=diff/(60*60*24);
    const hours=(diff/(60*60))%24;
    const minute=(diff/60)%60
    const seconds=(diff%60)

    input[0].value=Math.floor(days);
    input[1].value=Math.floor(hours)
    input[2].value=Math.floor(minute)
    input[3].value=Math.floor(seconds)
}

//initial
clock()

// setInterval will run the clock funtion in every 1 sec=1000ms
// In every cycle the current time changes so the diff changes and the corresponding day,hour,minutes changes.
setInterval(
    ()=>{
        clock(),1000;
    }
)