const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
            {
              'id': 1,
              'image': 'https://placeimg.com/64/64/1',
              'name': '홍리나',
              'birthday': '20021010',
              'gender': 'femail',
              'job': 'student'
            },
            {
              'id': 2,
              'image': 'https://placeimg.com/64/64/2',
              'name': '홍나리',
              'birthday': '20021010',
              'gender': 'femail',
              'job': 'student'
            },
            {
              'id': 3,
              'image': 'https://placeimg.com/64/64/3',
              'name': '홍국일',
              'birthday': '2002101011',
              'gender': 'femail',
              'job': 'doctor'
            }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));