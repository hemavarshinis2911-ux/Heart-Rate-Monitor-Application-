function checkHeartRate() {
    let bpm = document.getElementById("heartRate").value;
    let result = document.getElementById("result");

    bpm = Number(bpm);

    if (isNaN(bpm) || bpm <= 0) {
        result.innerHTML = "Please enter a valid heart rate.";
        result.style.color = "black";
        return;
    }

    // LOW HEART RATE
    if (bpm < 60) {
        result.innerHTML = `
            <p style="color:blue;"><b>Low Heart Rate (Bradycardia)</b></p>
            <p>💡 Suggestion:</p>
            <ul>
                <li>Consult a doctor if feeling dizzy or weak</li>
                <li>Stay hydrated</li>
                <li>Avoid sudden movements</li>
            </ul>
        `;
        alert("⚠ Warning: Heart rate is too low!");
    } 
    
    // NORMAL HEART RATE
    else if (bpm <= 100) {
        result.innerHTML = `
            <p style="color:green;"><b>Normal Heart Rate ✅</b></p>
            <p>💡 Suggestion:</p>
            <ul>
                <li>Maintain a healthy lifestyle</li>
                <li>Exercise regularly</li>
                <li>Eat a balanced diet</li>
            </ul>
        `;
    } 
    
    // HIGH HEART RATE
    else {
        result.innerHTML = `
            <p style="color:red;"><b>High Heart Rate (Tachycardia)</b></p>
            <p>💡 Suggestion:</p>
            <ul>
                <li>Take rest and relax</li>
                <li>Avoid caffeine and stress</li>
                <li>Consult a doctor if it continues</li>
            </ul>
        `;
        alert("⚠ Warning: Heart rate is too high!");
    }
}
