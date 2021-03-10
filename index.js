import express  from 'express';
import setUpDB from './config/database';
import router from './config/routes';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 3020;
const app = express();
setUpDB();

const corsOptions = {
  exposedHeaders: 'x-auth',
};

app.use(cors(corsOptions))

app.use(express.json())
app.use('/', router)

app.listen(port, () => {
  console.log('listening on the port', port)
})