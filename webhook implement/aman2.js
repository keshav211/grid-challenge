const express = require('express');
const app = express();
const axios = require('axios');

const parameters = {
  id:"",
  transactionAmount:"",
  transactionStatus:"",
  websiteRedirectedFrom:"",
  redirectbackfrom:"amansite"};

app.get('/', (req, res) => {
  parameters.id = req.query.id;
  parameters.transactionAmount = req.query.transactionAmount;
  parameters.transactionStatus = req.query.transactionStatus;
  parameters.websiteRedirectedFrom = req.query.redirectweb;

  res.json(parameters);
});


app.get('/home', sendWebhook, (req, res) => {
    // Your route logic here
    res.send('Response from /some/route');
  });

  
function sendWebhook(req, res) {
  const parameter = {
    id:parameters.id,
    transactionAmount:"200",
    transactionStatus:"approved",
    websiteRedirectedFrom:"gg",
    redirectbackfrom:"amansite"};
    const webhookUrl = 'http://localhost:3000/webhook';;

  axios
    .post(webhookUrl, parameter)
    .then((response) => {
      console.log('Data sent successfully to the webhook');
      // Handle the response from the webhook, if needed
      res.status(200).send('Data sent successfully to the webhook');
    })
    .catch((error) => {
      console.error('Error sending data to the webhook:', error);
      // Handle any errors that occurred during the request
      res.status(500).send('Error sending data to the webhook');
    });
}

app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });