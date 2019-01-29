//vars
let form = document.getElementById('request-quote');
let errorMsg = document.querySelector('.error');
let resultBlock = document.getElementById('result');

//functions
function handleSubmit(evt) {
    //get form values
    let selectedMake = document.querySelector('#make').value,
        selectedYear = document.querySelector('#year').value,

        //get value of selected checkbox
        selectedLevel = document.querySelector('.form-check-input[name="level"]:checked').value;

    //check if all fields are selected
    if(selectedMake && selectedYear && selectedLevel) {

        //hide error
        errorMsg.classList.remove('is-visible');

        let result, //total result that will be returned
        basis = 3000; //basic price, that will be modyfied

        //calculate price, based on selected make
        switch(selectedMake) {
            case 'American':
                result = basis * 1.3;
                break
            case 'Asian':
                result = basis * 1.05;
                break;
            case 'European':
                result = basis * 1.4;
                break;
        }

        //calculate price, based on year
        let yearDiff = new Date().getFullYear();
        yearDiff = yearDiff - selectedYear;
        result = result - (yearDiff*50);
        
        //calculate price, based on level. If chosen level complete - multiply total result by 1.4
        if(selectedLevel === 'Complete') {
            result = result * 1.4;
        }

        //show loader
        loading.style.display = 'block';

        //hide previous result
        let previousResult = document.querySelector('#result > div');
            if(previousResult) {previousResult.remove()};

        //create new result
        function printResult(){
            let output = `
                <div>
                    <p class="header">Summary</p>
                    <p>Make: ${selectedMake}</p>
                    <p>Year: ${selectedYear}</p>
                    <p>Level: ${selectedLevel}</p>
                    <p class="total">Total: $${result}</p>
                </div>
            `
            resultBlock.insertAdjacentHTML('afterbegin', output)
        }

        //hide loader after 3 sec, show result block
        setTimeout(function(){
            loading.style.display = 'none';
            printResult();
        }, 3000)

    } else {
        errorMsg.classList.add('is-visible');
    }    
};
function printLatest20Years() {
    let yearsNode = document.querySelector('#year'),
        currYear = new Date().getFullYear(), //returns curr year
        minYear = currYear - 20; 
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
