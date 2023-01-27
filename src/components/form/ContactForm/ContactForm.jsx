import classNames from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import React from 'react'
import { CONTACT_VALIDATION_SCHEMA } from './../../../utils/validate/validationSchemas'
import Input from '../../Input'
import styles from './ContactForm.module.sass'
import Radio from './radiobuttons/radio'

function ContactForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    required: '',
    consent: false,
    passwordConfirmation: ''
  }

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
    // initialValues onSubmit - обов'язкові пропи для Formik
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          type='text'
          name=' name'
          placeholder='First name'
          autoFocus
          classes={classes}
        />
        <Input
          type='text'
          name='Last name'
          placeholder='Last name'
          autoFocus
          classes={classes}
        />
        <Input
          type='text'
          name='Display  name'
          placeholder='Display  name'
          autoFocus
          classes={classes}
        />

        <Input
          type='email'
          name='email'
          placeholder='Email Address'
          classes={classes}
        />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          autoFocus
          classes={classes}
        />
        <Input
          type='password Confirmation'
          name='password Confirmation'
          placeholder='Password Confirmation'
          autoFocus
          classes={classes}
        />
        <Radio />
        <Input
          className={styles.checkbox}
          description='Allow Squadhelp to send marketing/promotional offers from time to time'
          type='checkbox'
          name='consent'
          classes={classes}
        />

        <button type='submit'>Create account</button>
        <p>By clicking this button, you agree to our Terms of Service.</p>
        <a className={styles.buttonGoogle} href='https://accounts.google.com'>
          Sign in with Google
        </a>
      </Form>
    </Formik>
  )
}

export default ContactForm
