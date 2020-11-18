/**
	{
		"api":1,
		"name":"Prepend All Lines",
		"description":"Add a selected prefix to the beginning of all lines",
		"author":"Ethan Bütt (ethan309)",
		"icon":"type",
        "tags":"prepend, line, start, prefix"
	}
**/

function main(state) {
    try {
        if(state.selection === undefined || state.selection.length === 0) {
            state.postError('Must select prefix text.');
        } else {
            state.fullText = state.fullText.replace(/^/g, state.selection);
        }
    } catch(error) {
        state.postError('Unexpected Error');
        state.fullText += `\n\nFull Error:\n${error}`;
	}
}