
import dotenv from 'dotenv';
import app from './index';
dotenv.config();

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});