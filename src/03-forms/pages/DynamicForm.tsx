import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }

        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 1, `Mínimo de ${ (rule as any).value || 1 } caracteres`)
        }

        if(rule.type === 'email') {
            schema = schema.email('Correo inválido')
        }
    }

    requiredFields[input.name] = schema;
}

const validationsSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationsSchema}
                onSubmit={(values) => console.log(values)}
            >
                {() => (
                    <Form noValidate>
                        {formJson.map(({ label, name, placeholder, type, options }) => {
                            if (type === 'input' || type === 'password' || type === 'email') {
                                return <MyTextInput
                                    key={name}
                                    label={label}
                                    name={name}
                                    placeholder={placeholder}
                                />
                            } else if (type === 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        name={name}
                                        label={label}
                                    >
                                        <option value=''>Select an option</option>
                                        {options?.map(({ id, label }) => (
                                            <option key={id} value={id}>{label}</option>
                                        ))}
                                    </MySelect>
                                )
                            }

                            throw new Error(`El type: ${type} no es soportado`);
                        })}
                        <button type='submit'>Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
