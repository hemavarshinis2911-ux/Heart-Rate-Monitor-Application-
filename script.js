function checkHeartRate() {
    let bpm = document.getElementById("heartRate").value;
    let result = document.getElementById("result");

    bpm = Number(bpm);

    if (isNaN(bpm) || bpm <= 0) {
        result.innerHTML = "Please enter a valid heart rate.";
        result.style.color = "black";
        return;
    }

    // LOW
    if (bpm < 60) {
        result.innerHTML = `
            <div style="color:blue;">
                <h2>Low Heart Rate (Bradycardia)</h2>
                <p><b>Suggestions:</b></p>
                <ul>
                    <li>Consult a doctor if symptoms occur</li>
                    <li>Stay hydrated</li>
                    <li>Avoid sudden standing or movement</li>
                </ul>
            </div>
        `;
    }

    // NORMAL
    else if (bpm <= 100) {
        result.innerHTML = `
            <div style="color:green;">
                <h2>Normal Heart Rate ✅</h2>
                <p><b>Suggestions:</b></p>
                <ul>
                    <li>Maintain a healthy diet</li>
                    <li>Exercise regularly</li>
                    <li>Continue good habits</li>
                </ul>
            </div>
        `;
    }

    // HIGH
    else {
        result.innerHTML = `
            <div style="color:red;">
                <h2>High Heart Rate (Tachycardia)</h2>
                <p><b>Suggestions:</b></p>
                <ul>
                    <li>Take rest immediately</li>
                    <li>Avoid caffeine and stress</li>
                    <li>Consult a doctor if it continues</li>
                </ul>
            </div>
        `;
    }
}
