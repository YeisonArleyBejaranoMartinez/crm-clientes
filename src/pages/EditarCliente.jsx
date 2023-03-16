import { obtenerCliente } from "../data/Clientes";


export async function loader({params}){
  // usamos el loader para poder obtener  los  ids que masamos como parametro esto va de
  // la mano con parte de configuracion en el main
 const cliente =  await obtenerCliente(params.clienteId);
 if (Object.values(cliente).length === 0){
    throw  new Response('', {
        status: 404,
        statusText: "No hay resultados"
    })
 } 
 return cliente;
}
const EditarCliente = () => {
  return (
    <div>EditarCliente</div> 
  )
}

export default EditarCliente