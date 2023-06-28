define("BalRealtyVisitClassic1Detail", [], function() {
	return {
		entitySchemaName: "BalRealtyVisitClassic1",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			
		]/**SCHEMA_DIFF*/,
		methods: {
			
			//DMITRY CODE 
				init: function() {
				this.callParent(arguments);
				window.console.info("websocket initialized");
				this.subscribeForWebsocketEvents();
			},
			destroy: function() {
				this.callParent(arguments);
				this.unsubscribeForWebsocketEvents();
			},
			subscribeForWebsocketEvents: function() {
				this.Terrasoft.ServerChannel.on(this.Terrasoft.EventName.ON_MESSAGE,this.onWebsocketMessage, this);
				
			},
			unsubscribeForWebsocketEvents: function() {
				this.Terrasoft.ServerChannel.un(this.Terrasoft.EventName.ON_MESSAGE,this.onWebsocketMessage, this);
			},
			
			onWebsocketMessage: function(scope, message) {
				if (!message) {
					return;
				}
				if (!message.Header) {
					return;
				}
				if (message.Header.Sender === "CreateRealtyVisitClassicProcess") {
					window.console.info("websocket read" + JSON.stringify(message));
					this.reloadGridData();
					return;
				}
				else{
					window.console.info("in else");
					return;
				}
				
			}

		}
	};
});
