let display = document.getElementById('text-box');
        let currentInput = '';

        function appendNumber(number) {
            currentInput += number;
            updateDisplay();
        }

        function appendSymbol(symbol) {
            currentInput += symbol;
            updateDisplay();
        }

        function appendDecimal() {
            if (!currentInput.includes('.')) {
                currentInput += '.';
                updateDisplay();
            }
        }

        function clearDisplay() {
            currentInput = '';
            updateDisplay();
        }

        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }

        function calculateResult() {
            try {
                currentInput = eval(currentInput).toString();
                updateDisplay();
            } catch (error) {
                currentInput = 'Error';
                updateDisplay();
            }
        }

        function updateDisplay() {
            display.value = currentInput;
        }