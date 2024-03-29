import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm, useProfileStore, useAuthStore } from "../../hooks";
import { Link } from "react-router-dom";
import "../../css/stylesc.css";

const formFields = {
  name: "",
  avatar: "",
  bio: "",
  email: "",
  password: "",
  phoneNumber: "",
};

export const EditProfilePage = () => {
  const { startLogout } = useAuthStore();

  const {
    name,
    avatar,
    bio,
    email,
    password,
    phoneNumber,
    formState,
    setFormState,
    onInputChange,
  } = useForm(formFields);

  const { profileUser } = useSelector((state) => state.profile);


  const { setUserProfile } = useProfileStore();

  const { updateUserProfile } = useProfileStore();

  useEffect(() => {
    if (profileUser !== null) {
      setFormState({ ...profileUser });
    }
  }, [profileUser]);

  useEffect(() => {
    setUserProfile();
  }, []);

  const onSaveProfileChanges = async (event) => {
    event.preventDefault();

    await updateUserProfile(formState);
  };

  return (
    <>
      <div>
        <button className="btn-salir" onClick={startLogout}>
          <i className="icon-mr fa-solid fa-right-from-bracket"></i>Salir
        </button>
      </div>

      <div className="btn-atras-w">
        <Link className="btn-atras" to={"/profile"}>
          <i className=" icon-t fa-solid fa-angle-left"></i>Atrás
        </Link>
      </div>
      <div className="container-edit">
        <div className="container-perfil">
          <div className="width-p">
            <p className="text">Cambiar información</p>
            <p className="sub-text">
              Los cambios se reflejarán en todos los servicios
            </p>

            <form className="form-edit" onSubmit={onSaveProfileChanges}>
              <div className="div-photo">
                {avatar ? (
                  <img src={avatar} alt="foto de perfil" />
                ) : (
                  <i className="fa-solid fa-user-secret size"></i>
                )}
                <span className="mr"></span>
                <input
                  className="group-formt url"
                  type="url"
                  id="avatar"
                  placeholder="CAMBIAR FOTO"
                  name="avatar"
                  value={avatar || ""}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label className="label" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="group-form"
                  type="text"
                  id="nombre"
                  placeholder="Ingresa tu nombre..."
                  name="name"
                  value={name || ""}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label className="label" htmlFor="biografía">
                  Biografía
                </label>
                <textarea
                  className="biografia"
                  type="text"
                  id="biografía"
                  placeholder="Ingresa tu Biografía..."
                  name="bio"
                  value={bio || ""}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label className="label" htmlFor="teléfono">
                  Teléfono
                </label>
                <input
                  className="group-form"
                  type="tel"
                  id="teléfono"
                  placeholder="Ingresa tu teléfono..."
                  name="phoneNumber"
                  value={phoneNumber || ""}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  className="group-form"
                  type="email"
                  id="email"
                  placeholder="Ingresa tu email..."
                  name="email"
                  value={email || ""}
                  readOnly
                />
              </div>
              <div>
                <label className="label" htmlFor="contraseña">
                  Contraseña
                </label>
                {profileUser.google === true 
                ?
              
              <input
                  className="group-form"
                  type="password"
                  id="contraseña"
                  placeholder="Ingresa tu nueva contraseña..."
                  minLength="8"
                  maxLength="15"
                  pattern="^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$"
                  name="password"
                  value={password}
                  readOnly
                />
                :
                <input
                className="group-form"
                type="password"
                id="contraseña"
                placeholder="Ingresa tu nueva contraseña..."
                minLength="8"
                maxLength="15"
                pattern="^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$"
                name="password"
                value={password || ""}
                onChange={onInputChange}
              />
                
              }
              </div>

              <button className="button-guardar" type="submit">
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
