# beer-recipes-api
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

## Setting up Apigee



## Setting up the environment

Set up the environment using the apt package manager:

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
