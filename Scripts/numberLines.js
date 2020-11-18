/**
	{
		"api":1,
		"name":"Add Line Numbers",
		"description":"Number Lines with Ascending Labels",
		"author":"Ethan Bütt (ethan309)",
		"icon":"counter",
        "tags":"number, line, label"
	}
**/

const outputFormattedPoint = (item, currentIndex) => {
    const label = currentIndex + 1;
    return `${label}. ${item}`;
};

function main(state) {
    try {
        const inputLines = state.fullText.split('\n');
        const outputLines = inputLines.map(outputFormattedPoint);
        state.fullText = outputLines.join('\n');
    } catch(error) {
        state.postError('Unexpected Error');
        state.fullText += `\n\nFull Error:\n${error}`;
	}
}