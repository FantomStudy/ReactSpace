import { useState } from "react";
import styles from "./CreateMissionPage.module.css";

export default function CreateMissionPage() {
  const [formData, setFormData] = useState({
    name: "",
    launch_date: "",
    launch_name: "",
    launch_latitude: 0,
    launch_longitude: 0,
    landing_name: "",
    landing_latitude: 0,
    landing_longitude: 0,
    command_module: "",
    lunar_module: "",
    crew: [
      {
        name: "",
        role: "",
      },
    ],
  });
  const [mission, setMission] = useState({
    name: "",
    launch_details: {
      launch_date: "",
      launch_site: {
        name: "",
        location: { latitude: 0, longitude: 0 },
      },
    },
    landing_details: {
      landing_date: "",
      landing_site: {
        name: "",
        coordinates: { latitude: 0, longitude: 0 },
      },
    },
    spacecraft: {
      command_module: "",
      lunar_module: "",
      crew: [{ name: "", role: "" }],
    },
  });

  return (
    <>
      <form className={styles.form}>
        {Object.keys(formData).map((value, key) => {
          return <input type="text" className="input" key={key} name={value} />;
        })}
      </form>
    </>
  );
}

// import { useState } from "react";
// import styles from "./CreateMissionPage.module.css";

// export default function CreateMissionPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     launch_date: "",
//     launch_name: "",
//     launch_latitude: 0,
//     launch_longitude: 0,
//     landing_name: "",
//     landing_latitude: 0,
//     landing_longitude: 0,
//     command_module: "",
//     lunar_module: "",
//     crew: [
//       {
//         name: "",
//         role: "",
//       },
//     ],
//   });

//   const [mission, setMission] = useState({
//     name: "",
//     launch_details: {
//       launch_date: "",
//       launch_site: {
//         name: "",
//         location: { latitude: 0, longitude: 0 },
//       },
//     },
//     landing_details: {
//       landing_date: "",
//       landing_site: {
//         name: "",
//         coordinates: { latitude: 0, longitude: 0 },
//       },
//     },
//     spacecraft: {
//       command_module: "",
//       lunar_module: "",
//       crew: [{ name: "", role: "" }],
//     },
//   });

//   // Русские лейблы для полей формы
//   const labels = {
//     name: "Название миссии",
//     launch_date: "Дата запуска",
//     launch_name: "Название места запуска",
//     launch_latitude: "Широта места запуска",
//     launch_longitude: "Долгота места запуска",
//     landing_name: "Название места посадки",
//     landing_latitude: "Широта места посадки",
//     landing_longitude: "Долгота места посадки",
//     command_module: "Командный модуль",
//     lunar_module: "Лунный модуль",
//     crew_name: "Имя члена экипажа",
//     crew_role: "Роль члена экипажа",
//   };

//   return (
//     <>
//       <form className={styles.form}>
//         {Object.keys(formData).map((key) => (
//           <div key={key} className={styles.inputGroup}>
//             <label htmlFor={key}>{labels[key] || key}</label>
//             <input type="text" id={key} name={key} />
//           </div>
//         ))}
//       </form>
//     </>
//   );
// }
