import "./App.css";
import { useFetch } from "./hooks/useState";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  const response = data?.data;
  console.log(data?.data);

  if (loading) {
    return <p style={{ color: "teal" }}>Loading...</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}> something went wrong</p>;
  }
  return (
    <div className="">
      <p>userId: {response?.userId}</p>
      <p>Id: {response?.title}</p>
    </div>
  );
}

export default App;
