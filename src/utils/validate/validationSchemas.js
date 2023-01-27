import * as yup from 'yup'

export const CONTACT_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z]/, 'First name must starts wich capital letter ')
    .matches(
      /^.[a-z]*$/,
      'Second+ characters of first name must be lower letter'
    )
    .required(),
  lastName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z]/, 'Last name name must starts wich capital letter ')
    .matches(
      /^.[a-z]*$/,
      'Second+ characters of last name must be lower letter'
    )
    .required(),
  displayName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z]/, 'First name must starts wich capital letter ')
    .matches(
      /^.[a-z]*$/,
      'Second+ characters of first name must be lower letter'
    )
    .required(),

  email: yup
    .string('email should be a string')
    .email('please1 provide a valid email address')
    .matches(/^.+@.+$/, 'Please enter correct email')

    .required('email address is required'),
  password: yup
    .string('password should be a string')
    .min(5, 'password should have a minimum length of 5')
    .max(12, 'password should have a maximum length of 12')
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*)/,
      'Please enter correct password'
    )

    .required('password is required'),
  confirmPassword: yup
    .string('password should be a string')
    .oneOf([yup.ref('password')], 'Passwords are not the same!')
    .required('confirm password is required'),
  remember: yup.boolean().oneOf([true], 'Please tick checkbox'),
  toggle: yup.boolean().oneOf([true], 'Please toggle accept'),
  contractType: yup
    .string()
    .oneOf(['1', '2'], 'Please select the type of contract')
    .required(),

  consent: yup
    .bool()
    .test(
      'consent',
      'You have to agree with our Terms and Conditions!',
      value => value === true
    )
    .required('You have to agree with our Terms and Conditions!')
})
