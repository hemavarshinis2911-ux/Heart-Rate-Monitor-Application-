function checkHeartRate() {
    let bpm = document.getElementById("heartRate").value;
    let result = document.getElementById("result");
    let emailMessage = document.getElementById("emailMessage");

    bpm = Number(bpm);

    let status = "";
    let message = "";

    if (isNaN(bpm) || bpm <= 0) {
        result.innerHTML = "Please enter a valid heart rate.";
        return;
    }

    // LOW
    if (bpm < 60) {
        status = "Low Heart Rate (Bradycardia)";
        message = "Patient has LOW heart rate. Consult a doctor.";

        result.innerHTML = `<h2 style="color:blue;">${status}</h2>`;
    }

    // NORMAL
    else if (bpm <= 100) {
        status = "Normal Heart Rate";
        message = "Heart rate is normal.";

        result.innerHTML = `<h2 style="color:green;">${status}</h2>`;
        return; // ❌ no email for normal
    }

    // HIGH
    else {
        status = "High Heart Rate (Tachycardia)";
        message = "⚠ ALERT: High heart rate. Immediate attention needed.";

        result.innerHTML = `<h2 style="color:red;">${status}</h2>`;
    }

    // ✅ Create email content
    let fullMessage = `
🚑 Heart Rate Alert

Heart Rate: ${bpm} BPM
Status: ${status}

${message}
    `;

    emailMessage.value = fullMessage;

    // ✅ Submit form automatically
    document.getElementById("emailForm").submit();

    alert("✅ Email sent successfully!");
}
