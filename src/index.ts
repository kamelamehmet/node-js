import app from './server';
import * as dotnev from "dotenv"
dotnev.config()
import config from './config';


app.listen(config.port, () => {
    console.log(`hello on http://localhost:${config.port}`);
})