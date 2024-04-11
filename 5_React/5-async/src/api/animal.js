import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// fetch ~ then
export const getFetch = () => {
  // 비동기 처리 -> fatch라는 단어 사용
  return fetch("http://localhost:8080/api/animal")
    .then((response) => {
      //console.log(response.json());
      return response.json();
    })
    .then((data) => {
      return data;
    }); // url 주소
};

// async ~ await
export const getAwait = async () => {
  const response = await fetch("http://localhost:8080/api/animal");
  //console.log(response);
  return response.json();
};

// axios (async ~ await)
export const getAxios = async () => {
  const response = await axios.get("http://localhost:8080/api/animal");
  // get, post, put, delete 방식따라 작성
  console.log(response);
  return response.data;
};

// react-query
export const useGetQuery = () => {
  return useQuery({
    queryKey: ["animal"],
    queryFn: getAxios,
  });
};
