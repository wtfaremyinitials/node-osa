var osa = require('../lib/osa');


function promptForHandle(service, defaultHandle) {
  var app = Application.currentApplication();
  var prompt = 'What is your ' + service + ' handle?';

  var promptArguments = {
    withTitle: 'Hello, world!',
    defaultAnswer: defaultHandle
  };
  var result;

  console.log('This was logged from osa');

  app.includeStandardAdditions = true;

  result = app.displayDialog(prompt, promptArguments);

  return {service: service, text: result.textReturned};
}

var success = function(result, log) {
  console.log(log);
  console.log('Your ' + result.service + ' handle is ' + result.text);
};

osa(promptForHandle, 'twitter', '@wtfrmyinitials').then(success).catch(console.error);
