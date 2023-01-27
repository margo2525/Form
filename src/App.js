import './App.css'

import Navbar from './components/navbar'
import ContactPage from './pages/ContactPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import LoginPage from './pages/LoginPage'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        <ContactPage />
        <LoginPage />
        <ForgotPasswordPage />
      </header>
    </div>
  )
}

export default App
