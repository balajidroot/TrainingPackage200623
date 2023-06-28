 define("ClientMessageBridge", ["ConfigurationConstants"], function(ConfigurationConstants) {
    return {
        /* Messages. */
        messages: {
            /* Message name. */
            "NewMessage": {
                /* Broadcast message. */
                "mode": Terrasoft.MessageMode.BROADCAST,
                /* The message direction is publishing. */
                "direction": Terrasoft.MessageDirectionType.PUBLISH
            },
        },
        /* Methods. */
        methods: {
            /* Initialize the schema. */
            init: function() {
                /* Call the parent method. */
                this.callParent(arguments);
                /* Add a new configuration object to the collection of configuration objects. */
                this.addMessageConfig({
                    /* The name of the message received via WebSocket. */
                    sender: "NewMessage",
                    /* The name of the WebSocket message sent in Creatio via sandbox. */
                    messageName: "NewMessage"
                });
            },
            /* Method executed after the message is published. */
            afterPublishMessage: function(
                /* The name of the message used to send the message. */
                sandboxMessageName,
                /* Message body. */
                webSocketBody,
                /* Result of sending the message. */
                result,
                /* Configuration object that sends the message. */
                publishConfig) {
                /* Verify that the message matches the message added to the configuration object. */
                if (sandboxMessageName === "NewMessage") {
                    /* Save the body to local variables. */
                    var birthday = webSocketBody.birthday;
                    var name = webSocketBody.name;
                    /* Display the body in the browser console. */
                    window.console.info("Published message: " + sandboxMessageName +
                        ". Name: " + name +
                        "; birthday: " + birthday);
					window.console.info("JSON: "+  JSON.stringify(webSocketBody));
                }
            }
        }
    };
});    