import React, { useState } from "react";
import styles from "./Accordeon.module.css";

const AccordionItem = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return <></>;
};

export default function Accordion() {
  return <div className={styles.accordion}></div>;
}
// import { useState } from "react";

// export default function Accordion({ title, children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border rounded mb-2">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300"
//       >
//         {title}
//       </button>
//       {isOpen && <div className="p-4 border-t">{children}</div>}
//     </div>
//   );
// }

// // Использование аккордеона
// export function AccordionExample() {
//   return (
//     <div className="max-w-md mx-auto mt-5">
//       <Accordion title="Раздел 1">Содержимое первого раздела</Accordion>
//       <Accordion title="Раздел 2">Содержимое второго раздела</Accordion>
//       <Accordion title="Раздел 3">Содержимое третьего раздела</Accordion>
//     </div>
//   );
// }
