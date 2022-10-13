import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useForm, useAuthStore, useLogin } from '../../hooks';
import '../../css/LoginPage.css' 


const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

export const LoginPage = () => {
    const {loginGithub,loginGoogle } = useLogin();

    const { errorMessage, startLogin } = useAuthStore();
    const { loginEmail, 
            loginPassword, 
            onInputChange: onLoginInputChange,
            } = useForm( loginFormFields );

    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin({
            email: loginEmail,
            password: loginPassword,
        });
    };

    useEffect(() => {
        if (errorMessage !== undefined) {
    
            console.log("Mensaje de error (LoginPage, linea 60) " + errorMessage )
        }
    }, [ errorMessage ])

    return (
        <div className="container-loginn">
            <div className="container-login">
                <div className='group-form'>
                    <p className='login-title'>Inicio de sesión</p>
                    <form onSubmit={loginSubmit}>
                        <div className="group-form">
                            <div className="icon-form">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                name="loginEmail"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>

                        <div className="group-form">
                            <div className="icon-form">
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                name="loginPassword"
                                minLength="8" 
                                maxLength="15"
                                pattern="^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$"
                                required
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <button className="button-login"
                                type="submit">
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                    <p className="text-2">o continuar con estos perfiles sociales</p>
                </div>
                <div className="container-icon">
                    <button className="icon-style" onClick={loginGithub}>
                        <i className="fa-brands fa-github"></i>
                    </button>
                    <div className="icon-style" onClick={loginGoogle }>
                        <i className="fa-brands fa-google"></i>
                    </div>
                </div>
                <p className="text-2">¿No tienes una cuenta?
                    <Link
                     
                        color='inherit'
                        to='/auth/register'>
                        <span>Registrate</span>
                    </Link>
                </p>

            </div>
        </div>


    );
};