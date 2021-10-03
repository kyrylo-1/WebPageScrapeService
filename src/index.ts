import express, { Request, Response } from 'express';

require('dotenv').config();

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
