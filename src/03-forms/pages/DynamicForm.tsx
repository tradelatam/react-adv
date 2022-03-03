import { Formik, Form } from "formik";
import * as Yup from 'yup';

import { MySelect, MyTextInput } from "../components";
import formJson from '../data/custom-form.json';

const initialValues: {[key: string]: any} = {};
const requiredFields: {[key: string]: any} = {};

for (const input  of formJson) {
    initialValues[ input.name] = input.value;

    if ( !input.validations ) continue;

    let schema= Yup.string();
    for (const rule of input.validations) {
        if (rule.type === "required") {
            schema = schema.required('Este campo es requerido')
        }

        if (rule.type === "minLength") {
            schema = schema.min((rule as any).value||2, `Minimo de ${(rule as any).value||2} chars`)
        }

        if (rule.type === "email") {
            schema = schema.email('Debe ser un correo válido')
        }
        //... otras reglas
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })


export const DynamicForm = () => {

    console.log( formJson );
    
    return (
        <div>
            <h1>DynamicForm</h1>

            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={ (values) => {
                        console.log(values);
                    }                    
                }
            >

                {
                    (formik) => (
                        <Form>
                            {
                                formJson.map( ({ type, name, placeholder, label, options }) => {
                                    if (type === "input" || type==="email" || type=== "password") {

                                        return <MyTextInput
                                                    key={ name }
                                                    type={ (type as any) }
                                                    name={ name }
                                                    label={ label } 
                                                    placeholder={ placeholder }
                                                />
                                    } else if ( type === "select") {
                                        return (<MySelect
                                                    key={ name }
                                                    type={ (type as any) }
                                                    name={ name }
                                                    label={ label }
                                                >
                                                    <option value="">Seleccione un juego</option>
                                                    {
                                                        options?.map( opt => (
                                                            <option key={ opt.id } value={ opt.id }>{ opt.desc }</option>
                                                        ))
                                                    }
                                                </MySelect>)
                                    }
                                    <h1>El tipo {type}  no es soportado</h1>
                                })
                            }
                            <button type="submit"> Submit </button>
                            <button type="button" onClick={ formik.handleReset }> Reset </button>
                        </Form>
                    )
                }


            </Formik>
        </div>
    )
}
