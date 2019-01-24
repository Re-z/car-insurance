//vars
let form = document.getElementById('request-quote');

//listeners
document.addEventListener('DOMContentLoaded', function(){

    html.printLatest20Years();
    form.addEventListener('submit', handleSubmit)

})
//functions


function handleSubmit(evt) {
    //prevent default submiting
    evt.preventDefault();
    //get form values
    let selectedMake = document.querySelector('#make').value,
        selectedYear = document.querySelector('#year').value,
        //get value of selected checkbox
        selectedLevel = document.querySelector('.form-check-input[name="level"]:checked').value;
    //check if all fields are selected
    if(selectedMake && selectedYear && selectedLevel) {
        alert(`make = ${selectedMake} and year = ${selectedYear} and checked level = ${selectedLevel}`);
    } else {
        alert('fooo')
    }    
}


class HTMLUI {
    printLatest20Years() {
        let yearsNode = document.querySelector('#year'),
            currYear = new Date().getFullYear(), //returns curr year
            minYear = currYear - 20; //
        //print 20 last years and insert it to select element in DOM 
        for (let i = currYear; i > minYear; i--){
            let newOption = `<option value="${i}">${i}</option>`;
            yearsNode.insertAdjacentHTML('beforeend', newOption);
        }
    }

};

let html = new HTMLUI;