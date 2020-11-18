/**
	{
		"api":1,
		"name":"Append All Lines",
		"description":"Add a selected suffix to the end of all lines",
		"author":"Ethan Bütt (ethan309)",
		"icon":"type",
        "tags":"append, line, end, suffix"
	}
**/

function main(state) {
    try {
        if(state.selection === undefined || state.selection.length === 0) {
            state.postError('Must select suffix text.');
        } else {
            state.fullText = state.fullText.replace(/$/g, state.selection);
        }
    } catch(error) {
        state.postError('Unexpected Error');
        state.fullText += `\n\nFull Error:\n${error}`;
	}
}