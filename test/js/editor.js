const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

editor.setValue(`function foo() {
console.log('bar');
}
foo();
`, -1)
