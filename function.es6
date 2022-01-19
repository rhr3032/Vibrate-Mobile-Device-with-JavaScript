// Navigator.vibrate()
// The Navigator.vibrate() method pulses the vibration hardware on the device, if such hardware exists. If the device doesn't support vibration, this method has no effect. If a vibration pattern is already in progress when this method is called, the previous pattern is halted and the new one being instead.


// So, now let's get start..........



// for Button 1
function vibrate(ms){
    navigator.vibrate(ms)
}

// for Button 2
function vibratePattern (){
    navigator.vibrate([300,100,300,100,300])
}




// Now host on netlify or any free platform and try in your mobile.


// Enjoy!