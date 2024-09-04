// header footer navigate
const params = new URLSearchParams(window.location.search)
const locale = params.get('ui_locales') || 'en'
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

//countrycode page
const nationalNumber = document.getElementById('nationalNumber')
const continueButton = document.getElementById('continue')
const select = document.getElementById('countryCode')
try {
  nationalNumber.maxLength = 11
  select.value = 'HK'
  continueButton.disabled = true
  const defaultPlaceholder = nationalNumber.placeholder
  let nationalNumberValid = false
  function validateInput() {
    console.log(nationalNumber.value.trim(), 'nationalNumber.value.trim()')
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

    phoneVerificationCode.placeholder = otpDefaultPlaceholder

    function validateOtpInput() {
      if (phoneVerificationCode.value.trim().length === 6) {
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


// text
// if (locale === 'en') {
//   document.querySelector('#nationalNumber').placeholder =
//     'Please enter Your Mobile Number'
// } else {
//   document.querySelector('#nationalNumber').placeholder = '手機號碼'
// }
