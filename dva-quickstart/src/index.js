import dva from "dva";
import "./index.css";
import Model from "./models/example";

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.model(Model);
// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
