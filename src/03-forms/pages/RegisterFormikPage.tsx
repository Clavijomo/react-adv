import { Form, Formik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    confirmPassword: ''
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'El nombre debe de ser 3 caracteres o mas')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Revisar el formato')
                            .required('Requerido'),
                        password1: Yup.string()
                            .required('Requerido')
                            .min(6, 'Minimo 6 letras')
                            .required('Requerido'),

                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                            .required('Requerido')
                    })
                }
            >
                {({ handleReset }) => (
                    <Form>
                        <MyTextInput placeholder='Jonathan' label='Name' name='name' />
                        <MyTextInput label='Email Address' name='email' />
                        <MyTextInput type='password' label='Password' name='password1' />
                        <MyTextInput type='password' label='Confirm Password' name='password2' />
                        <button type='submit'>Create</button>
                        <button onClick={handleReset}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
