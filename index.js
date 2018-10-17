const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 3001;
const orders = require("./controllers/orders");
const app = express();

app.use(json());



//order endpoints

app.post("/api/importOrder", orders.importOrder); //sends order to konnektive
app.post("/api/importLead", orders.importLead); //sends leads to konnektive
app.post("/api/importUpsell", orders.importUpsell); //sends upsells to konnektive
app.post("/api/importClick", orders.importClick);

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
});

