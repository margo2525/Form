import classNames from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import React from 'react'
import { CONTACT_VALIDATION_SCHEMA } from './../../../utils/validate/validationSchemas'
import Input from '../../Input'
import styles from './ContactLogin.module.sass'

function ContactLogin () {
  const initialValues = { email: '', Password: '', remember: true }

  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values:', values)
    formikBag.resetForm()
  }

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,

    invalid: styles.invalid
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          type='email'
          name='email'
          placeholder='Email Address'
          autoFocus
          classes={classes}
        />
        <Input
          type='text'
          name='password'
          placeholder='Password'
          autoFocus
          classes={classes}
        />
        <div className={styles.remember}>
          <Input
            className={styles.checkbox}
            description='Remember me'
            type='checkbox'
            name='rememberMe'
            placeholder='Remember me'
            classes={classes}
          />
          <a
            className={styles.forgot}
            href='https://www.squadhelp.com/forgot_password.php'
          >
            Forgot password
          </a>
        </div>
        <button type='submit'>Create account</button>
        <a className={styles.buttonGoogle} href='https://accounts.google.com'>
          Sign in with Google
        </a>
      </Form>
    </Formik>
  )
}
export default ContactLogin
