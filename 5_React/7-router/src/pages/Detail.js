/*
[컴포넌트 기본 구조]
const Detail=()=>{};
export default Detail;
*/
import { useParams, useNavigate } from "react-router-dom";
import { getAnimal, updateAnimal } from "../api/animal";
import { styled } from "styled-components";
import { useState, useEffect } from "react";

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

const Detail = () => {
  const { no } = useParams();
  const [animal, setAnimal] = useState({ name: "", age: 0 }); // 하나값이면 {}, 여러값이면[]
  // 가져올 때는 초기값을 지정해줘야 함(없으면 새로고침 시 에러 발생)
  //console.log(no);

  const animalAPI = async () => {
    const response = await getAnimal(no);
    // console.log(response.data);
    setAnimal(response.data); // animal에 데이터값 들어감
  };

  useEffect(() => {
    animalAPI();
  }, []);

  //수정 관련
  const navigate = useNavigate();
  const update = async () => {
    await updateAnimal(animal);
    navigate("/");
  };
  return (
    <Div key={animal.no}>
      <input
        type="text"
        value={animal.name}
        onChange={(e) => {
          setAnimal((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <input
        type="text"
        value={animal.age}
        onChange={(e) => {
          setAnimal((prev) => ({ ...prev, age: e.target.value }));
        }}
      />
      <button onClick={update}>정보 수정</button>
    </Div>
  );
};
export default Detail;
