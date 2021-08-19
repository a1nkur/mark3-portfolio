import styles from "./HypoCalculator.module.css";
import React, { useState } from "react";

const HypoCalculator = () => {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [hypo, setHypo] = useState("");

  const checkHypo = () => {
    setHypo(Math.sqrt(sideA * sideA + sideB * sideB));
  };

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <input
          type="number"
          value={sideA}
          onChange={e => setSideA(e.target.value)}
        />
        <input
          type="number"
          value={sideB}
          onChange={e => setSideB(e.target.value)}
        />
        <button onClick={checkHypo}>calculate</button>
        <input type="text" name="" id="" />
      </div>
      <div>{hypo}</div>
    </div>
  );
};

export default HypoCalculator;
