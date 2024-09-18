import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
    const { onChange, onSubmit, isValidEmail, reset, email, name, password1, password2 } = useForm({
        email: '',
        name: '',
        password1: '',
        password2: ''
    });

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    value={name}
                    type="text"
                    name='name'
                    placeholder="Name"
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                    onChange={(ev) => onChange(ev)}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input
                    value={email}
                    type="email"
                    name='email'
                    placeholder="Email"
                    onChange={(ev) => onChange(ev)}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Email no es válido</span>}

                <input
                    value={password1}
                    type="password"
                    name="password1"
                    placeholder="Password"
                    onChange={(ev) => onChange(ev)}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 &&
                    password1.trim().length > 0 && <span>La contraseña debe tener 6 caracteres</span>
                }
                <input
                    value={password2}
                    type="password"
                    name='password2'
                    placeholder="Repeat Password"
                    onChange={(ev) => onChange(ev)}
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 &&
                    <span>Las contraseñas deben ser iguales</span>
                }

                <button type="submit">Create</button>
                <button onClick={reset}>Reset form</button>
            </form>
        </div>
    )
}
