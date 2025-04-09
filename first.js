const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string);
                inputBox.value = string;
            } catch (error) {
                inputBox.value = "Error";
                string = "";
            }
        } else if (value === 'AC') {
            string = "";
            inputBox.value = string;
        } else {
            string += value;
            inputBox.value = string;
        }
    });
});

