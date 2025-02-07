import React, { useState } from "react";
import styles from "./auth.module.css";
import { Link, useNavigate } from "react-router";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useAuth } from "../../contexts/authContext";
import { login } from "../../API/requests";

export default function LoginPage() {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const [data, setData] = useState({
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

    const response = await login(data);

    if (response.message != null) {
      setError(response.message);
    } else {
      localStorage.setItem("token", response.data.token);
      handleLogin();
      navigate("/");
    }

    setLoading(false);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.log_image}></div>
      <div className={styles.form_container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Авторизация</h1>
          <p className={styles.subtitle}>
            Нет аккаунта? <Link to="/registration">Создать!</Link>
          </p>
        </header>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Эл.Почта
            <input
              type="email"
              onChange={handleChange}
              name="email"
              id="email"
              className={`input ${error != null ? "input_danger" : null}`}
            />
          </label>
          <label className={styles.label}>
            Пароль
            <input
              type="password"
              onChange={handleChange}
              name="password"
              id="password"
              className={`input ${error != null ? "input_danger" : null}`}
            />
          </label>
          {error && (
            <div className={styles.error_block}>
              <p className={styles.error}>{error}</p>
            </div>
          )}
          <button className="button" type="submit">
            Войти <img src="/arrow-right.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
