import morgan from "morgan";
import dbInit from "./config/database";
import { PORT } from "./config/envs";
import app from "./server";



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbInit()
})