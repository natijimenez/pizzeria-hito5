import { useState } from "react"

const LoginPage = () => {
  const [emailLog, setEmailLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const emailChecking = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }


  const validationLog = (e) => {
    e.preventDefault()
    //VALIDACIONES
    //formato de email
    if (!emailChecking(emailLog)) {
      alert('Por favor, ingrese un email válido')
      return
    }

    //todos los campos son obligatorios
    if (!emailLog.trim() || !passLog.trim()) {
      alert('Todos los campos son obligatorios')
      return
    }

    //el password debe tener al menos 6 caracteres
    if (passLog.length < 6) {
      alert('la contraseña debe tener al menos 6 caracteres')
      return
    }

    alert('Logueado')
    setEmailLog('')
    setPassLog('')
  }


  return (
    <div className="register-container">
      <h1>Login</h1>

      <div>
        <form className='formulario' onSubmit={validationLog}>
          <div className='form-group item-form'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              className='form-control input-form'
              placeholder="Ingrese su email"
              onChange={(e) => setEmailLog(e.target.value)}
              value={emailLog}
              required
            />
          </div>

          <div className='form-group item-form'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              className='form-control input-form'
              placeholder="Ingrese su password"
              onChange={(e) => setPassLog(e.target.value)}
              value={passLog}
              required
            />
          </div>

          <button type="submit" className="btnRegister">Login</button>

        </form>
      </div>
    </div>
  )
}

export default LoginPage