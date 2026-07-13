import React from 'react'
import AuthLayout from '../components/auth/AuthLayout'
import RegisterForm from '../components/auth/RegisterForm'

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
