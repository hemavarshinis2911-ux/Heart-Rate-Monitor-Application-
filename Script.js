function checkHeartRate() {
    let heartRate = document.getElementById("heartRate").value;
    let result = document.getElementById("result");

    if (heartRate === "") {
        result.innerHTML = "Please enter your heart rate.";
    } 
    else if (heartRate < 60) {
        result.innerHTML = "⚠️ Low Heart Rate! Consult a doctor.";
    } 
    else if (heartRate > 100) {
        result.innerHTML = "⚠️ High Heart Rate! Please take rest and consult a doctor.";
    } 
    else {
        result.innerHTML = "✅ Normal Heart Rate. Keep maintaining a healthy lifestyle!";
    }
}
