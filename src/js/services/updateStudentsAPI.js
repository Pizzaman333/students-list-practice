export const updateStudentsApi = async (studentId, updatedData) => {
  try {
    const response = await fetch(
      `https://681738fd26a599ae7c39acb9.mockapi.io/students/students/${studentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Помилка при оновленні студента:", error);
    return null;
  }
};
