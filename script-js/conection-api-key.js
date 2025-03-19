// TODO(developer): Set to client ID and API key from the Developer Console
import { listMajors } from "./index-operative.js";



var CLIENT_ID = "";
var API_KEY = "";

//  CLIENT_ID = "171546887029-1ile1im4n0cs69h05o4vq7il2t3g0m8d.apps.googleusercontent.com";
//   API_KEY ="AIzaSyCYuss-zQ2bsA7OSPksiEdm-I2ljQET_as";
// Discovery doc URL for APIs used by the quickstart


/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */








const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

let tokenClient;
let gapiInited = false;
let gisInited = false;



document.getElementById('authorize_button').style.visibility = 'hidden';
document.getElementById('signout_button').style.visibility = 'hidden';
document.getElementById('signout_button').style.display = 'none'
/**
 * Callback after api.js is loaded.
 */
document.getElementById('gapi').addEventListener('load', gapiLoaded())
function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function initializeGapiClient() {

  await gapi.client.init({
    apiKey: "",
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  maybeEnableButtons();
}

/**
 * Callback after Google Identity Services are loaded.
 */

document.getElementById('gis').addEventListener('load', gisLoaded())
function gisLoaded() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', './data/credential-api.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);


      CLIENT_ID = data.CLIENT_ID


      tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '',

        // defined later
      });

    }

  };
  xhr.send();
  gisInited = true;
  maybeEnableButtons();
}

/**
 * Enables user interaction after all libraries are loaded.
 */
function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    document.getElementById('authorize_button').style.visibility = 'visible';
  }
}

/**
 *  Sign in the user upon button click.
 */

document.getElementById('authorize_button').addEventListener('click', () => {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw (resp);
    }
    document.getElementById('signout_button').style.visibility = 'visible';
    document.getElementById('signout_button').style.display = 'block'

    document.getElementById('authorize_button').innerText = 'Refresh';
    document.getElementById('text_value').placeholder = '';
    document.querySelector('.cortina').removeAttribute("style");
    document.getElementById('text_value').readOnly = true;
    document.getElementById('text_value').value = '';

    await listMajors();
  };

  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({ prompt: 'consent' });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({ prompt: '' });
  }


})


//function handleAuthClick()

/**
 *  Sign out the user upon button click.
 */
document.getElementById('signout_button').addEventListener('click', () => {
  const token = gapi.client.getToken();
  if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken('');
    document.getElementById('content').innerText = '';
    document.getElementById('authorize_button').innerText = 'Authorize';
    document.getElementById('signout_button').style.visibility = 'hidden';
  }
})
//function handleSignoutClick()