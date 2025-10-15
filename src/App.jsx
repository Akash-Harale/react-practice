import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [search, setSearch] = useState("");
  const { data } = useFetch(import.meta.env.VITE_FAKE_API, search);
  console.log(data);

  return (
    <div>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        type="number"
        placeholder="search..."
      />
    </div>
  );
};

export default App;
