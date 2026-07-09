import React from 'react'
import AuthLayout from '../components/AuthLayout'
import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
  return (
    <div>
      <AuthLayout>
        <RegisterForm/>
      </AuthLayout>
    </div>
  )
}

export default RegisterPage
