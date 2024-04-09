import Btn from "./Btn";
import { useState, useEffect } from "react";

const Converter = () => {
  const [number, setNumber] = useState("");
  const [bool, setBool] = useState(false);
  const [text, setText] = useState("Minutes => Hours");

  const change = (e) => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  const invert = () => {
    setBool(!bool);
    reset();
  };

  useEffect(() => {
    if (bool) {
      setText("Hours => Minutes");
    } else {
      setText("Minutes => Hours");
    }
  }, [bool]);

  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :{" "}
        <input
          type="number"
          placeholder="Minutes"
          onChange={change}
          value={bool ? number * 60 : number}
          disabled={bool}
        />
      </p>
      <p>
        Hours :{" "}
        <input
          placeholder="Hours"
          onChange={change}
          type="number"
          disabled={!bool}
          value={bool ? number : Math.floor(number / 60)}
        />
      </p>
      <Btn text="Reset" click={reset} />
      <Btn text={text} click={invert} />
    </>
  );
};

export default Converter;
