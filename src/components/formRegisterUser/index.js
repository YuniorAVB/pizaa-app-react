import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions";

const FormRegisterUser = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.name && (
        <div className="alert alert-danger" role="alert">
          DEBE LLENAR LOS DATOS
        </div>
      )}

      <div className="form-group">
        <label> Nombre</label>
        <input
          name="name"
          placeholder="NOMBRE"
          ref={register({ required: true })}
          className="form-control"
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label>DNI</label>
        <input
          className="form-control"
          name="dni"
          placeholder="DNI"
          ref={register({ required: true })}
          autoComplete="off"
        />
      </div>
      <input
        type="submit"
        className="btn btn-success btn-block"
        value="REGISTRAR"
      />
    </form>
  );
};

export default FormRegisterUser;
