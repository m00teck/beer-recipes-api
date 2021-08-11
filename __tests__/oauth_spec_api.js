const { default: axios } = require('axios');
const jestOpenApi = require('jest-openapi');
const fs = require('fs');

function base64Encode(string) {
    return Buffer.from(string).toString('base64');
}

const readConfig = fs.readFileSync('./config.json');
const parsedConfig = JSON.parse(readConfig);

//initialize config
const apikey = parsedConfig['apikey'];
const apisecret = parsedConfig['apisecret'];
const host = parsedConfig['host'];
const openApiSpec = parsedConfig['pathToOAuthSpec'];

const auth = base64Encode(apikey + ":" + apisecret);

jestOpenApi(openApiSpec);

// test for fetching bearer token
describe('POST /softserve_oauth/accesstoken', () => {
    it('should conform to API spec for client credentials bearer token', async () => {
        let formParams = new URLSearchParams();
        formParams.append('grant_type', 'client_credentials');
    
        let oauthHeaders = {
            headers: {
                Authorization: 'Basic ' + auth,
                'Content-Type': 'application/x-www-form-urlencoded'
            }    
        };

        const accessTokenResponse = await axios.post('https://' + host + '/softserve_oauth/accesstoken', formParams, oauthHeaders);
        expect(accessTokenResponse).toSatisfyApiSpec();
    });
});