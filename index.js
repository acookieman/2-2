window.addEventListener('load', function Handler(){

    let doc = this.document.querySelector('body');

    let firstInput = document.createElement('input');
    firstInput.type = 'text';
    firstInput.id = 'firstInput';
    doc.appendChild(firstInput);

    let secondInput = document.createElement('input');
    secondInput.type = 'text';
    secondInput.id = 'secondInput';
    doc.appendChild(secondInput);

    let firstErrorMessage = document.createElement('div');
    firstErrorMessage.style.background = 'red';
    firstErrorMessage.innerHTML = ("ERROR 404, not a number");
    firstErrorMessage.id = 'firstErrorMessage';
    firstErrorMessage.classList.add('error-message');

    let secondErrorMessage = document.createElement('div');
    secondErrorMessage.style.background = 'red';
    secondErrorMessage.innerHTML = ("ERROR 404, not a number");
    secondErrorMessage.id = 'secondErrorMessage';
    secondErrorMessage.classList.add('error-message');

    let result = document.createElement('div');
    result.id = 'result';
    
    let button = document.createElement('button');
    button.id = 'button';
    button.innerHTML = 'Click Clack';
    doc.appendChild(button);

    let buttonListener = document.querySelector('#button');
    buttonListener.addEventListener('click', function buttonHandler(){
        function isNum(num){
            return !isNaN(parseInt(num)) && isFinite(num);
        }
        if(document.querySelector('#result')){
            result.parentNode.removeChild((result));
        }
        if((isNum(secondInput.value)=== false && isNum(firstInput.value)===true) || (isNum(secondInput.value)===true && isNum(firstInput.value)===true)){
            if(document.querySelector('#firstErrorMessage') === firstErrorMessage){
                firstErrorMessage.parentNode.removeChild(document.querySelector('#firstErrorMessage'));
            }
        }
        else{
            doc.insertBefore(firstErrorMessage, secondInput);
        }
        if((isNum(secondInput.value)=== false && isNum(firstInput.value)===true) || (isNum(secondInput.value)===true && isNum(firstInput.value)===true)){
            if(document.querySelector('#secondErrorMessage') === secondErrorMessage){
                secondErrorMessage.parentNode.removeChild(document.querySelector('#secondErrorMessage'));
            }
        }
        else{
            doc.insertBefore(secondErrorMessage, button);
        }
        if (isNum(firstInput.value) && isNum(secondInput.value)){
            document.querySelector('#result');
            result.innerHTML = parseFloat(firstInput.value) + parseFloat(secondInput.value);
            doc.appendChild(result);
        }
        console.log(isNum(firstInput.value));
        console.log(isNum(secondInput.value));
    });



});