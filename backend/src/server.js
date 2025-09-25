import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import apiRouter from './routes/index.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
	res.json({ status: 'ok' });
});

app.use('/api', apiRouter);

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});


