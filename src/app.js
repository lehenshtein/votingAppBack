const express = require('express');
const userRouter = require('./routers/user');
const port = process.env.PORT;
require('./db/db');
// https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122 lesson link
const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
