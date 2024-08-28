document.querySelector('.selected').addEventListener('click', function () {
  const options = document.querySelector('.options')
  options.style.display = options.style.display === 'block' ? 'none' : 'block'
})

document.querySelectorAll('.options div').forEach((option) => {
  option.addEventListener('click', function () {
    // console.log(this, this.getAttribute('data-value'))
    document.querySelector('.selected').textContent = this.textContent
    document.querySelector('.options').style.display = 'none'
    const select = document.getElementById('countryCode')
    select.value = this.getAttribute('data-value')
    console.log(select.value)
  })
})

document.addEventListener('click', function (event) {
  if (!event.target.closest('.custom-select')) {
    document.querySelector('.options').style.display = 'none'
  }
})
const continueButton = document.getElementById('continue')
const nationalNumber = document.getElementById('nationalNumber')
const select = document.getElementById('countryCode')
let nationalNumberValid = false
function updateButtonState() {
  if (nationalNumberValid) {
    continueButton.classList.add('button-active')
    continueButton.disabled = false
  } else {
    continueButton.classList.remove('button-active')
    continueButton.disabled = true
  }
}
function validateInput() {
  if (
    (select.value === 'ZH' && nationalNumber.value.trim().length === 11) ||
    (select.value !== 'ZH' && nationalNumber.value.trim().length === 8)
  ) {
    nationalNumberValid = true
  } else {
    nationalNumbereValid = false
  }
  updateButtonState()
}

nationalNumber.addEventListener('input', validateInput)
nationalNumber.addEventListener('focus', () => {
  nationalNumber.placeholder = ''
  validateInput()
})
nationalNumber.addEventListener('blur', () => {
  nationalNumber.placeholder = 'Phone Number'
})
