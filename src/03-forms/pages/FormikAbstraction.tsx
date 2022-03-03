import { Formik, Form } from 'formik'
import * as Yup from 'yup';

// import { MyCheckbox } from '../components/MyCheckbox';
// import { MySelect } from '../components/MySelect';
// import { MyTextInput } from '../components/MyTextInput';

import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput} from '../components';

export const FormikAbstractation = () => {
  
    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik 
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ (values) => {
                    console.log(values);                    
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                        .max(15,'Debe de tener 15 chars o menos')
                                        .required('Este campo es obligatorio'),
                        lastName: Yup.string()
                                        .max(12,'Debe de tener 15 chars o menos')
                                        .required('Este campo es obligatorio'),
                        email: Yup.string()
                                        .email('Debe ser un correo válido')
                                        .required('El email es obligatorio'),
                        terms: Yup.boolean()
                                        .oneOf([true],'Debe de aceptar las condiciones'),
                        jobType: Yup.string()
                                        .notOneOf(['it-jr'],'Esta opción no es permitida')
                                        .required('El Job type es obligatorio'),
                    })
                }>

                {
                    
                        <Form>
                            <MyTextInput label="First name" name="firstName" placeholder="Nombres"/>
                            <MyTextInput label="Last name" name="lastName" placeholder="Apellidos"/>
                            <MyTextInput label="Email address" name="email" type="email" placeholder="johndoe@gmail.com"/>
                            
                            <MySelect label="Job type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>

                            <MyCheckbox label="Terms & conditions" name="terms"/>

                            <button type="submit"> Submit </button>

                        </Form>
                    
                }
            </Formik>

        </div>
    )
}

