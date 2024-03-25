import router from './router';
import dotenv from 'dotenv';

dotenv.config();

const app = router;
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});