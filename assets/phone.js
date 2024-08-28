const continueButton = document.getElementById('next')
const phoneNumber = document.getElementById('phoneNumber')
let numberValid = false
function updateButtonState() {
  if (numberValid) {
    continueButton.classList.add('button-active')
    continueButton.disabled = false
  } else {
    continueButton.classList.remove('button-active')
    continueButton.disabled = true
  }
}
function validateInput() {
  if (phoneNumber.value.trim().length >= 8) {
    numberValid = true
  } else {
    numberValid = false
  }
  updateButtonState()
}
phoneNumber.addEventListener('input', validateInput)
phoneNumber.addEventListener('focus', () => {
  phoneNumber.placeholder = ''
  validateInput()
})
phoneNumber.addEventListener('blur', () => {
  phoneNumber.placeholder = '手機號碼'
})
