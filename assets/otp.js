const phoneVerificationCode = document.getElementById('phoneVerificationCode')
const continueButton = document.getElementById('continue')
// const resendButton = document.getElementById('resend')
// const resendMessage = document.getElementById('resendMessage')
let phoneVerificationCodeValid = false
// let resend = false
function updateButtonState() {
  if (phoneVerificationCodeValid) {
    continueButton.classList.add('button-active')
    continueButton.disabled = false
  } else {
    continueButton.classList.remove('button-active')
    continueButton.disabled = true
  }
}
function validateInput() {
  if (phoneVerificationCode.value.trim().length === 6) {
    phoneVerificationCodeValid = true
  } else {
    phoneVerificationCodeValid = false
  }
  updateButtonState()
}
// function clickResend() {
//   resend = true
//   resendMessage.style.display = 'block'
//   resendButton.disabled = true
//   const endTime = Date.now() + 60 * 1000
//   const interval = setInterval(function () {
//     resendButton.classList.add('resend')
//     const now = Date.now()
//     const remain = endTime - now
//     resendButton.textContent = `重新發送 (${Math.ceil(remain / 1000)}秒)`
//     if (remain < 0) {
//       resendButton.classList.remove('resend')
//       clearInterval(interval)
//       resendButton.disabled = false
//       resendButton.textContent = '重新發送'
//     }
//   }, 1000)
// }
phoneVerificationCode.addEventListener('input', validateInput)
phoneVerificationCode.addEventListener('focus', () => {
  phoneVerificationCode.placeholder = ''
  validateInput()
})
phoneVerificationCode.addEventListener('blur', () => {
  phoneVerificationCode.placeholder = '填寫6位數字驗證碼'
})
// resendButton.addEventListener('click', clickResend)
