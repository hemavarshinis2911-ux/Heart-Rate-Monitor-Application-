function checkHeartRate() {
    let bpm = document.getElementById("heartRate").value;
    let result = document.getElementById("result");

    bpm = Number(bpm);

    let status = "";
    let message = "";

    // validation
    if (isNaN(bpm) || bpm <= 0) {
        result.innerHTML = "Please enter a valid heart rate.";
        return;
    }

    // LOW
    if (bpm < 60) {
        status = "Low Heart Rate (Bradycardia)";
        message = "Patient has LOW heart rate. Consult a doctor.";

        result.innerHTML = `
            <h2 style="color:blue;">${status}</h2>
            <ul>
                <li>Stay hydrated</li>
                <li>Avoid sudden movements</li>
                <li>Consult a doctor</li>
            </ul>
        `;
    }

    // NORMAL
    else if (bpm <= 100) {
        status = "Normal Heart Rate";
        message = "Patient heart rate is normal.";

        result.innerHTML = `
            <h2 style="color:green;">${status}</h2>
            <p>Maintain a healthy lifestyle ✅</p>
        `;
    }

    // HIGH
    else {
        status = "High Heart Rate (Tachycardia)";
        message = "⚠ ALERT: High heart rate. Immediate attention required.";

        result.innerHTML = `
            <h2 style="color:red;">${status}</h2>
            <ul>
                <li>Take rest immediately</li>
                <li>Avoid stress and caffeine</li>
                <li>Consult a doctor</li>
            </ul>
        `;
    }

    // ✅ SEND EMAIL
    emailjs.send("service_gpyijio", "template_t9qrqlk", {
        heart_rate: bpm,
        status: status,
        message: message
    })
    .then(function(response) {
        console.log("Email sent ✅", response);
    }, function(error) {
        console.log("Email failed ❌", error);
    });
}
