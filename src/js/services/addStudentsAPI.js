export const addStudentsApi = (studentData) => {
    return fetch("https://681738fd26a599ae7c39acb9.mockapi.io/students/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    }).then((response) => response.json());
  };  