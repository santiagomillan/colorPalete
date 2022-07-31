const color = document.querySelector("#color");
const salida = document.querySelector("#salida");

const storage = localStorage.getItem("colorValue") || "#ffffff";

color.value = storage;
// const colorList= [];

// localStorage.setItem("colorValue","#ffffff")
console.log(color.value)

const setColor = () => {
     const value = color.value;
    // console.log(value)
    salida.innerHTML = value;
    salida.style.background =value;
    // salida.style.color = "#ffffff";
}

const saveColor = (value) => {
    // colorList.push(value);
    localStorage.setItem("colorValue",value);
    // localStorage.setItem("colorValue",JSON.stringify(colorList));
};

setColor();

color.addEventListener("input" , setColor);

color.addEventListener("change", () =>{ 
    saveColor(color.value);
});
// console.log(color)