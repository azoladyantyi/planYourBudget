var budgetItem='';
(function() {
    'use strict';

    function initTemplate(templateSelector) {
        var templateText = document.querySelector(templateSelector).innerHTML;
        return Handlebars.compile(templateText);
    }

    var addRecipeTemplate = initTemplate('.AddRecipeTemplate');
    var recipesElement = document.querySelector('.recipesList');
