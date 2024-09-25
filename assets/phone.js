function reloadjs() {
  const script = document.createElement('script')
  script.src = 'https://fanciful-eclair-8d84f5.netlify.app/assets/phone.js?v=' + new Date().getTime()
  script.defer = true
  const oldScript = document.querySelectorAll('script')
  oldScript.forEach((item) => item.remove())
  document.head.appendChild(script)
}

window.addEventListener('pageshow', function() {
  console.log('123')
  reloadjs()
})

const params = new URLSearchParams(window.location.search)
const locale = params.get('ui_locales')

// document.addEventListener('DOMContentLoaded', function () {
if (locale === 'en') {
  document.title = 'en title'
} else if (locale === 'zh-Hans') {
  document.title = 'sc title'
} else {
  document.title = 'tc title'
}
// })

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
const defaultPlaceholder = phoneNumber.placeholder
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
  phoneNumber.placeholder = defaultPlaceholder
})