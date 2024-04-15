import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// async - await : 비동기 처리
export const getAnimals = async () => {
  //   return await axios.get("http://localhost:8080/api/animal");
  return await instance.get("animal");
};

// 1개 보여주기 - getAnimal
export const getAnimal = async (no) => {
  return await instance.get("animal/" + no);
};

// 수정하기 - updateAnimal
export const updateAnimal = async (data) => {
  return await instance.put("animal", data);
};

export const addAnimal = async (data) => {
  //   return await axios.post("http://localhost:8080/api/animal", data);
  return await instance.post("animal", data);
};

export const delAnimal = async (no) => {
  //   return await axios.delete("http://localhost:8080/api/animal/" + no);
  return await instance.delete("animal/" + no);
};
