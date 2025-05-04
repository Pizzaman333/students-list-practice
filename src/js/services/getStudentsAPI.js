export const getStudentsApi = async () => {
  try {
    const response = await fetch(
      "https://681738fd26a599ae7c39acb9.mockapi.io/students/students"
    );
    return await response.json();
  } catch (error) {
    console.error("Помилка при завантаженні студентів:", error);
    return null; 
  }
};