require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./app/routers");
const errorHandlers = require("./handlers/errorHandlers");
const mongoConnexion = require("./app/database/connexion");

app.use(express.json({ limit: "1mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
app.use(cors());
app.use("/api", router, (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
});

mongoConnexion().then(console.log);

if (app.get("NODE_ENV") === "development") {
  app.use(errorHandlers.devErrorsCollector);
} else {
  app.use(errorHandlers.prodErrorsCollector);
}

app.set("port", process.env.PORT);
app.set("base_url", process.env.BASE_URL);

/**
 * test pour envoyer un projet dans la base de donnée
 */

const dataProjects = [
  {
    name: "Mario Sorrenti",
    description:
      "The monograph of photographer MARIO SORRENTI has been conceived as a unique publication with a dual purpose. Designed as a photobook, it allows the expansive pages to showcase his work chronologically, while the smaller pages narrate his story. This format creates a dynamic and fluid publication, offering a comprehensive visual and narrative experience.\nThe combination of these two formats in a single editorial piece achieves a harmonious balance between the visual and narrative aspects of the monograph. The meticulous design and chronological layout provide a captivating and immersive reading experience, enabling readers to explore and comprehend Mario Sorrenti's creative evolution.",
    thumbnail: "/assets/img/mario_sorrenti/MINIAT-WEB.webp",
    cover: "/assets/gif/MARIOSOREBTI-EDITO.gif",

    images: {
      img1: "/assets/img/mario_sorrenti/2_MARIOSORREBTI-EDITO.webp",
      img2: "/assets/img/mario_sorrenti/3_MARIOSORREBTI-EDITO.webp",
      img3: "/assets/img/mario_sorrenti/4_MARIOSORREBTI-EDITO.webp",
      img4: "/assets/img/mario_sorrenti/5_MARIOSORREBTI-EDITO.webp",
      img5: "/assets/img/mario_sorrenti/6_MARIOSORREBTI-EDITO.webp",
      img6: "/assets/img/mario_sorrenti/7_MARIOSORREBTI-EDITO.webp",
      img8: "/assets/img/mario_sorrenti/4_MARIOSORREBTI-EDITO.webp",

      img9: "/assets/img/mario_sorrenti/CONNIOOMINIAT-WEB.webp",
      img10: "/assets/gif/MARIOSOREBTI-EDITO.gif",
    },
    year: 2022,
    tags: ["All", "Editorial"],
  },
];

const { catchErrors } = require("./handlers/errorHandlers");

const projectController = require("./app/controllers/projectController");

router.post(
  "/projects/",
  catchErrors(projectController.create.bind(dataProjects[0]))
);

router.get("/projects", catchErrors(projectController.index));

module.exports = app;
