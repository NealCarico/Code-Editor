const editor = ace.edit("editor");
editor.setTheme("ace/theme/material");
editor.session.setMode("ace/mode/javascript");

editor.setValue(`function foo() {
    console.log('You ran the foo function!');
    return 'bar';
}

const number = 5;
if (!number) throw new Error('Number must be provided!');
console.error(\`\${number} is a number!\`);

const info = {
    infoStuff: 'correct',
    infoStufferino: {
        infoStuff: 'correct'
    }
}

async function test(args, moreArguments) {
    const response = await doAsyncStuff(arguments, moreArguments);
    response(number).then(resp => console.log(resp)).catch(console.error);
}
`, -1)
