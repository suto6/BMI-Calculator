const heightElement = document.getElementById("height");
const weightElement = document.getElementById("weight");
const calculateButton = document.querySelector('.button');
const resultElement = document.getElementById("result");

calculateButton.addEventListener('click', () => {
    const height = parseFloat(heightElement.value) / 100; // Convert height to meters
    const weight = parseFloat(weightElement.value);

    const BMI = weight / (height * height);
    resultElement.textContent = `Your BMI is ${BMI.toFixed(2)}`;
});


