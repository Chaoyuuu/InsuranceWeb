const express = require('express');

const app = express();

  
app.get('/apt/custom', function(req, res) {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'}

    ];

    res.json(customers);
    // res.send('Hello World!');
});

// app.use(function(req, res, next) {
//     res.status(404).send('Sorry cant find that!');
//   });

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));

