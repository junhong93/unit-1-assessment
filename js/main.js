document.getElementById('plusMee').addEventListener('click', add);
document.getElementById('minusMee').addEventListener('click', subtract);

// let addingNumber = parseInt(document.getElementById('number_input').value) + parseInt(document.getElementById('result_number').value);


// function plusMe(event) {
//     if (event.target.id == 'plusMee') {
//     document.getElementById('result_number').value = addingNumber;
//     }
// }


function add() {
    let a,b,c;
    a = Number(document.getElementById('number_input').value);
    b = Number(document.getElementById('result_number').value);
    c = a+b;
    document.getElementById('result_number').value = c;
}

function subtract(){
    let a,b,c;
    a = Number(document.getElementById('number_input').value);
    b = Number(document.getElementById('result_number').value);
    c = b - a;
    document.getElementById('result_number').value = c;

    if (document.getElementById('result_number').value < 0) {
        document.getElementById('result_number').style.color = 'red';
    }
}




// function plusMe() {
//     let numberAdded = document.getElementById('number_input').value + document.getElementById('result_number').value;
//     // document.getElementById('result_number').value = '10';
//     document.getElementById('result_number').value = numberAdded;
// }

// function plusMe(event) {
//     if (event.target.id == 'plusMee') {
//         populateInnerHTML()
//     }
// }


// let x = parseInt(document.getElementById('number_input').value) + parseInt(document.getElementById('result_number').value);
// console.log(x)