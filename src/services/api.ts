export interface Student {
  id: number;
  name: string;
  email: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getStudents(): Promise<Student[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Gagal mengambil data mahasiswa");
  }

  const data: Student[] = await response.json();

  return data;
}