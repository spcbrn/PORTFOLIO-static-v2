const express = require('express')
    , app = express();

app.use(express.static(`${__dirname}/dist`));

app.listen(8081, () => console.log(`Serving static-portfolio-v2 on port 8081`));
