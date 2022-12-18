import { extend } from 'vee-validate'

extend('required', {
  validate(value) {
    if (Array.isArray(value)) {
      return !!value.length
    }

    if (typeof value === 'boolean') {
      return true
    }

    return !!value
  },
  params: [{ name: 'allowFalse', default: true }],
  computesRequired: true,
  message: 'Поле обязательно для заполнения',
})

extend('email', {
  validate(value) {
    return value.match(
      /^[a-zA-Z0-9_\\.%\\+\\-]+@[a-zA-Z0-9\\.\\-]+\.[a-zA-Z]{2,}$/
    )
  },
  message: 'Неверный email адрес',
})

extend('phone', {
  validate(value) {
    return value.match(/\+\d{1} \(\d{3}\) \d{3} \d{4}/g)
  },
  message: 'Неверный номер телефона',
})
