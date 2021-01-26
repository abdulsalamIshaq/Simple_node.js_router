const router = require('./router');

const app = new router(3000);

app.get('/', (req, res) => {
    res.write('Hello World');
});
