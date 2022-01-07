import React, { useContext, useState } from "react";
import { RecipesContext } from "../store/RecipesProvider";
import { ACTIONS } from "../store/RecipesReducer";
import styles from "../styles/form_card.module.css";
import { useRouter } from "next/router";
import axios from "axios";

export default function FormCard() {
  const { dispatch } = useContext(RecipesContext);
  const [formData, setFormData] = useState(() => {
    return { title: "", detail: "" };
  });
  console.log(formData);
  const [errors, setErrors] = useState({
    title: null,
    detail: null,
  });
  const router = useRouter();

  const handleCancel = () => {
    router.push(`/`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const verifyForm = () => {
    const { title, detail } = formData;
    const errors = { title: null, detail: null };
    setErrors({ title: null, detail: null });
    title.trim().length < 3 &&
      (errors.title = "El título debe tener al menos 3 caracteres");
    detail.trim().length < 50 &&
      (errors.detail = "El detalle debe tener al menos 50 caracteres");
    setErrors(errors);
    return Object.values(errors).every((e) => e === null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!verifyForm()) {
      return;
    }
    console.log("submit");
    const res = await axios.post("/api/recipe", formData);
    const recipe = {};
    if (res.data) {
      recipe.date = res.data?.properties?.Date?.date?.start;
      recipe.id = res.data?.id;
      recipe.title = res.data?.properties?.Title?.title[0]?.plain_text;
      recipe.detail = res.data?.properties?.Detail?.rich_text[0]?.plain_text;
      dispatch({ type: ACTIONS.addRecipe, payload: recipe });
      router.push(`/recipe/${recipe.id}`)
    } else {
      console.log("error al crear la receta");
    }
  };

  return (
    <>
      <div className={`${styles["card"]} ${styles["form-receta"]}`}>
        <form className={styles["form-receta"]}>
          <input
            name="title"
            type="text"
            className={styles["titulo"]}
            placeholder="Título"
            value={formData["title"]}
            onChange={handleChange}
          />
          <label className={styles["error"]}>{errors.title}</label>
          <textarea
            name="detail"
            className={styles["detalle"]}
            placeholder="Escribe algo..."
            value={formData["detail"]}
            onChange={handleChange}
            required
          ></textarea>
            <label className={styles["error"]}>{errors.detail}</label>
          <div className={styles["form-options"]}>
            <select>
              <option value="private">Privado</option>
              <option value="public">Público</option>
            </select>
            <div className={styles["botones"]}>
              <button id="cancelar" type="reset" onClick={handleCancel}>
                Cancelar
              </button>
              <button id="guardar" type="submit" onClick={handleSubmit}>
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
