import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/test/")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
