function reloadjs() {
  const script = document.createElement('script')
  script.src = 'https://fanciful-eclair-8d84f5.netlify.app/assets/country.js?v=' + new Date().getTime()
  script.defer = true
  const oldScript = document.querySelectorAll('script')
  oldScript.forEach((item) => item.remove())
  document.head.appendChild(script)
}

window.addEventListener('pageshow', function () {
  console.log('123')
  reloadjs()
})
// header footer navigate
const params = new URLSearchParams(window.location.search)
const locale = params.get('ui_locales') || 'en'
localStorage.setItem('i18', locale)

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

// set font family
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

//back button
const back = () => {
  window.history.back()
}

//countrycode page
const nationalNumber = document.getElementById('nationalNumber')
const continueButton = document.getElementById('continue')
const attrEntry = document.getElementsByClassName('attrEntry')[1]
// double page's continue button
continueButton.disabled = true
const select = document.getElementById('countryCode')
const newOrder = [
  { value: '', text: 'Country' },
  { value: 'HK', text: '+852' },
  { value: 'MO', text: '+853' },
  { value: 'CN', text: '+86' }
];

try {
  nationalNumber.maxLength = 11
  const defaultPlaceholder = nationalNumber.placeholder
  let nationalNumberValid = false
  const options = document.querySelectorAll('#countryCode option')
  const errorelement = attrEntry.querySelector('.error.itemLevel')
  console.log(options, 'options')
  console.log(errorelement, 'errorelement')
  if (errorelement) { console.log(errorelement, 'errorelement'); errorelement.classList.add('imprint') }
  const newPElement = document.createElement('div');
  newPElement.textContent = 'need phone number';
  newPElement.classList.add('selfError');
  attrEntry.insertBefore(newPElement, attrEntry.querySelector('input'));
  options.forEach((option, index) => {
    if (index > 3) {
      option.disabled = true
    } else {
      option.value = newOrder[index].value
      option.textContent = newOrder[index].text
    }
  })
  if (nationalNumber.value.length === 8) {
    select.value = 'HK'
  } else if (nationalNumber.value.startsWith('1') && nationalNumber.value.length === 11) {
    select.value = 'CN'
  }
  function validateInput() {
    console.log(nationalNumber.value.trim(), 'nationalNumber.value.trim()')
    if (nationalNumber.value.trim().length < 8) {
      newPElement.classList.remove('imprint')
    } else {
      newPElement.classList.add('imprint')
    }
    if (
      // (select.value === 'ZH' && nationalNumber.value.trim().length === 11) ||
      // (select.value !== 'ZH' && nationalNumber.value.trim().length === 8)
      nationalNumber.value.trim().length >= 8
    ) {
      nationalNumberValid = true
      continueButton.disabled = false
    } else {
      nationalNumberValid = false
      continueButton.disabled = true
    }
    updateButtonState()
  }
  function updateButtonState() {
    if (nationalNumberValid) {
      continueButton.classList.add('button-active')
      continueButton.disabled = false
    } else {
      continueButton.classList.remove('button-active')
      continueButton.disabled = true
    }
  }
  if (nationalNumber) {

    validateInput()
    nationalNumber.addEventListener('input', validateInput)
    nationalNumber.addEventListener('focus', () => {
      nationalNumber.placeholder = ''
      validateInput()
    })
    nationalNumber.addEventListener('blur', () => {
      nationalNumber.placeholder = defaultPlaceholder
    })
  }
} catch (error) {
  console.log(error)
  console.log('isn`t country page')
}


// otp
const phoneVerificationCode = document.getElementById('phoneVerificationCode')
try {
  const itemError = document.getElementsByClassName('itemLevel')[0]
  itemError.classList.add('center')
  phoneVerificationCode.maxLength = 6
  const otpDefaultPlaceholder = phoneVerificationCode.placeholder
  let phoneVerificationCodeValid = false
  function updateOtpButtonState() {
    if (phoneVerificationCodeValid) {
      continueButton.classList.add('button-active')
      continueButton.disabled = false
    } else {
      continueButton.classList.remove('button-active')
      continueButton.disabled = true
    }
  }
  if (phoneVerificationCode) {

    function validateOtpInput() {
      if (phoneVerificationCode.value.trim().length >= 6) {
        phoneVerificationCodeValid = true
      } else {
        phoneVerificationCodeValid = false
      }
      updateOtpButtonState()
    }
    phoneVerificationCode.addEventListener('input', validateOtpInput)
    phoneVerificationCode.addEventListener('focus', () => {
      phoneVerificationCode.placeholder = ''
      validateOtpInput()
    })
    phoneVerificationCode.addEventListener('blur', () => {
      phoneVerificationCode.placeholder = otpDefaultPlaceholder
    })
  }
} catch (error) {
  console.log(error)
  console.log('isn`t otp page')
}
