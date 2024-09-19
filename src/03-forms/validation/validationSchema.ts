import * as Yup from 'yup';
export const ValidationUpSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Requerido'),
    lastName: Yup.string()
        .max(15, 'Debe tener 10 caracteres o menos')
        .required('Requerido'),
    email: Yup.string()
        .email('Debe tener un formato válido')
        .required('Requerido')
})