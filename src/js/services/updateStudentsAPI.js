export const updateStudentsApi = (studentId, updatedData) => {
  return fetch(
    `https://681738fd26a599ae7c39acb9.mockapi.io/students/students/${studentId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }
  ).then((response) => response.json());
};
