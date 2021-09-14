export function cookingStatus(remainingTime) {
    if (remainingTime == 0) {
        return 'Lasagna is done.'
    } else if (remainingTime > 0) {
        return 'Not done, please wait.'
    } else {
        return 'You forgot to set the timer.'
    }
}
export function preparationTime(layers, timePerLayer = 2) {
    return timePerLayer * layers.length;
}
/* export function quantities(layers) {
    return {
        noodles: layers.filter(l => l == 'noodles').length * 50,
        sauce: layers.filter(l => l == 'sauce').length * 0.2
    }
} */
export function quantities(layers) {
    const result = {
        noodles: 0,
        sauce: 0
    }
    for (let layer of layers) {
        if (layer == 'sauce') {
            result['sauce'] += 0.2;
        } else if (layer == 'noodles') {
            result['noodles'] += 50;
        }
    }
    return result;
}


export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}
export function scaleRecipe(recipe, portions) {
    const scaledRecipe = recipe;
    for (let ingredient in scaledRecipe) {
        scaledRecipe[ingredient] *= portions / 2
    }
    return scaledRecipe
}