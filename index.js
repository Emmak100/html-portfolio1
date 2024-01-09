document.querySelector('#button1').addEventListener('click', logIn)

function logIn(){
    let value = document.querySelector('#input1').value
    alert( 'Welcome ' + value)
}