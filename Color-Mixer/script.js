document.addEventListener("DOMContentLoaded", function() {
    const redSlider = document.getElementById("redSlider");
    const greenSlider = document.getElementById("greenSlider");
    const blueSlider = document.getElementById("blueSlider");
    const colorValue = document.getElementById("color-value");

    function updateColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;
        const color = `rgb(${red}, ${green}, ${blue})`;

        document.body.style.backgroundColor = color;
        colorValue.textContent = color;
    }

    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);

    updateColor();
});