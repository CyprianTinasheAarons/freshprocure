const express = require('express')
const router = express.Router()
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');


// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content) , listBoxNumbers);
  authorize(JSON.parse(content) , ampMeatsList);
  authorize(JSON.parse(content) ,procurementSheetList);
  authorize(JSON.parse(content) , vegProcList);
  authorize(JSON.parse(content) , fruitProcList);
  authorize(JSON.parse(content) , drummondsList);
  authorize(JSON.parse(content) , cheesemanList);
  authorize(JSON.parse(content) , shoppingList);
 
});



/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Prints t spreadsheet:
 *
 * @see https://docs.google.com/spreadsheets/d/1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4/edit#gid=1970220951
 * 
 * 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
//  */
 async function listBoxNumbers(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  await sheets.spreadsheets.values.get({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'A:B',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    console.log(rows)
    router.get('/', (req,res) => {
       res.send(rows)
})
    
  });
}

let numAmount ;

router.post('/submit', (req,res) => {

    numAmount = req.body.productQuantity
    update() 
    
}) 


function update () {
  fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  authorize(JSON.parse(content) , updateListBoxNumbers);

 
});}

function updateListBoxNumbers(auth ) {
  const sheets = google.sheets({version: 'v4', auth});
   sheets.spreadsheets.values.update({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'Box Numbers!B1:B27',
    valueInputOption: 'RAW',
    resource:{
      values:[
        [numAmount[0]._value] ,[numAmount[1]._value] ,[numAmount[2]._value] ,[numAmount[3]._value] ,[numAmount[4]._value] ,[numAmount[5]._value] ,[numAmount[6]._value] ,
        [numAmount[7]._value] ,[numAmount[8]._value] ,[numAmount[9]._value] ,[numAmount[10]._value] ,[numAmount[11]._value] ,[numAmount[12]._value] ,[numAmount[13]._value] ,
        [numAmount[14]._value] ,[numAmount[15]._value] ,[numAmount[16]._value] ,[numAmount[17]._value] ,[numAmount[18]._value] ,[numAmount[19]._value] ,[numAmount[20]._value] ,
        [numAmount[21]._value] ,[numAmount[22]._value] ,[numAmount[23]._value] ,[numAmount[24]._value] ,[numAmount[25]._value] ,[numAmount[26]._value] ,
   
      ]
    }
  }
  
);
} 



/**
 * Prints t spreadsheet:
 *
 * @see https://docs.google.com/spreadsheets/d/1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4/edit#gid=1970220951
 * 
 * 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
//  */
async function ampMeatsList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  await sheets.spreadsheets.values.get({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'Amp Meats!A:F',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    router.get('/ampmeats', (req,res) => {
      res.send(rows)
    })
  });
}

/**
 * Prints t spreadsheet:
 *
 * @see https://docs.google.com/spreadsheets/d/1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4/edit#gid=1388086632
 * 
 * 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
//  */
async function procurementSheetList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  await sheets.spreadsheets.values.get({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'Procument Sheet!D:D',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    router.get('/procurementlist', (req,res) => {
      res.send(rows)
    });
  });
}

/**
 * Prints t spreadsheet:
 *
 * @see https://docs.google.com/spreadsheets/d/1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4/edit
 * 
 * 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
//  */
function fruitProcList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'Fruit Proc. List!D:D',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    router.get('/fruitList', (req,res) => {
      res.send(rows)
    });
 
  });
}

/**
 * Prints t spreadsheet:
 *
 * @see https://docs.google.com/spreadsheets/d/1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4/edit
 * 
 * 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
//  */
async function vegProcList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  await sheets.spreadsheets.values.get({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'Veg Proc. List!D:E',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    router.get('/vegetableslist', (req,res) => {
      res.send(rows)
    });
    
 
  });
}

/**
 * Prints t spreadsheet:
 *
 * @see https://docs.google.com/spreadsheets/d/1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4/edit
 * 
 * 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
//  */
async function shoppingList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  await sheets.spreadsheets.values.get({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'Shopping!D3:D',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    router.get('/shoppinglist', (req,res) => {
      res.send(rows)
    });
    
 
  });
}



/**
 * Prints t spreadsheet:
 *
 * @see https://docs.google.com/spreadsheets/d/1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4/edit
 * 
 * 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
//  */
function cheesemanList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'Cheeseman!A:E',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    router.get('/cheesemanList', (req,res) => {
      res.send(rows)
    })

 
  });
}

/**
 * Prints t spreadsheet:
 *
 * @see https://docs.google.com/spreadsheets/d/1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4/edit
 * 
 * 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
//  */
function drummondsList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'Drummonds List!A:B',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    router.get('/drummondsList', (req,res) => {
      res.send(rows)
    });
    
  });
}




module.exports = router 