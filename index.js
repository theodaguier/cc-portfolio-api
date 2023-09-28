const app = require("./app");
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.listen(app.get("port"), () => {
  console.log(`Server Listening on ${app.get("base_url")}:${app.get("port")}`);
});
