function displayCurrentTime() {
    const currentTimeDiv = document.getElementById('currentTimeUTC');
    const currentDayUTC = document.getElementById('currentDayUTC')
    const now = new Date();
    
    //Time
    let timeNow = now.toUTCString()
    //Date
    let day = now.getDay();
    let month = now.getMonth()+1;
    let year = now.getFullYear();
    currentDayUTC.innerHTML = `${day}-${month}-${year}`;
    currentTimeDiv.innerHTML = timeNow;
}

window.onload = function() {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000); 
}