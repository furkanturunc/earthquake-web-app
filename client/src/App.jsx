import { useEffect, useState } from 'react';

function App() {
  const [quakes, setQuakes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/earthquakes')
      .then((res) => res.json())
      .then((data) => setQuakes(data));
  }, []);

  return (
    <div>
      <h1>Latest Earthquakes</h1>
      <ul>
        {quakes.map((q) => (
          <li key={q.id}>
            {q.location} - Magnitude: {q.magnitude}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
