import React, { useState } from "react";
import styles from "./auth.module.css";
import { Link, useNavigate } from "react-router";
import LoadingPage from "../LoadingPage/LoadingPage";
import { registration } from "../../API/requests";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    patronymic: "",
    birth_date: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const response = await registration(data);

    if (response.error != null) {
      setError(response.error.errors);
    } else {
      navigate("/login");
    }
    setLoading(false);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Регистрация</h1>
          <p className={styles.subtitle}>
            Уже есть аккаунт? <Link to="/login">Войти!</Link>
          </p>
        </header>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Фамилия
            <input
              type="text"
              onChange={handleChange}
              name="last_name"
              id="last_name"
              className={`input ${
                error?.last_name != null ? "input_danger" : null
              }`}
            />
          </label>
          {error?.last_name && (
            <div className={styles.error_block}>
              <p className={styles.error}>{error.last_name[0]}</p>
            </div>
          )}
          <label className={styles.label}>
            Имя
            <input
              type="text"
              onChange={handleChange}
              name="first_name"
              id="first_name"
              className={`input ${
                error?.first_name != null ? "input_danger" : null
              }`}
            />
          </label>
          {error?.first_name != null && (
            <div className={styles.error_block}>
              <p className={styles.error}>{error.first_name[0]}</p>
            </div>
          )}
          <label className={styles.label}>
            Отчество
            <input
              type="text"
              onChange={handleChange}
              name="patronymic"
              id="patronymic"
              className={`input ${
                error?.patronymic != null ? "input_danger" : null
              }`}
            />
          </label>
          {error?.patronymic != null && (
            <div className={styles.error_block}>
              <p className={styles.error}>{error.patronymic[0]}</p>
            </div>
          )}
          <label className={styles.label}>
            Дата рождения
            <input
              type="date"
              onChange={handleChange}
              name="birth_date"
              id="birth_date"
              className={`input ${
                error?.birth_date != null ? "input_danger" : null
              }`}
            />
          </label>
          {error?.birth_date != null && (
            <div className={styles.error_block}>
              <p className={styles.error}>{error.birth_date[0]}</p>
            </div>
          )}
          <label className={styles.label}>
            Эл.Почта
            <input
              type="email"
              onChange={handleChange}
              name="email"
              id="email"
              className={`input ${
                error?.email != null ? "input_danger" : null
              }`}
            />
          </label>
          {error?.email != null && (
            <div className={styles.error_block}>
              <p className={styles.error}>{error.email[0]}</p>
            </div>
          )}
          <label className={styles.label}>
            Пароль
            <input
              type="password"
              onChange={handleChange}
              name="password"
              id="password"
              className={`input ${
                error?.password != null ? "input_danger" : null
              }`}
            />
          </label>
          {error?.password != null && (
            <div className={styles.error_block}>
              <p className={styles.error}>{error.password[0]}</p>
            </div>
          )}
          <button className="button" type="submit">
            Зарегистрироваться <img src="/arrow-right.svg" alt="" />
          </button>
        </form>
      </div>
      <div className={styles.reg_image}></div>
    </div>
  );
}
