export const deleteStudentsApi = (studentId) => {
    return fetch(
      `https://681738fd26a599ae7c39acb9.mockapi.io/students/students/${studentId}`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to delete student with ID: ${studentId}`);
      }
      return response.json();
    });
  };
  