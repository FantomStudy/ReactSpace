import React, { useEffect, useState } from "react";
import styles from "./Gagarin.module.css";
import Header from "../../components/Header/Header";
import { gagarinFlight } from "../../API/requests";

export default function GagarinPage() {
  const [data, setData] = useState({
    mission: {
      name: "",
      launch_details: {
        launch_date: "",
        launch_site: {
          name: "",
          location: {
            latitude: "",
            longitude: "",
          },
        },
      },
      flight_duration: {
        hours: 0,
        minutes: 0,
      },
      spacecraft: {
        name: "",
        manufacturer: "",
        crew_capacity: 0,
      },
    },
    landing: {
      date: "",
      site: {
        name: "",
        country: "",
        coordinates: {
          latitude: "",
          longitude: "",
        },
      },
      details: {
        parachute_landing: false,
        impact_velocity_mps: 0,
      },
    },
    cosmonaut: [
      {
        bio: {
          career: "",
          early_life: "",
          post_flight: "",
        },
        name: "",
        rank: "",
        birthdate: "",
      },
    ],
  });

  const fetchData = async () => {
    const response = await gagarinFlight();
    setData(response.data[0]);
    console.log(response.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.main_text}>
            <h1>Миссия: {data.mission.name}</h1>

            <p className={styles.subtitle}>
              Длительность: {data.mission.flight_duration.hours} час{" "}
              {data.mission.flight_duration.minutes} минут
            </p>

            <p>Взлёт: {data.mission.launch_details.launch_date}</p>
            <p>
              Координаты:{" "}
              {data.mission.launch_details.launch_site.location.latitude} широты
              {", "}
              {data.mission.launch_details.launch_site.location.longitude}{" "}
              долготы
            </p>
            <p>Корабль: {data.mission.spacecraft.name}</p>
            <p>Изготовитель: {data.mission.spacecraft.manufacturer}</p>
            <p>Вместимость экипажа: {data.mission.spacecraft.crew_capacity}</p>

            <h1>Данные о приземлении</h1>
            <p>Приземление: {data.landing.date}</p>
            <p>
              Скорость при приземлении:{" "}
              {data.landing.details.impact_velocity_mps} миль в секунду
            </p>
            <p>
              Использован парашут:{" "}
              {data.landing.details.parachute_landing ? "Да" : "Нет"}
            </p>

            <p>Место приземления: {data.landing.site.name}</p>
            <p>Страна: {data.landing.site.country}</p>
            <p>
              Координаты: {data.landing.site.coordinates.latitude} широты,{" "}
              {data.landing.site.coordinates.longitude} долготы
            </p>

            <h1>Данные о космонавте</h1>
            <p>Имя: {data.cosmonaut[0].name}</p>
            <p>Звание: {data.cosmonaut[0].rank}</p>
            <p>Дата рождения: {data.cosmonaut[0].birthdate}</p>

            <p>Карьера: {data.cosmonaut[0].bio.career}</p>
            <p>Ранняя жизнь: {data.cosmonaut[0].bio.early_life}</p>
            <p>После полёта:{data.cosmonaut[0].bio.post_flight}</p>
          </div>
          <div className={styles.image_container}></div>
        </div>
      </div>
    </>
  );
}
