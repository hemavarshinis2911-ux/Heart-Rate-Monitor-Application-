function checkHeartRate() {
    let bpm = document.getElementById("heartRate").value;
    let result = document.getElementById("result");

    bpm = Number(bpm);

    if (isNaN(bpm) || bpm <= 0) {
        result.innerHTML = "Please enter a valid heart rate.";
        result.style.color = "black";
        return;
    }

    // ✅ LOW HEART RATE
    if (bpm < 60) {
        result.innerHTML = `
            <h2 style="color:blue;">Low Heart Rate (Bradycardia)</h2>
            <p><b>Suggestions:</b></p>
            <ul>
                <li>Consult a doctor if you feel dizzy</li>
                <li>Drink enough water</li>
                <li>Avoid sudden movements</li>
            </ul>
        `;
    }

    // ✅ NORMAL HEART RATE
    else if (bpm <= 100) {
        result.innerHTML = `
            <h2 style="color:green;">Normal Heart Rate ✅</h2>
            <p><b>Suggestions:</b></p>
            <ul>
                <li>Continue a healthy lifestyle</li>
                <li>Exercise regularly</li>
                <li>Eat balanced food</li>
            </ul>
        `;
    }

    // ✅ HIGH HEART RATE
    else {
        result.innerHTML = `
            <h2 style="color:red;">High Heart Rate (Tachycardia)</h2>
            <p><b>Suggestions:</b></p>
            <ul>
                <li>Take rest immediately</li>
                <li>Avoid stress and caffeine</li>
                <li>Consult a doctor if needed</li>
            </ul>
        `;
    }
}
