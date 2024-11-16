TurboWarp.registerExtension('emailConfirmation', {
blocks: [
{
opcode: 'sendConfirmationEmail',
blockType: 'command',
text: 'send confirmation email to [EMAIL] with code
[CODE] from [SENDER]',
arguments: {
EMAIL: {
type: 'string',
defaultValue: 'example@example.com'
},
CODE: {
type: 'string',
defaultValue: '123456'
},
SENDER: {
type: 'string',
defaultValue: 'no-reply@example.com'
}
},
func: function(args) {
console.log(`Sending confirmation email to: ${args.EMAIL}`);
console.log(`Code: ${args.CODE}`);
console.log(`Sender: ${args.SENDER}`);
// Actual email-sending logic would go here (but it's a simulation)
}
}
]
});
