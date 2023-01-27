import styles from './radio.module.sass'
import classNames from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik'

function Radio () {
  ;<Formik
    initialValues={{
      picked: ''
    }}
    onSubmit={async values => {
      await new Promise(r => setTimeout(r, 500))
      alert(JSON.stringify(values, null, 2))
    }}
  >
    {({ values }) => (
      <Form>
        <div id='my-radio-group'></div>
        <div role='group' aria-labelledby='my-radio-group'>
          <label>
            <Field
              label='Join As a Buyer:'
              type='radio'
              name='contractType'
              value='1'
              checked={this.state.selectedOption === 'option1'}
              onChange={this.handleOptionChange}
              description='I am looking for a Name, Logo or Tagline for my business, brand or product.'
            />
          </label>
          <label>
            <Field
              label='Join As a Creative or Marketplace Seller'
              type='radio'
              name='contractType'
              value='2'
              checked={this.state.selectedOption === '2'}
              onChange={this.handleOptionChange}
              description='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
            />
          </label>
        </div>
      </Form>
    )}
  </Formik>
}
export default Radio
