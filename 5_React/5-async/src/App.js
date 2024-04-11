import { getFetch, getAwait, getAxios, useGetQuery } from "./api/animal";
// useEffect : sycle 관련
// useState : 상태 관리 위한 hook
import { useEffect, useState } from "react";

/* getFetch~then
const App = () => {
  const [data, setData] = useState([]); // list로 가져오고 싶을 땐 초기값을 [](빈배열)로!
  useEffect(() => {
    getFetch().then((result) => {
      console.log(result);
      setData(result);
    });
  }, []);

  return (
    <div>
      {data.map((animal) => (
        <div key={animal.no}>{animal.name}</div>
      ))}
    </div>
  );
};
*/
const App = () => {
  //const [data, setData] = useState([]);

  // const dataLoad = async () => {
  //   const result = await getAxios();
  //   setData(result);
  // getAwait().then((result) => {
  //   console.log(result);
  //   setData(result);
  // });
  // };

  // useEffect(() => {
  //   dataLoad();
  // }, []);

  //react-query
  const { data, isLoading, isError } = useGetQuery();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <>
      {data?.map(
        (
          animal // map 관련 error 발생 시 null 문제! -> '?' 붙이기!
        ) => (
          <div key={animal.no}>{animal.name}</div>
        )
      )}
    </>
  );
};

export default App;
