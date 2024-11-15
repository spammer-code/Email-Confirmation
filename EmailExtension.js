const Blocks = require('turbowarp-blocks');  // Import TurboWarp block API

module.exports = {
    blocks: [
        {
            opcode: "sendConfirmationEmail",
            blockType: Blocks.BlockType.COMMAND,
            text: "send confirmation email to [EMAIL] with code [CODE] from [SENDER]",
            arguments: {
                EMAIL: {
                    type: Blocks.ArgumentType.STRING,
                    defaultValue: "example@example.com"
                },
                CODE: {
                    type: Blocks.ArgumentType.STRING,
                    defaultValue: "123456"
                },
                SENDER: {
                    type: Blocks.ArgumentType.STRING,
                    defaultValue: "no-reply@example.com"
                }
            },
            func: async function(args) {
                const email = args.EMAIL;
                const code = args.CODE;
                const sender = args.SENDER;

                // Call backend API to send confirmation email
                try {
                    const response = await fetch('http://localhost:3000/send', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            to: email,
                            code: code,
                            sender: sender,
                        }),
                    });

                    if (response.ok) {
                        console.log("Email sent successfully!");
                    } else {
                        console.error("Failed to send email.");
                    }
                } catch (error) {
                    console.error("Error sending email:", error);
                }
            }
        }
    ]
};
