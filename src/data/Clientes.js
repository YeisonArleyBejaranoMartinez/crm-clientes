import { json } from "react-router";

export async function obtenerClientes(){
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json();
    return resultado
}
export async function agregarClientes(datos){
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers:{
        'Content-Type':'application/json'
      }
    });
    
  } catch (error) {
    console.log(error)
  }
}