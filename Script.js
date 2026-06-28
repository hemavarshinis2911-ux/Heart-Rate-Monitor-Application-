function checkHeartRate() {
    let bpm = document.getElementById("heartRate").value;
    let result = document.getElementById("result");

    // Convert to number
    bpm = Number(bpm);

    if (bpm === 0 || isNaN(bpm)) {
        result.innerHTML = "Please enter a valid heart rate.";
        result.style.color = "black";
        return;
    }

    if (bpm < 60) {
        result.innerHTML = "Low Heart Rate (Bradycardia)";
        result.style.color = "blue";
        alert("⚠ Warning: Heart rate is too low!");
    } 
    else if (bpm >= 60 && bpm <= 100) {
        result.innerHTML = "Normal Heart Rate ✅";
        result.style.color = "green";
    } 
    else {
        result.innerHTML = "High Heart Rate (Tachycardia)";
        result.style.color = "red";
        alert("⚠ Warning: Heart rate is too high!");
    }
}
