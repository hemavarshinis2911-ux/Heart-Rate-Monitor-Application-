function checkHeartRate() {
    let bpm = document.getElementById("heartRate").value;
    let result = document.getElementById("result");
    let emailMessage = document.getElementById("emailMessage");

    bpm = Number(bpm);

    let status = "";
    let message = "";
    let suggestions = ""; // ⭐ NEW

    if (isNaN(bpm) || bpm <= 0) {
        result.innerHTML = "Please enter a valid heart rate.";
        return;
    }

    // ✅ LOW HEART RATE
    if (bpm < 60) {
        status = "Low Heart Rate (Bradycardia)";
        message = "Avoid sudden movements. Eat healthy ans stay hydrated. Take light walking and consult Doctor if symptom continues";
        
        suggestions = `
- Stay hydrated
- Avoid sudden movements
- Consult a doctor
        `; // ⭐

        result.innerHTML = `
            <h2 style="color:blue;">${status}</h2>
            <ul>
                <li>Stay hydrated</li>
                <li>Avoid sudden movements</li>
                <li>Consult a doctor</li>
            </ul>
        `;
    }

    // ✅ NORMAL HEART RATE
    else if (bpm <= 100) {
        status = "Normal Heart Rate";
        message = "Heart rate is normal.";

        result.innerHTML = `<h2 style="color:green;">${status}</h2>`;
        return;
    }

    // ✅ HIGH HEART RATE
    else {
        status = "High Heart Rate (Tachycardia)";
        message = "Practice deep breathing or meditation. Drink water and reduce caffine. Take rest";

        suggestions = `
- Take rest immediately
- Avoid stress and caffeine
- Consult a doctor
        `; // ⭐

        result.innerHTML = `
            <h2 style="color:red;">${status}</h2>
            <ul>
                <li>Take rest immediately</li>
                <li>Avoid stress and caffeine</li>
                <li>Consult a doctor</li>
            </ul>
        `;
    }

    // ✅ ✅ CREATE EMAIL WITH SUGGESTIONS ⭐
    let fullMessage = `
🚑 Heart Rate Alert

Heart Rate: ${bpm} BPM
Status: ${status}

Message:
${message}

Recommended Actions:
${suggestions}

(This is an automated alert)
    `;

    emailMessage.value = fullMessage;

    // ✅ SEND EMAIL
    document.getElementById("emailForm").submit();

    alert("✅ Email sent successfully!");
}
