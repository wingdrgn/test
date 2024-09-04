const params = new URLSearchParams(window.location.search)
const locale = params.get('ui_locales')

function navigate(type) {
  switch (type) {
    case 1:
      window.location.href = `https://circledev.uatctflife.com.hk/${locale === 'en' ? 'en' : 'tc'}/login`
      break
    case 2:
      window.location.href = `https://www.facebook.com/CTFLifehk`
      break
    case 3:
      window.location.href = `https://www.ctflife.com.hk/${locale === 'en' ? 'en' : 'tc'}/wechat`
      break
    case 4:
      window.location.href = `https://www.youtube.com/@CTFLifehk`
      break
    case 5:
      window.location.href = `https://www.instagram.com/ctflifehk`
      break
    case 6:
      window.location.href = `https://www.linkedin.com/company/ctflifehk`
      break
  }
}

const setFontFamilyByLocale = (locale) => {
  const body = document.body
  switch (locale) {
    case 'zh-Hant':
      body.style.fontFamily = 'Noto Sans TC'
      break
    case 'zh-Hans':
      body.style.fontFamily = 'Noto Sans SC'
      break
    case 'en':
      body.style.fontFamily = 'Poppins'
      break
    default:
      body.style.fontFamily = 'Noto Sans TC'
  }
}

setFontFamilyByLocale(locale)

const continueButton = document.getElementById('next')
const phoneNumber = document.getElementById('phoneNumber')
phoneNumber.maxLength = 11
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
  phoneNumber.placeholder =
    locale === 'en' ? 'Please enter Your Mobile Number' : '手機號碼'
})

// text
if (locale === 'en') {
  document.querySelector('.intro h2').textContent =
    'Welcome back to CTF Life ∙ CIRCLE! Please log in with your mobile number'
  document.querySelector('#phoneNumber').placeholder =
    'Please enter Your Mobile Number'
} else {
  document.querySelector('.intro h2').textContent =
    '歡迎回到「周大福人壽 • 生活圈」！請以手機號碼登入'
  document.querySelector('#phoneNumber').placeholder = '手機號碼'
}
