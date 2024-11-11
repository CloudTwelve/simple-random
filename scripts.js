let fonts = ['Inter', 'Courier', 'Arial', 'Comic Sans', 'Times New Roman', 'Franklin Gothic', 'Impact', 'Palatino'];
let colors = ['grey', 'lightgrey', 'lightslateblue', 'pink', 'midnightblue', 'black', 'hotpink', 'lightgreen', 'indigo', 'yellow', 'orange', 'lightblue', 'lightgoldenrodyellow', 'lightseagreen', 'lightsalmon', 'lightsteellblue', 'mediumorchid', 'mistyrose', 'chocolate', 'aliceblue', 'aquamarine', 'palevioletred'];
const element = document.getElementById("randomizer");
element.addEventListener("click", function() {
    const fontIndex = Math.floor(Math.random() * (fonts.length - 1));
    const colorIndex = Math.floor(Math.random() * (colors.length - 1));
    const colorIndex2 = Math.floor(Math.random() * (colors.length - 1));
    const colorIndex3 = Math.floor(Math.random() * (colors.length - 1));
    document.body.style.fontFamily = fonts[fontIndex];
    document.body.style.backgroundColor = colors[colorIndex];
    document.querySelector(".main").style.backgroundColor = colors[colorIndex2];
    document.querySelector("header").style.backgroundColor = colors[colorIndex3];
});