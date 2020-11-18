/**
	{
		"api":1,
		"name":"Remove All Other Text",
		"description":"Remove all text not currently selected",
		"author":"Ethan Bütt (ethan309)",
		"icon":"type",
        "tags":"remove, text, select, filter"
	}
**/

function main(state) {
    try {
        if(state.selection === undefined || state.selection.length === 0) {
            state.postError('Must select text to keep.');
        } else {
            state.fullText = state.selection;
        }
    } catch(error) {
        state.postError('Unexpected Error');
        state.fullText += `\n\nFull Error:\n${error}`;
	}
}