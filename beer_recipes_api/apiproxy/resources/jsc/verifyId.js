try {
    var id = context.getVariable("request.queryparam.id");
    var parsedId = parseInt(id);
    context.setVariable("isRequestError", false);
    if (isNaN(parsedId)) {
        context.setVariable("isRequestError", true);
    }
} catch(err) {
    context.setVariable("isRequestError", true);
}
    