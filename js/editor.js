// Temporary code to display
const code = `function log() {
    console.log('All output we log will show up in the console!');
    return 'Any output we try to call as last will also show up';
}
log();
`

/**
 * Display code in the editor
 * @param {String} code The code to display
 */
function displayCode(code) {
  editor.setValue(code, -1);
}
displayCode(code);
