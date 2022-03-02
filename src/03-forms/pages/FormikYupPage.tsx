import '../styles/styles.css';
import { useFormik } from 'formik'
import * as Yup from 'yup';

export const FormikYupPage = () => {

    
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15,'Debe de tener 15 chars o menos')
                            .required('Este campo es obligatorio'),
            lastName: Yup.string()
                            .max(12,'Debe de tener 15 chars o menos')
                            .required('Este campo es obligatorio'),
            email: Yup.string()
                            .email('Debe ser un correo válido')
                            .required('El email es obligatorio'),
        })
         
    });
  
    return (
        <div>
            <h1>Formik Yup</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First name</label>
                <input type="text" { ...getFieldProps('firstName') } />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName">Last name</label>
                <input type="text" { ...getFieldProps('lastName') } />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

                <label htmlFor="email">Email Address</label>
                <input type="email" { ...getFieldProps('email') } />
                { touched.email && errors.email && <span>{ errors.email }</span>}                

                <button type="submit"> Submit </button>

            </form>

        </div>
    )
}

