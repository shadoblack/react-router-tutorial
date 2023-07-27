import React from 'react'
import { useForm } from '../hooks/useForm'
import { useContext } from 'react'
import { UsuarioContext } from './UsuarioContext'


export const LoginScreen = () => {

    const initialForm = {
        nombre: '',
        tecnologia: '',
        mail: '',
        redes: ''
    }

    const {formState, nombre, tecnologia, mail, redes, onInputChange} = useForm(initialForm)
    const { setUsuario } = useContext(UsuarioContext)


   const onSubmit = (e) => {
        e.preventDefault()
        setUsuario(formState)
        console.log(formState)
    }

  return (
<>
<form className='container' onSubmit={onSubmit}>
  <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" name="nombre" value={nombre} onChange={onInputChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="tecnologia" className="form-label">tecnologia</label>
    <input type="text" className="form-control" name="tecnologia"value={tecnologia} onChange={onInputChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="mail" className="form-label">mail</label>
    <input type="text" className="form-control" name="mail"value={mail} onChange={onInputChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="redes" className="form-label">redes</label>
    <input type="text" className="form-control" name="redes"value={redes} onChange={onInputChange} />
  </div>
  
  
  <button type="submit" className="btn btn-primary">Registrar usuario</button>
</form>
</>
  )
}
