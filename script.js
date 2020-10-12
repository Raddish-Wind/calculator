let weight = document.querySelector('#weight');
let vol = document.querySelector('#vol');
let btn = document.querySelector('#btn');
let out = document.querySelector('#out');
let load = document.querySelector('#load');
let del = document.querySelector('#del');
let frag = document.querySelector('#frag');
let range = document.querySelector('#range');
let distance = document.querySelector('.distance').innerHTML = 500;
let kg = 5.5;
let kub = 3500;
let km = 2;

//console.log (distance);

//range
range.onchange = function() {
    document.querySelector('.distance').innerHTML = range.value;
}
//function
btn.onclick = function() {
    if (weight.value !="" && vol.value !="") {
        if (load.checked){
            load.value = 1500;
        } else {
            load.value = 0;
        }
        if (del.checked) {
            del.value = 3500;
        } else {
            del.value = 0;
        }
        if (frag.checked) {
            frag.value = 2000;
        } else {
            frag.value = 0;
        }
        let sum = (weight.value * kg) + (vol.value * kub) + Number(load.value) + Number(del.value) + Number(frag.value) + (range.value * km);
        out.innerHTML = sum;

    } else {
        alert('Введите вес и объем груза');
    }
}