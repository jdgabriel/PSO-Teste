import useUser from "../../hooks/useUser";
import { format } from "date-fns";

import { FaTrash } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

function TableList() {
  const { users, handleEditUser, handleDeleteUser } = useUser();

  return (
    <>
      <h3>Criar novo Usuário</h3>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Nascimento</td>
            <td>Peso</td>
            <td>CPF</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{format(Date.now(user.birthday), "dd/MM/yyyy")}</td>
              <td>{user.weigth}</td>
              <td>{user.cpf}</td>
              <td>
                <div className="actions">
                  <span
                    onClick={() => handleEditUser(user.id)}
                    className="edit"
                    href=""
                  >
                    <FiEdit2 />
                  </span>
                  <span
                    onClick={() => handleDeleteUser(user.id)}
                    className="delete"
                    href=""
                  >
                    <FaTrash />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableList;
