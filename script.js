function getbmivalue() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    height = height * 12;
    height = height * 0.025;
    let newValue = weight / (height * height);
    newValue = Math.round(newValue);
    document.getElementById("result").value = newValue
}