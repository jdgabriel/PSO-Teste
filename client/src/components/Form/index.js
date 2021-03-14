import { useEffect, useRef } from "react";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { format } from "date-fns";

import Input from "./Input";
import useUser from "../../hooks/useUser";

function FormComponent() {
  const formRef = useRef(null);
  const { edit, userEdit, handleCancelEdit, handleCreateUser } = useUser();

  useEffect(() => {
    if (edit) {
      formRef.current.setData({
        ...edit,
        birthday: format(Date.now(edit.birthday), "yyyy-MM-dd"),
      });
    } else {
      formRef.current.setData({
        id: "",
        name: "",
        cpf: "",
        birthday: "",
        weigth: "",
      });
    }
  }, [edit]);

  const cancelUpdate = () => {
    handleCancelEdit();
  };

  const handleSubmit = async (formData) => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Preencha o Nome"),
        cpf: Yup.string()
          .max(11, "Preencha um CPF válido")
          .required("Preencha o CPF"),
        birthday: Yup.string().required("Preencha uma Data"),
        weigth: Yup.string().required("Preencha um Peso"),
      });
      await schema.validate(formData, {
        abortEarly: false,
      });

      const { success } = await handleCreateUser(formData);
      if (success) {
        formRef.current.reset();
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <>
      <h3>Criar novo Usuário</h3>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="id" type="hidden" />
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="cpf" type="text" placeholder="CPF" />
        <Input name="birthday" type="date" placeholder="Data de Nascimento" />
        <Input name="weigth" type="text" placeholder="Peso" />
        <button className={userEdit ? "edit" : "create"} type="submit">
          {userEdit ? "atualizar" : "criar"}
        </button>
        {userEdit ? (
          <button onClick={cancelUpdate} className="cancel" type="button">
            cancelar
          </button>
        ) : (
          ""
        )}
      </Form>
    </>
  );
}

export default FormComponent;
