import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Routes
} from 'react-router-dom';

import {
  DynamicForm,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage,
} from '../03-forms/pages'



import logo from '../logo.svg';
import {
    DynamicForm,
    FormikAbstractation,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage,
    RegisterFormikPage
} from '../03-forms/pages'

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className="nav-active">Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className="nav-active">Formik basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className="nav-active">Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className="nav-active">Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstractation" className="nav-active">Formik Abstractation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-register" className="nav-active">Register Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className="nav-active">Dyamic Form</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/formik-basic" element={<FormikBasicPage />} />
                    <Route path="/formik-yup" element={<FormikYupPage />} />
                    <Route path="/formik-components" element={<FormikComponents />} />
                    <Route path="/formik-abstractation" element={<FormikAbstractation />} />
                    <Route path="/formik-register" element={<RegisterFormikPage />} />
                    <Route path="/dynamic-form" element={<DynamicForm />} />
                    <Route path="/" element={<h1>Home</h1>} />
                </Routes>
            </div>
        </Router>
    );
}