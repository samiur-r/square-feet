/* eslint-disable import/prefer-default-export */
import * as yup from 'yup'

export const userSchema = yup.object().shape({
  phone: yup
    .number()
    .required('الهاتف هو حقل مطلوب')
    .test(
      'len',
      'يجب أن يتكون الرقم من 8 أرقام بالضبط',
      (val) => val?.toString().length === 8
    ),
  password: yup
    .string()
    .required('كلمة المرور هي حقل مطلوب')
    .min(3, 'يجب أن تتكون كلمة المرور من 3 أحرف على الأقل')
})
