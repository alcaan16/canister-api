import express from "express";
import { fishRouter } from "./routes/fish.js";
import { corsMiddleware } from "./middlewares/cors.js";
import { DEFAULTS } from "./config.js";
import { healthRouter } from "./routes/health.js";
import { homeRouter } from "./routes/home.js";
import { fishCategoriesRouter } from "./routes/fish-categories.js";

const PORT = process.env.PORT ?? DEFAULTS.PORT;
const app = express();

app.use(corsMiddleware());
app.use(express.json()); //<<---middleware para parsear el body

app.use("/fish", fishRouter);
app.use("/fish-categories", fishCategoriesRouter);
app.use("/health", healthRouter);
app.use("/", homeRouter);

if (!process.env.NODE_ENV) {
  app.listen(PORT, () => {
    console.log("servidor levantado en http://localhost:" + PORT);
  });
}
export default app;
