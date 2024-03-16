"use strict";
const app = require("./config/express.ts");
app.listen(3000, () => {
    console.log("serve is listening");
});
