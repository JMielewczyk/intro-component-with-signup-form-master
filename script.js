const submitBtn = document.querySelector('.submit_input');
const inputs = [...document.querySelectorAll('input')];
const spanErrors = document.querySelectorAll('.singleInput_wrapper span');
const labels = document.querySelectorAll('label');
const imgErrors = document.querySelectorAll('label + img')
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

let inputId;
let inputValue;
let inputIndex;
let labelTxt;
let flag;
let empty;
let check = false;

inputs.forEach(input => input.addEventListener('click', (e) => {
    inputId = e.target.id;
    console.log(inputId)
    inputIndex = inputs.indexOf(e.target)
    labelTxt = labels[inputIndex].textContent;
}))


inputs.forEach(input => input.addEventListener('keyup', (e) => {
    inputValue = e.target.value

    switch (inputId) {
        case 'firstName':
        case 'lastName':
            if (/^[a-zA-Z\s.,]+$/.test(inputValue) || !inputValue.length) {
                flag = false
                if (!inputValue.length) {
                    spanErrors[inputIndex].textContent = 'Cannot be empty.'
                    flag = true
                }
            } else {
                spanErrors[inputIndex].textContent = 'Invalid input - only letters.'
                flag = true
            }
            break;
        case 'email':
        case 'password':
            if (!inputValue.length) {
                spanErrors[inputIndex].textContent = 'Cannot be empty'
                flag = true;
            } else {
                flag = false;
            }

    }
    if (flag) {
        check = true;
        spanErrors[inputIndex].classList.add('active')
        imgErrors[inputIndex].classList.add('active')
        inputs[inputIndex].classList.add('active')
    } else {
        check = false;
        spanErrors[inputIndex].classList.remove('active')
        imgErrors[inputIndex].classList.remove('active')
        inputs[inputIndex].classList.remove('active')
    }
}))



submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!inputValue) {
        check = true;
        spanErrors.forEach(span => {
            span.textContent = 'Cannot be empty';
            span.classList.add('active')
        })
        imgErrors.forEach(error => error.classList.add('active'))
        inputs.forEach(input => input.classList.add('active'))
    }


    if (emailRegex.test(inputs[2].value)) {
        spanErrors[2].classList.remove('active')
        imgErrors[2].classList.remove('active')
        inputs[2].classList.remove('active')
    } else {
        check = true;
        spanErrors[2].textContent = 'Looks like this is not an email'
        spanErrors[2].classList.add('active')
        imgErrors[2].classList.add('active')
        inputs[2].classList.add('active')
    }



    if (passwordRegex.test(inputs[3].value)) {
        spanErrors[3].classList.remove('active')
        imgErrors[3].classList.remove('active')
        inputs[3].classList.remove('active')
    } else {
        check = true;
        spanErrors[3].textContent = 'Minimum eight characters, at least one letter and one number'
        spanErrors[3].classList.add('active')
        imgErrors[3].classList.add('active')
        inputs[3].classList.add('active')
    }

    if (check === false) {
        console.log('continue')
    }

})