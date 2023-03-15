import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
