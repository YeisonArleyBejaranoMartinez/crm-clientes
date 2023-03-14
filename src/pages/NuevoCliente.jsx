import React from "react";
import { useNavigate, Form,useActionData } from "react-router-dom";
import Error from "../components/Error";
import Formulario from "../components/Formulario";


export async function action({request}) {
  // cidigo para optener datos  por medio del requestFormDate
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email= formData.get('email')
  // validacion
  const errores = [];
  if(Object.values(datos).includes("")){
    errores.push("todos los campos son obligatorios");
  }
 let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
if (!regex.test(email)) {
  errores.push("El Email no es valido");
}
  // retornar datos y errores
  if(Object.keys(errores).length){
    return errores;
  }
}

const NuevoCliente = () => {

  const errores = useActionData();
  console.log(errores);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Llene todos los campos para registrar un nuevo liente
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-withe px-3 py-1 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow  rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errores?.length && errores.map((error, index) => <Error key={index}>{error}</Error>)}
        <Form 
        method="post"
        noValidate
        >
        
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
