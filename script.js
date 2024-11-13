const validate = new window.JustValidate('#form');

let validation =  new JustValidate('#form');
validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Please enter your name',
    },
])
const showPass = document.getElementById('showPass')

showPass.addEventListener('click', () => {
const passwordInput = document.getElementById('password')
const ConfirmPasswordInput = document.getElementById('confirmPassword')

if (passwordInput.type === 'password') {
passwordInput.type = 'text'
ConfirmPasswordInput.type = 'text'
} else {
passwordInput.type = 'password'
ConfirmPasswordInput.type = 'password'
}
})
let validation2 =  new JustValidate('#form');
validation.addField('#email', [
    {
        rule: 'required',
        errorMessage: 'Please enter your email',
    },
])
let validation3 =  new JustValidate('#form');
validation.addField('#password', [
    {
        rule: 'required',
        value: '6',
        errorMessage: 'Minimum number of characters 6',
    },
])
let validation4 =  new JustValidate('#form');
validation.addField('#confirmPassword', [
    {
        rule: 'required',
        value: '6',
        errorMessage: 'Repeat password',
    },
])