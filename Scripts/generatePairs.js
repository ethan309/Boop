/**
	{
		"api":1,
		"name":"Pair Line Items Randomly",
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

/**
 * @param {Array[*]} array - array of items to be shuffled
 */
const shuffleArray = (array) => {
    array = array.slice(0);
    const shuffledArray = [];
    
    // build shuffled array by randomly taking elements out of ordered array
    while (array.length > 0) {
        const transferred = array.splice(getRandomInt(0, array.length), 1); // grab random element out of array
        shuffledArray.push(transferred);
    }
  
    return shuffledArray;
}

/**
 * @param {Array[String]} array - array of items to be grouped
 * @param {int} groupSize - desired group size (positive integer)
 */
const buildGroupsFromArray = (array, groupSize) => {
    if(groupSize < 1) throw new Error('Group size must be a positive integer!');
    array = array.slice(0);

    // build groups
    const groups = [];
    while(array.length > array.length % groupSize) {
        groups.push(array.splice(0, groupSize).join(', '));
    }
    // final group may be smaller than requested due to lack of items
    if(array.length > 0) {
        groups.push(array.splice(0).join(', '));
    }

    return groups;
}

function main(state) {
    try {
        const inputLines = state.fullText.split('\n');
        const shuffledItems = shuffleArray(inputLines);

        const outputLines = buildGroupsFromArray(shuffledItems, 2); // groups of 2

        state.fullText = outputLines.join('\n');
    } catch(error) {
        state.postError('Unexpected Error');
        state.fullText += `\n\nFull Error:\n${error}`;
	}
}