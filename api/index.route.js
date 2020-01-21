const express = require('express')
const router = express.Router()
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');


// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Sheets API.
    authorize(JSON.parse(content) , listBoxNumbers);
    authorize(JSON.parse(content) , ampMeatsList);
    

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
    router.get('/', (req,res) => {
       res.send(rows)
})
    
  });
}

async function updateListBoxNumbers(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  await sheets.spreadsheets.values.update({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'A:B',
    valueInputOption: 'RAW',
    resource:{
      values:[
        // router.post('/', (req,res) => {
        //   console.log(res.data)})

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
    range: 'Procument Sheet!A:D',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name:');
      rows.map((row) => {
        console.log(`${row[0]}, ${row[1]} ,${row[2]}, ${row[3]}`);
      });
    } else {
      console.log('No data found.');
    }
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
    range: 'Fruit Proc. List!A:D',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name:');
      rows.map((row) => {
        console.log(`${row[0]}, ${row[1]} ,${row[2]}, ${row[3]}`);
      });
    } else {
      console.log('No data found.');
    }
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
function vegProcList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'Fruit Proc. List!A:D',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name:');
      rows.map((row) => {
        console.log(`${row[0]}, ${row[1]} ,${row[2]}, ${row[3]}`);
      });
    } else {
      console.log('No data found.');
    }
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
function shoppingList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1JY_ZhE6kJkm90UCUJ6lFSKJMjUKVdM4lbUju3wGrhn4',
    range: 'Shopping!A:D',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name:');
      rows.map((row) => {
        console.log(`${row[0]}, ${row[1]} ,${row[2]}, ${row[3]}`);
      });
    } else {
      console.log('No data found.');
    }
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
    range: 'Cheeseman!A:D',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name:');
      rows.map((row) => {
        console.log(`${row[0]}, ${row[1]} ,${row[2]}, ${row[3]}`);
      });
    } else {
      console.log('No data found.');
    }
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
    if (rows.length) {
      console.log('Name:');
      rows.map((row) => {
        console.log(`${row[0]}, ${row[1]} `);
      });
    } else {
      console.log('No data found.');
    }
  });
}




router.post('/submit', (req,res) => {
  console.log(req.body)})

module.exports = router 