import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components'
import '../styles/styles.css';

export const FormikAbstractation = () => {
    return (
        <div>
            <div>Formik Yup</div>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(15, 'Debe tener 10 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('Debe tener un formato válido')
                        .required('Requerido'),

                    terms: Yup.boolean()
                        .oneOf([true], 'Debe aceptar las condiciones'),

                    jobType: Yup.string()
                        .required('Requerido')
                        .notOneOf(['it-jr'], 'Esta opción no es permitida')
                })}
            >
                {formik => (
                    <Form>
                        <MyTextInput
                            placeholder='Jonathan'
                            label="First Name"
                            name='firstName'
                        />

                        <MyTextInput
                            label='Last Name'
                            name='lastName'
                            placeholder='Clavijo'
                        />

                        <MyTextInput
                            label='Email Address'
                            name='email'
                            type='email'
                            placeholder='jonathanclavijo0907@gmail.com'
                        />

                        <MySelect label='Job Type' name='jobType'>
                            <option value=''>Pick something</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>IT Senior</option>
                            <option value='it-jr'>IT Jr</option>
                        </MySelect>

                        <MyCheckbox
                            label='Terms & Conditions'
                            name='terms'
                        />

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
