import {useNavigate} from 'react-router-dom'
const Cliente = ({cliente}) => {
  const navigate = useNavigate()
  const { nombre, empresa, email, telefono, id } = cliente;
    return (
      <tr className="border-b">
        <td className="p-6 space-y-2">
          {nombre}
          <p className="text-2xl text-gray-800">{empresa}</p>
        </td>
        <td className="p-6">
          <p className="text-gray-600">
            Email:
            <span className="text-gray-800 uppercase font-bold">{email}</span>
          </p>
          <p className="text-gray-600">
            Tel:
            <span className="text-gray-800 uppercase font-bold">
              {telefono}
            </span>
          </p>
        </td>
        <td className="p-6 flex gap-3">
          <button className="text-blue-600 hover:text-blue-700 uppercase font-bold text-center"
          onClick={()=>navigate(`/clientes/${id}/editar`)}
          >
            Editar
          </button>
        </td>
        <td className="p-6 flex gap-3">
          <button className="text-red-600 hover:text-red-700 uppercase font-bold text-center">
            Eliminar
          </button>
        </td>
      </tr>
    );
};

export default Cliente;
