import 'dotenv/config';
import express, { type NextFunction, type Request, type Response } from 'express';
import { pool } from './db.js';
import studentRoutes from './routes/studentRoutes.js';

pool.query('SELECT NOW()')
  .then(() => console.log('Database connected successfully'))
  .catch((error: unknown) => {
    const code = typeof error === 'object' && error !== null && 'code' in error ? error.code : undefined;
    const message = error instanceof Error ? error.message : 'Unknown database error';
    console.error(`Database connection failed${code ? ` (${String(code)})` : ''}: ${message}`);
  });

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Student Information API',
    course: 'ITE 303',
  });
});

app.use('/students', studentRoutes);

app.use((error: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (
    error instanceof SyntaxError &&
    'status' in error &&
    error.status === 400
  ) {
    res.status(400).json({ message: 'Invalid JSON body' });
    return;
  }

  next(error);
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
