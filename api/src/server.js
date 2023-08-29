const https = require("https");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
// end points
const allMessages = require("./routes/allMessages");

const app = express();
const siteName = "test2.evrocamedia";

const privateKeyPath = `/home/ecarlson10/cert/${siteName}-key.pem`;
const getCredentials = () => {
  const privateKey = fs.readFileSync(privateKeyPath, "utf8");
  const certificate = fs.readFileSync(
    `/home/ecarlson10/cert/${siteName}-cert.pem`,
    "utf8",
  );
  const fullchain = fs.readFileSync(
    `/home/ecarlson10/cert/${siteName}-fullchain.pem`,
    "utf8",
  );
  return {
    key: privateKey,
    cert: certificate,
    ca: fullchain,
  };
};

app.use(express.json());
app.use(cors());

// end points
app.get("/all", allMessages);

const httpsServer = https.createServer(getCredentials(), app);
const port = 5009;
httpsServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port https://${siteName}.com:${port}`);
});

fs.watchFile(privateKeyPath, () => {
  try {
    httpsServer.setSecureContext(getCredentials());
  } catch (e) {
    console.error(e);
  }
});
