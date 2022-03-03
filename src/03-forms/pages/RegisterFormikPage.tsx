import { MyTextInput} from '../components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

/*
        name: '',
        email: '',
        password1: '',
        password2: '',
*/


export const RegisterFormikPage = () => {
  
    return (
        <div>
            <h1>Formik Register</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ (values) => {
                    console.log(values);                    
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                        .max(15,'Debe de tener 15 chars o menos')
                                        .min(2,'Debe de tener al menos 2 chars')
                                        .required('El name es obligatorio'),                        
                        email: Yup.string()
                                        .email('Debe ser un correo válido')
                                        .required('El email es obligatorio'),
                        password1: Yup.string()
                                        .min(6,'El password debe tener al menos 6 chars')
                                        .required('El password es obligatorio'),
                        password2: Yup.string()
                                        .oneOf([Yup.ref('password1'), null], 'Passwords deben ser iguales')
                    })
                }>

                { (formik) => (
                    
                        <Form>
                            <MyTextInput label="Name" name="name" placeholder="Nombre completo"/>                            
                            <MyTextInput label="Email address" name="email" type="email" placeholder="johndoe@gmail.com"/>
                            <MyTextInput label="Password" name="password1" type="password" placeholder="password"/>
                            <MyTextInput label="Password confirm" name="password2" type="password" placeholder="Confirm password"/>

                            <button type="submit"> Create </button>
                            <button type="button" onClick={ formik.handleReset }> Reset Form </button>

                        </Form>
                    )
                    
                }
            </Formik>

        </div>
    )
}

