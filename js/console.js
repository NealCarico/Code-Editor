/**
 * The console html element to display the console output in
 */
const consoleHTML = document.getElementById('console-text');

/**
 * Redefining console.log to give us all the output when running in eval
 */
console.oldLog = console.log;
console.inEval = false;
const capture = [];
console.log = function(value) {
  if (this.inEval) capture.push(value);
  else console.oldLog(value);
}

/**
 * Evaluate the code and give the output
 * @param {String} code The code to execute
 * @returns {Object} Output, logs and error
 */
function evaluate(code) {
  let response, logs, error = false;
  console.inEval = true;
  try {
    response = eval(code);
  } catch (err) {
    error = true;
    response = err;
  }
  console.inEval = false;
  logs = capture.slice();
  capture.length = 0;

  return { response, logs, error };
}

/**
 * Run the code and update the console with the output
 */
function runCode() {
  const code = editor.getValue();
  if (!code) return;
  let { response, logs, error } = evaluate(code);

  if (error) response = '<span class="error">' + response + '</span>';
  if (logs.length && response) response = logs.join('\n') + '\n' + response;
  else if (logs.length) response = logs.join('\n');

  consoleHTML.innerHTML += `<pre class="log">${response}\n</pre>`;
}

/**
 * Clear the console
 */
function clearConsole() {
  consoleHTML.innerHTML = '';
}
