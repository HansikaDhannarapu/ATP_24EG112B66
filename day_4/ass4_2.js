//2.OTP Countdown Simulator (Console App)
// Simulate OTP sending flow in Node.js:
// Show “OTP Sent Successfully”
console.log("OTP Sent Successfully")
//Start 10-second countdown
//Allow resend only after countdown ends*/
let seconds=10
let interval=setInterval(()=>{
    seconds--;
    console.log(`OTP can resend after ${seconds} seconds`)
    if(seconds===0){
        console.log("Resend OTP")
        clearInterval(interval)
    }
},1000)
