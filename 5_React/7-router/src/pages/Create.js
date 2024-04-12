import { addAnimal } from "../api/animal";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);

  * {
    margin-right: 5px;
    padding: 5px;
  }

  button {
    background-color: black;
    color: white;
    border-radius: 4px;
    border: 1px solid black;
    cursor: pointer;
  }
`;

const Create = () => {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({});
  const add = async () => {
    await addAnimal(animal);
    navigate("/"); // 원하는 곳으로 경로 지정하면 넘어감
  };

  return (
    <Div>
      <input
        type="text"
        placeholder="동물 이름 입력"
        value={animal.name}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="동물 나이 입력"
        value={animal.age}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, age: e.target.value }))
        }
      />
      <button onClick={add}>동물 추가</button>
    </Div>
  );
};
export default Create;
