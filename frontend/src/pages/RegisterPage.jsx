import { useState } from "react"

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [passConfirm, setPassConfirm] = useState('')
  const emailChecking = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }


  const validation = (e) => {
    e.preventDefault()
    //VALIDACIONES
    //formato de email
    if (!emailChecking(email)) {
      alert('Por favor, ingrese un email válido')
      return
    }

    //todos los campos son obligatorios
    if (!email.trim() || !pass.trim() || !passConfirm.trim()) {
      alert('Todos los campos son obligatorios')
      return
    }

    //el password debe tener al menos 6 caracteres
    if (pass.length < 6) {
      alert('la contraseña debe tener al menos 6 caracteres')
      return
    }

    //el password y la confirmación del password deben ser iguales
    if (pass !== passConfirm) {
      alert('las contraseñas no coinciden')
      return
    }

    alert('Formulario enviado con éxito')
    setEmail('')
    setPass('')
    setPassConfirm('')
  }


  return (
    <div className="register-container">
      <h1>Registro</h1>

      <div>
        <form className='formulario' onSubmit={validation}>
          <div className='form-group item-form'>
            <label>Ingrese su email</label>
            <input
              type='text'
              name='email'
              className='form-control input-form'
              placeholder="ej. contacto@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className='form-group item-form'>
            <label>Ingrese su password</label>
            <input
              type='password'
              name='password'
              className='form-control input-form'
              placeholder="incluir al menos 6 caracteres"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              required
            />
          </div>

          <div className='form-group item-form'>
            <label>Confirme su password</label>
            <input
              type='password'
              name='passConfirm'
              className='form-control input-form'
              placeholder="repetir password"
              onChange={(e) => setPassConfirm(e.target.value)}
              value={passConfirm}
              required
            />
          </div>

          <button type="submit" className="btnRegister">Enviar</button>

        </form>
      </div>
    </div>
  )
}

export default RegisterPage