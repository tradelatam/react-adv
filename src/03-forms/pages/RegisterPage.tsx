import '../styles/styles.css';

import React, { FormEvent } from 'react'
import { useForm } from '../hooks/useForm';

export const RegisterPages = () => {

    const { formData, onChange, resetForm, isValidEmail,
            name, email, password1, password2 } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        console.log('formData', formData);
    }

    return (
        <div>
            <h1>Register page</h1>

            <form noValidate onSubmit={ (ev) => onSubmit(ev) }>
                <input type="text" 
                    placeholder="Name"
                    value={ name }
                    name="name"
                    onChange= { onChange } 
                    className={ `${ name.trim().length <= 0 && 'has-error' }`}
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }

                <input type="email" 
                    placeholder="Email" 
                    value={ email }
                    name="email"
                    onChange= { onChange } 
                    className={ `${ !isValidEmail(email) && 'has-error' }`}
                />
                { !isValidEmail(email)  && <span>El email no es válido</span> }

                <input type="password" 
                    placeholder="Password"
                    value={ password1 }
                    name="password1"
                    onChange= { onChange }                  
                />
                { password1.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                { password1.trim().length < 6 && password1.trim().length >0 && <span>El password debe tener al menos 6 letras</span> }


                <input type="password" 
                    placeholder="Repite password" 
                    name="password2"
                    value={ password2 }
                    onChange= { onChange } 
                />
                { password2.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span> }

                <button type='submit'> Create </button>
                <button type='button' onClick={ resetForm }> Reset </button>
            </form>


        </div>
    )
}


