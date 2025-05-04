export const getStudentsApi = () => {
  return fetch(
    "https://681738fd26a599ae7c39acb9.mockapi.io/students/students"
  ).then((response) => response.json());
};
