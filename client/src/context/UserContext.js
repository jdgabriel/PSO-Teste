import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userEdit, setUserEdit] = useState(false);
  const [edit, setEdit] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const { data } = await api.get("/users");
    const { ok, users } = data;
    if (ok) {
      setUsers(users);
    }
  }

  const handleCreateUser = async (formData) => {
    if (userEdit) {
      const { id, name, cpf, birthday, weigth } = formData;
      const { data } = await api.put(`/users/${id}`, {
        name,
        cpf,
        birthday,
        weigth,
      });
      const { ok, user, error } = data;
      if (ok) {
        setUsers((prevUsers) =>
          prevUsers.map((upUser) => {
            return upUser.id === user.id ? user : upUser;
          })
        );
        setUserEdit(false);
        return {
          success: true,
        };
      } else {
        return {
          success: false,
          error,
        };
      }
    } else {
      const { data } = await api.post("/users", formData);
      const { ok, user, error } = data;
      if (ok) {
        setUsers([user, ...users]);
        return {
          success: true,
        };
      } else {
        return {
          success: false,
          error,
        };
      }
    }
  };

  const handleEditUser = async (id) => {
    setUserEdit(true);
    const edit = users.filter((usr) => usr.id === id)[0];
    setEdit(edit);
  };

  const handleDeleteUser = async (id) => {
    const { data } = await api.delete(`/users/${id}`);
    const { ok, error } = data;
    if (ok) {
      setUsers((prevUsers) => prevUsers.filter((usr) => usr.id !== id));
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        error,
      };
    }
  };

  const handleCancelEdit = () => {
    setEdit(null);
    setUserEdit(false);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        edit,
        userEdit,
        handleCancelEdit,
        handleCreateUser,
        handleEditUser,
        handleDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {};
