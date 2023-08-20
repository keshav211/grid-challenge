const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // Import the uuid library
const app = express();

app.use(bodyParser.json());

app.get('/redirect', (req, res) => {
    const transactionAmount = 0;
    const transactionStatus = 'pending';
    const transactionID = uuidv4();
    const website='gg';// yaha pei rajat ke website ka naam
    const newURL = `http://localhost:4000/?id=${transactionID}&transactionStatus=${transactionStatus}&transactionAmount=${transactionAmount}&redirectweb=${website}`;
    res.redirect(newURL);
});

app.post('/webhook', (req, res) => {
  id = req.body.id;
  transactionAmount = req.body.transactionAmount;
  transactionStatus = req.body.transactionStatus;
  redirectbackfrom=req.body.redirectbackfrom;


  console.log(`Received ID: ${id}`);
  console.log(`Received Transaction Amount: ${transactionAmount}`);
  console.log(`Received Transaction Status: ${transactionStatus}`);
  console.log(`Received website: ${redirectbackfrom}`)
  
  res.status(200).send('Webhook data received successfully.');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});







