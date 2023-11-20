const celsiusInput = document.getElementById("celsius");
        const fahrenheitInput = document.getElementById("fahrenheit");
        const convertButton = document.getElementById("convert");
        const result = document.getElementById("result");

        convertButton.addEventListener("click", () => {
            const celsiusValue = parseFloat(celsiusInput.value);
            const fahrenheitValue = parseFloat(fahrenheitInput.value);

            if (!isNaN(celsiusValue)) {
                const fahrenheitResult = (celsiusValue * 9/5) + 32;
                fahrenheitInput.value = fahrenheitResult.toFixed(2);
                result.textContent = `${celsiusValue}°C is equal to ${fahrenheitResult.toFixed(2)}°F`;
            } else if (!isNaN(fahrenheitValue)) {
                const celsiusResult = (fahrenheitValue - 32) * 5/9;
                celsiusInput.value = celsiusResult.toFixed(2);
                result.textContent = `${fahrenheitValue}°F is equal to ${celsiusResult.toFixed(2)}°C`;
            } else {
                result.textContent = "Please enter a valid temperature value.";
            }
        });