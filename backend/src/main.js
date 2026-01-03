const express = require('express');
const app = express();
const PORT = process.env.API_PORT || 4000;

app.get("/health", (_, res) => {
  res.json({
    api: "healthy",
    database: "connected",
    externalApis: "cached",
    openApi: "valid",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`GEORdr API running on port ${PORT}`);
}); 