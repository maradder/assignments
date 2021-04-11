let add1 = document.addition.add1;
let add2 = document.addition.add2;
let sub1 = document.subtraction.sub1;
let sub2 = document.subtraction.sub2;
let mult1 = document.multiplication.mult1;
let mult2 = document.multiplication.mult2;

document.addition.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('sum').innerText = (Number(add1.value) + Number(add2.value));
});

document.subtraction.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('difference').innerText =  (Number(sub1.value) - Number(sub2.value));
});

document.multiplication.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('product').innerText = (Number(mult1.value) * Number(mult2.value));
});