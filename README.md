# The Beer Recipes API
My own project for Beer Recipes API.

## Initial config

The file "config.json" has to be updated, if you plan on deploying the proxies to your Apigee platform (every key or secret is a test entity):

```json
{
    "pathToBeerRecipesSpec": "/home/vagrant/beer-recipes-api/specs/beer_recipes_spec.json",
    "pathToOAuthSpec": "/home/vagrant/beer-recipes-api/specs/oauth_spec.json",
    "apikey": "veK86MDDYlItCojArSqHc9FJ6JifDx1S",
    "apisecret": "de0R5mDN2rbv06RI",
    "host": "paweltutka-eval-test.apigee.net"
}
```

### CAUTION

Make sure to provide the absolute path to the correct specification, otherwise Jest will not be able to read the proper specification for the test.

## Setting up Apigee

1. Upload the API Proxy zip files from 'beer_recipes_api' and 'oauth_api' directories to Apigee platform of your choice.
2. Deploy the up-to-date revision of both API Proxies.
3. Create API Product on Apigee (add the appropriate API Proxy bundles to the config, the rest of config is your choice).
4. Create Developer.
5. Create Developer App and associate the API key and API secret with the above-mentioned API Product.

## Setting up the environment

Set up the Linux environment using the apt package manager (I used Ubuntu):

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

## Tests

To run tests, run the following command in the root directory of this repo:

```bash
npm run test
```
