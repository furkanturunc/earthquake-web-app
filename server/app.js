const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/earthquakes', (req, res) => {
  res.json([
    { id: 1, location: 'İstanbul', magnitude: 4.2 },
    { id: 2, location: 'İzmir', magnitude: 5.0 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
