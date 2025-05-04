export const addStudentsApi = async (studentData) => {
  try {
    const response = await fetch(
      "https://681738fd26a599ae7c39acb9.mockapi.io/students/students",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Помилка при додаванні студента:", error);
    return null;
  }
};
