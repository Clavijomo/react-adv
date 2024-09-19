import { useFormik } from 'formik';
import '../styles/styles.css';
import { ValidationUpSchema } from '../validation/validationSchema';

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
        validationSchema: ValidationUpSchema
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
