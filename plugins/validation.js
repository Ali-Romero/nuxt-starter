import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Поле обязательно для заполнения'
})

extend('email', {
  ...email,
  message: 'Неверный email адрес',
})

extend('phone', {
  validate(value) {
    return value.match(/\+\d{1} \(\d{3}\) \d{3} \d{4}/g);
  },
  message: 'Неверный номер телефона',
})
