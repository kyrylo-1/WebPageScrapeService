import express, { Request, Response } from 'express';

require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.route('/listing').get(function (req: Request, res: Response) {
  const url = req.body['url'];
  res.json({ result: `your url ${url}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
