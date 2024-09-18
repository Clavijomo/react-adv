import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {
    const {
        handleSubmit,
        getFieldProps,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Debe tener 15 caracteres o menos')
                .required('Requerido'),
            lastName: Yup.string()
                .max(15, 'Debe tener 10 caracteres o menos')
                .required('Requerido'),
            email: Yup.string()
                .email('Debe tener un formato válido')
                .required('Requerido')
        }),
    });

    return (
        <div>
            <div>Formik Yup</div>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input {...getFieldProps('lastName')} type="text" />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input {...getFieldProps('email')} type="email" />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
