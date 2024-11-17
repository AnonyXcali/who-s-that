'use server';
import axios from "axios";

export async function test() {
  // Perform server-side logic (e.g., database query or API call)
  const response = await axios.get('http://localhost:3000/api/create');
  const {
    data,
  } = response || {}
  return data
}