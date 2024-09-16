let length;
let width;
function calculateArea() {
    console.log("calculation started...");
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    let area =  length * width;
    let result = document.getElementById("result");
    document.getElementById('result').innerText = `Area is : ${area}`;
    console.log("calculation ended...");
}
