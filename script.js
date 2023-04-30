const RegistroDeForm = document.getElementById('Registro-Form')
const nameinput = document.getElementById('name')
const sobrenomelinputs= document.getElementById('name')
const emailinput = document.getElementById('email')
const passwordinput = document.getElementById('password')
const button = document.getElementById('botão')



button.addEventListener('click', (event) => {
    event.preventDefault()

    if (nameinput.value === "") {
        alert("Por favor,preencha seu nome")
        return
    }

  if (emailinput.value === "" || !isEmailValid(emailinput.value)) {
       alert('Por favor, preencha o seu email')
       return    
  }

  if (!validatepassword(passwordinput.value, 8)) {
    alert('A senha precisa no minimo 8 digito.')
    return
  }
  
  RegistroDeForm.submit()
    
})


function isEmailValid(email) {
    

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)){
        return true
    }
    return false
}


function validatepassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true
    }

    return false
}