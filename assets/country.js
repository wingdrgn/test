// const nationalNumber = document.getElementById('nationalNumber')
// const select = document.getElementById('countryCode')
// const continueButton = document.getElementById('continue')
// document.addEventListener('DOMContentLoaded', function () {
//   continueButton.disabled = true // 在页面加载时禁用按钮
//   select.value = 'HK'

//   const DropdownSingleSelect = document.querySelector('.DropdownSingleSelect')
//   const selectContainer = DropdownSingleSelect.querySelector('.attrEntry')

//   const customSelect = document.createElement('div')
//   customSelect.classList.add('custom-select')

//   const selectedContainer = document.createElement('div')
//   selectedContainer.classList.add('selectedContainer')
//   const img = document.createElement('img')
//   img.src = 'https://fanciful-eclair-8d84f5.netlify.app/assets/expandMore.svg'
//   img.classList.add('img')

//   const selected = document.createElement('div')
//   selected.classList.add('selected')
//   selected.textContent = '+852'

//   selectedContainer.appendChild(selected)
//   selectedContainer.appendChild(img)

//   // 创建选项部分
//   const optionsDiv = document.createElement('div')
//   optionsDiv.classList.add('options')
//   const options = [
//     { value: 'HK', label: '+852' },
//     { value: 'MO', label: '+853' },
//     { value: 'CN', label: '+86' }
//   ]

//   options.forEach((option) => {
//     const optionDiv = document.createElement('div')
//     optionDiv.setAttribute('data-value', option.value)
//     optionDiv.textContent = option.label
//     optionsDiv.appendChild(optionDiv)
//   })
//   optionsDiv.querySelectorAll('div').forEach((option) => {
//     option.addEventListener('click', function (event) {
//       console.log(this.getAttribute('data-value'))
//       selected.textContent = this.textContent
//       optionsDiv.style.display = 'none'
//       select.value = this.getAttribute('data-value')
//       console.log(select)
//       event.stopPropagation()
//     })
//   })

//   customSelect.appendChild(selectedContainer)
//   customSelect.appendChild(optionsDiv)
//   customSelect.addEventListener('click', () => {
//     optionsDiv.style.display =
//       optionsDiv.style.display === 'block' ? 'none' : 'block'
//     img.classList.contains('rotate')
//       ? img.classList.remove('rotate')
//       : img.classList.add('rotate')
//   })
//   selectContainer.appendChild(customSelect)
// })

// let nationalNumberValid = false
// function updateButtonState() {
//   if (nationalNumberValid) {
//     continueButton.classList.add('button-active')
//     continueButton.disabled = false
//   } else {
//     continueButton.classList.remove('button-active')
//     continueButton.disabled = true
//   }
// }
// function validateInput() {
//   nationalNumber.maxLength = 11
//   if (
//     // (select.value === 'ZH' && nationalNumber.value.trim().length === 11) ||
//     // (select.value !== 'ZH' && nationalNumber.value.trim().length === 8)
//     nationalNumber.value.trim().length >= 8
//   ) {
//     nationalNumberValid = true
//     continueButton.disabled = false
//   } else {
//     nationalNumbereValid = false
//   }
//   updateButtonState()
// }

// nationalNumber.addEventListener('input', validateInput)
// nationalNumber.addEventListener('focus', () => {
//   nationalNumber.placeholder = ''
//   validateInput()
// })
// nationalNumber.addEventListener('blur', () => {
//   nationalNumber.placeholder = 'Phone Number'
// })

// document.querySelector('.selected').addEventListener('click', function () {
//   const options = document.querySelector('.options')
//   options.style.display = options.style.display === 'block' ? 'none' : 'block'
// })

// document.querySelectorAll('.options div').forEach((option) => {
//   option.addEventListener('click', function () {
//     // console.log(this, this.getAttribute('data-value'))
//     document.querySelector('.selected').textContent = this.textContent
//     document.querySelector('.options').style.display = 'none'
//     const select = document.getElementById('countryCode')
//     select.value = this.getAttribute('data-value')
//     console.log(select.value)
//   })
// })

// document.addEventListener('click', function (event) {
//   if (!event.target.closest('.custom-select')) {
//     document.querySelector('.options').style.display = 'none'
//   }
// })

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
document.addEventListener('DOMContentLoaded', function () {
  continueButton.disabled = true
  if (nationalNumber) {
    nationalNumber.maxLength = 11
    validateInput()
  }
})

const select = document.getElementById('countryCode')
select.value = 'HK'
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
if (nationalNumber) {
  nationalNumber.addEventListener('input', validateInput)
  nationalNumber.addEventListener('focus', () => {
    nationalNumber.placeholder = ''
    validateInput()
  })
  nationalNumber.addEventListener('blur', () => {
    nationalNumber.placeholder =
      locale === 'en' ? 'Please enter Your Mobile Number' : '手機號碼'
  })
}

// otp
const phoneVerificationCode = document.getElementById('phoneVerificationCode')
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
  phoneVerificationCode.maxLength = 6
  phoneVerificationCode.placeholder =
    locale === 'en'
      ? 'Enter the 6-digit verification code'
      : '填寫6位數字驗證碼'

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
    phoneVerificationCode.placeholder =
      locale === 'en'
        ? 'Enter the 6-digit verification code'
        : '填寫6位數字驗證碼'
  })
}

// text
if (locale === 'en') {
  document.querySelector('#nationalNumber').placeholder =
    'Please enter Your Mobile Number'
} else {
  document.querySelector('#nationalNumber').placeholder = '手機號碼'
}
