document
  .getElementById("predict-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const engine_size = parseFloat(document.getElementById("engine_size").value);
    const cylinders = parseFloat(document.getElementById("cylinders").value);
    const fuel_city = parseFloat(document.getElementById("fuel_city").value);
    const fuel_hwy = parseFloat(document.getElementById("fuel_hwy").value);
    const fuel_comb = parseFloat(document.getElementById("fuel_comb").value);
    const fuel_mpg = parseFloat(document.getElementById("fuel_mpg").value);

    // Add loading state to button
    const btn = e.target.querySelector("button");
    const originalBtnText = btn.textContent;
    btn.textContent = "Analyzing...";
    btn.disabled = true;

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          engine_size, 
          cylinders, 
          fuel_city, 
          fuel_hwy, 
          fuel_comb, 
          fuel_mpg 
        }),
      });
      const data = await response.json();

      const resultDiv = document.getElementById("result");
      resultDiv.textContent = `Predicted: ${data.prediction.toFixed(2)} g/km`;
      resultDiv.classList.add("show");

      // Show the visualization panel and expand container width
      const rightPanel = document.querySelector(".right-panel");
      const container = document.querySelector(".container");
      if (rightPanel) {
        rightPanel.classList.add("visible");
      }
      if (container) {
        container.classList.add("expanded");
      }

      drawGauge(data.prediction);
      drawPie([engine_size, cylinders, fuel_city, fuel_hwy, fuel_comb, fuel_mpg]);
    } catch (error) {
      console.error("Prediction failed:", error);
      document.getElementById("result").textContent =
        "Error: Backend unreachable";
      document.getElementById("result").classList.add("show");
    } finally {
      btn.textContent = originalBtnText;
      btn.disabled = false;
    }
  });

function drawGauge(value) {
  const canvas = document.getElementById("gauge");
  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height - 30;
  const radius = 100;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background arc
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI);
  ctx.lineWidth = 15;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineCap = "round";
  ctx.stroke();

  // Progress gradient
  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  grad.addColorStop(0, "#ff85a2"); // Light Pink
  grad.addColorStop(0.5, "#ff007f"); // Hot Pink
  grad.addColorStop(1, "#9c27b0"); // Purple

  // Value arc (capped at 500 for visualization)
  const angle = Math.PI + (Math.min(value, 500) / 500) * Math.PI;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, Math.PI, angle);
  ctx.lineWidth = 15;
  ctx.strokeStyle = grad;
  ctx.lineCap = "round";
  ctx.stroke();

  // Center text
  ctx.font = "bold 24px Outfit";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText(`${value.toFixed(1)}`, centerX, centerY - 20);

  ctx.font = "weight 400 14px Outfit";
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.fillText("CO2 g/km", centerX, centerY + 10);
}

function drawPie(values) {
  const canvas = document.getElementById("pie");
  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 90;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const total = values.reduce((a, b) => a + b, 0);
  let startAngle = -0.5 * Math.PI;

  const colors = [
    "#ff007f", // Hot Pink
    "#9b5de5", // Purple
    "#f15bb5", // Magenta
    "#fee440", // Yellow
    "#00bbf9", // Ocean Blue
    "#00f5d4", // Mint Green
  ];
  const labels = ["Eng", "Cyl", "City", "Hwy", "Comb", "MPG"];

  ctx.shadowBlur = 15;

  for (let i = 0; i < values.length; i++) {
    const sliceAngle = (values[i] / total) * 2 * Math.PI;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    ctx.closePath();

    ctx.fillStyle = colors[i];
    ctx.shadowColor = colors[i] + "66";
    ctx.fill();

    // Labels
    const midAngle = startAngle + sliceAngle / 2;
    const labelX = centerX + Math.cos(midAngle) * (radius + 25);
    const labelY = centerY + Math.sin(midAngle) * (radius + 25);

    ctx.shadowBlur = 0;
    ctx.font = "600 12px Outfit";
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.textAlign = "center";
    ctx.fillText(labels[i], labelX, labelY);

    startAngle += sliceAngle;
  }

  // Draw inner circle for donut look
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
  ctx.fillStyle = "#1e3a45"; // Matches background roughly
  ctx.fill();

  ctx.font = "bold 14px Outfit";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Inputs", centerX, centerY + 5);
}
