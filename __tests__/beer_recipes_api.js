const { default: axios } = require('axios');
const jestOpenApi = require('jest-openapi');
const fs = require('fs');

const readConfig = fs.readFileSync('./config.json');
const parsedConfig = JSON.parse(readConfig);

//initialize config
const apikey = parsedConfig['apikey'];
const apisecret = parsedConfig['apisecret'];
const host = parsedConfig['host'];
const openApiSpec = parsedConfig['pathToBeerRecipesSpec']

const auth = base64Encode(apikey + ":" + apisecret);

function base64Encode(string) {
    return Buffer.from(string).toString('base64');
}

async function getToken() {
    let typeBearer = 'Bearer ';
    let formParams = new URLSearchParams();
    formParams.append('grant_type', 'client_credentials');

    let headers = {
        headers: {
            Authorization: 'Basic ' + auth,
            'Content-Type': 'application/x-www-form-urlencoded'
        }    
    }


    const accessTokenResponse = await axios.post('https://' + host + '/softserve_oauth/accesstoken', formParams, headers);

    const token = accessTokenResponse['data']['access_token'];

    return typeBearer + token;
}

jestOpenApi(openApiSpec);

// test for retrieving all beer recipes
describe('GET /softserve_beerrecipes/v2/beers', () => {
    it('should conform to API spec for all beer recipes', async () => {
        const token = await getToken();

        let beerHeaders = {
            headers: {
                'Authorization': token,
                'x-api-key': apikey
            }
        }

        // request and response from beers API
        const recipeRes = await axios.get('https://' + host + '/softserve_beerrecipes/v2/beers', beerHeaders);
        expect(recipeRes).toSatisfyApiSpec();
    });
});

// test for receiving a single beer recipe
describe('GET /softserve_beerrecipes/v2/beers', () => {
    it('should conform to API spec for a single beer recipe', async () => {
        const token = await getToken();

        let beerHeaders = {
            headers: {
                'Authorization': token,
                'x-api-key': apikey
            }
        }

        let queryParams = new URLSearchParams();
        queryParams.append('id', '20');

        // request and response from beers API
        const recipeRes = await axios.get('https://' + host + '/softserve_beerrecipes/v2/beers?' + queryParams, beerHeaders);
        expect(recipeRes).toSatisfyApiSpec();
    });
});