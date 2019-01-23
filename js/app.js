//vars


//listeners
document.addEventListener('DOMContentLoaded', function(){

    printLatest20Years();

})
//functions

function printLatest20Years() {
    let yearsNode = document.querySelector('#year'),
        currYear = new Date().getFullYear(), //returns curr year
        minYear = currYear - 20; //
    //print 20 last years and insert it to select element in DOM 
    for (let i = currYear; i > minYear; i--){
        let newOption = `<option value="${i}">${i}</option>`;
        yearsNode.insertAdjacentHTML('beforeend', newOption);
    }

}