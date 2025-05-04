export const deleteStudentsApi = async (studentId) => {
  try {
    const response = await fetch(
      `https://681738fd26a599ae7c39acb9.mockapi.io/students/students/${studentId}`,
      {
        method: "DELETE",
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Помилка при видаленні студента:", error);
    return null;
  }
};
