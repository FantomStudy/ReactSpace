import React, { useEffect } from "react";
import styles from "./LunarMission.module.css";
import Header from "../../../components/Header/Header";
import { useState } from "react";
import { getLunarMissions } from "../../../API/requests";
import { useNavigate } from "react-router";

export default function LunarMissionPage() {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getLunarMissions();
    console.log(response);
  };

  return (
    <>
      <Header />
      <button
        className="button"
        onClick={() => {
          navigate("/lunar-missions-create");
        }}
      >
        Создать миссию
      </button>
      <div className="container"></div>
    </>
  );
}
