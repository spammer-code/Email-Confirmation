TurboWarp.registerExtension('emailConfirmation', (blocks) => {
    blocks.addBlock({
        opcode: 'sendConfirmationEmail',
        blockType: 'command',
        text: 'send confirmation email to [EMAIL] with code [CODE] from [SENDER]',
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
        callback: function (args) {
            const { EMAIL, CODE, SENDER } = args;
            console.log(`Sending email to: ${EMAIL} with code ${CODE} from ${SENDER}`);
            // Add email simulation or actual API logic here
        }
    });
});
