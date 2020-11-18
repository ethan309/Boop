/**
	{
		"api":1,
		"name":"Pair Line Items",
		"description":"Group line items into random pairs (last group may have only one element)",
		"author":"Ethan Bütt (ethan309)",
		"icon":"sort-numbers",
        "tags":"group, pair, random"
	}
**/

/**
 * @param {int} min - inclusive
 * @param {int} max - exclusive
 */
const getRandomInt = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
}

const shuffleArray = (array) => {
    const shuffledArray = [];
    
    // build shuffled array by randomly taking elements out of ordered array
    while (array.length > 0) {
        const transferred = array.splice(getRandomInt(0, array.length), 1); // grab random element out of array
        shuffledArray.push(transferred);
    }
  
    return shuffledArray;
}

function main(state) {
    try {
        const inputLines = state.fullText.split('\n');
        const shuffledItems = shuffleArray(inputLines);
        // when there is an odd number of items, do not pair the final item
        const lastItem = shuffledItems.length % 2 === 0 ? undefined : shuffledItems.splice(shuffledItems.length - 1, 1);

        const outputLines = [];
        for(var i = 0; i < shuffledItems.length; i += 2) {
            outputLines.push(`${shuffledItems[i]}, ${shuffledItems[i + 1]}`);
        }
        if(lastItem) {
            outputLines.push(lastItem);
        }

        state.fullText = outputLines.join('\n');
    } catch(error) {
        state.postError('Unexpected Error');
        state.fullText += `\n\nFull Error:\n${error}`;
	}
}