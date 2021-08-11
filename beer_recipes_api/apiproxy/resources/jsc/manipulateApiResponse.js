var response = context.getVariable("response.content");
var parsedResponse = JSON.parse(response);
var recipeId = context.getVariable("recipeId");

var recipes = {};

if(recipeId === null) {
    recipes['beer_recipes'] = parsedResponse;
    context.setVariable("response.content", JSON.stringify(recipes));
} else {
    var arrayRecipes = parsedResponse;

    var recipeOutput = arrayRecipes.filter(id => id['id'] == recipeId);
    recipes['beer_recipe'] = recipeOutput[0];
    context.setVariable("response.content", JSON.stringify(recipes));
}