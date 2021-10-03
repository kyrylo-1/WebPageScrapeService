import express, { Request, Response } from 'express';
import { getPage } from './getPage';

require('dotenv').config();

const app = express();
app.use(express.json());

app.route('/listing').get(async function (req: Request, res: Response) {
  const url = req.body['url'];

  const result = await getPage(url);
  res.send(result);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
