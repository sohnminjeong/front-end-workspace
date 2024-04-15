import { delAnimal, getAnimals } from "../api/animal";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  // Table이라고 components지정하면 밑에 코드에 componenets가 들어가야 함
  width: 100%;
  th {
    font-weight: bold;
    padding: 10px;
  }
  td {
    padding: 10px;
    text-align: center;
    border-top: 1px dashed gray;
  }
`;

const Home = () => {
  const [animals, setAnimals] = useState([]);

  const animalAPI = async () => {
    const result = await getAnimals();
    console.log(result);
    setAnimals(result.data); // 값은 result 안 data에 있음
  };

  useEffect(() => {
    // 한 번만 발생
    animalAPI();
  }, []);

  const onDelete = async (no) => {
    await delAnimal(no);
    setAnimals(animals.filter((animal) => animal.no !== no));
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal) => (
          // 안에 있는 것 중 가장 상위에 primary key가 있어야 함
          <tr key={animal.no}>
            <td>
              <a href={`/detail/${animal.no}`}>{animal.name}</a>
            </td>
            <td>{animal.age}</td>
            <td>
              <button onClick={() => onDelete(animal.no)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default Home;
