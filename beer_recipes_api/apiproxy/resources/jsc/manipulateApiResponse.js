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
    
    if(recipeOutput.length === 0) {
        var emptyResponse = {
            message: "The provided id of the recipe does not exist."
        }
        context.setVariable("response.content", JSON.stringify(emptyResponse));
        
    } else {
        recipes['beer_recipe'] = recipeOutput[0];
        context.setVariable("response.content", JSON.stringify(recipes));
    }
    
}