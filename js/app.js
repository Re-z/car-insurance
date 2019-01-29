//vars
let form = document.getElementById('request-quote');

//functions
function handleSubmit(event) {
    //get form values
    let selectedMake = document.querySelector('#make').value,
        selectedYear = document.querySelector('#year').value,
        //get value of selected checkbox
        selectedLevel = document.querySelector('.form-check-input[name="level"]:checked').value;
    //check if all fields are selected
    if(selectedMake && selectedYear && selectedLevel) {
        let result,
        basis = 2000;
    //calculate price, based on selected make
    switch(selectedMake) {
        case '1':
            result = basis * 1.3;
            break
        case '2':
            result = basis * 1.05;
            break;
        case '3':
            result = basis * 1.4;
            break;
    }
    //calculate price, based on year
    let yearDiff = new Date().getFullYear();
    yearDiff = yearDiff - selectedMake;
    alert(yearDiff - s);
        // alert(typeof selectedMake)
        // alert(`make = typeof ${selectedMake}, result = ${result}, basis = ${basis} and year = ${selectedYear} and checked level = ${selectedLevel}`);
    } else {
        alert('fooo')
    }    
};
function printLatest20Years() {
    let yearsNode = document.querySelector('#year'),
        currYear = new Date().getFullYear(), //returns curr year
        minYear = currYear - 20; //
    //print 20 last years and insert it to select element in DOM 
    for (let i = currYear; i > minYear; i--){
        let newOption = `<option value="${i}">${i}</option>`;
        yearsNode.insertAdjacentHTML('beforeend', newOption);
    }
};

//listeners
document.addEventListener('DOMContentLoaded', function(){

    printLatest20Years();
    form.addEventListener('submit', function(evt){
        //prevent default submiting
        evt.preventDefault();
        handleSubmit();
    });

})
