/**
	{
		"api" :1,
		"name":"Add Zero-padded Line Numbers",
		"description":"Number Lines with Ascending, Zero-padded Labels",
		"author":"Ethan Bütt (ethan309)",
		"icon":"counter",
        "tags":"number, line, pad, label"
	}
**/

const outputFormattedPoint = (item, currentIndex, items) => {
    const label = (currentIndex + 1)
                        .toString()
                        .padStart((items.length).toString().length, '0');
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