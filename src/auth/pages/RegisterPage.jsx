import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../css/stylesc.css' 
import { useForm, useAuthStore, useLogin  } from '../../hooks';

const registerFormFields = {
  registerEmail: "",
  registerPassword: "",
};

export const RegisterPage = () => {

  const {registerGithub,registreGoogle,isPending  } = useLogin();
  const { errorMessage, startRegister } = useAuthStore();
  const {
    registerEmail,
    registerPassword,
    onInputChange: onRegisterInputChange,
  } = useForm( registerFormFields);

  const registerSubmit = (event) => {
    event.preventDefault();
    startRegister({
      email: registerEmail,
      password: registerPassword,
    });
  };
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="container-reg">
      <div className="container-register">
        <h4>Únase a miles de personas de todo el mundo</h4>
        <p className="sub-text">
          Domina el desarrollo web full-stack realizando este desafio de la vida
          real propuesto por Shifta
        </p>
        <form onSubmit={registerSubmit}>
          <div className="group-form">
            <div className="icon-form">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              placeholder="Email"
              name="registerEmail"
              required
              value={registerEmail}
              onChange={onRegisterInputChange}
            />
          </div>
          <div className="group-form">
            <div className="icon-form">
              <i className="fa-solid fa-lock"></i>
            </div>
            <input
              type="password"
              placeholder="Contraseña"
              name="registerPassword"
              minLength="8" 
              maxLength="15"
              pattern="^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$"
              required
              value={registerPassword}
              onChange={onRegisterInputChange}
              
            />
          </div>
          <button className="button-register" type="submit">
            Registrarse
          </button>
        </form>
        <p className="text-2">o continuar con estos perfiles sociales</p>
        <div className="continer-icon">
          <button className="icon-style" onClick={registerGithub}>
          
          {isPending ? "Loading..." : <i className="fa-brands fa-github"></i>}
          </button>
          <button className="icon-style" onClick={ registreGoogle  }>
            <i className="fa-brands fa-google"></i>
          </button>
        </div>

        <p className="text-2">¿Ya tiene una cuenta? 
        <Link
              color='inherit'
              to='/auth/login'>
          <span>Ingresar</span>
        </Link>
        </p>

      </div>
    </div>
  );
};
