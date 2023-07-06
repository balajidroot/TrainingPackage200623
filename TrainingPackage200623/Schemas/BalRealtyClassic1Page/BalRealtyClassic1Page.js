define("BalRealtyClassic1Page", ["ServiceHelper"], function(ServiceHelper) {
	return {
		entitySchemaName: "BalRealtyClassic",
		messages: {
            /* Message name. */
            "NewMessage": {
                /* Broadcast message. */
                "mode": Terrasoft.MessageMode.BROADCAST,
                /* The message direction is subscription. */
                "direction": Terrasoft.MessageDirectionType.SUBSCRIBE
            }
        },
		attributes: {
			
			"BalRealtyOfferTypeClassic": {
				lookupListConfig: {
						/* Additional columns. */
						columns: ["BalCommissionMultiplierClassic"]
					}
				},
			 "BalCommissionUSDClassic": {
                /* The data type of the view model column. */
                dataValueType: Terrasoft.DataValueType.FLOAT,
                /* The array of configuration objects that define the [UsrBalance] column dependencies. */
                dependencies: [
                    {
                        /* The [UsrBalance] column value depends on the [Amount] and [PaymentAmount] column values. */
                        columns: ["BalPriceUSDClassic", "BalRealtyOfferTypeClassic"],
                        /* The handler method that is called when the [Amount] or [PaymentAmount] column value changes. */
                        methodName: "calculateCommissionAmount"
                    }
                ]
            }
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "BalRealtyClassicFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "BalRealtyClassic"
				}
			},
			"BalSchema77553282Detail1333f461": {
				"schemaName": "BalRealtyVisitClassic1Detail",
				"entitySchemaName": "BalRealtyVisitClassic1",
				"filter": {
					"detailColumn": "BalRealtyParentClassic",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			
			onEntityInitialized: function() {
                /* Call the parent implementation of the method. */
                this.callParent(arguments);
                /* Call the handler method that calculates the [UsrBalance] column value. */
                //this.onPushMeButtonClick();
				this.calculateCommissionAmount();
            },
			
			onPushMeButtonEnable:function(){
				return true;
			},
			
			onPushMeButtonClick: function(){
				//todo
				
				var price = this.get("BalPriceUSDClassic");
				this.set("BalPriceUSDClassic",price*2);
				this.console.log("button clicked" + price);
				//Terrasoft.showInformation("price doubled " + this.get("BalPriceUSDClassic"));
			},
			
			
			//Get total amount webservice
			onGetTotalAmountButtonClick: function(){
			var typeObject = this.get("BalRealtyTypeClassic1");
				this.console.log(JSON.stringify(typeObject));
				if (!typeObject) {
					return;
				}
				var typeId = typeObject.value;
				var offerTypeObject = this.get("BalRealtyOfferTypeClassic");
				if (!offerTypeObject) {
					return;
				}
				var offerTypeId = offerTypeObject.value;
				var params = {
					realtyTypeId: typeId,
					realtyOfferTypeId: offerTypeId,
					entityName: "BalRealtyClassic",
					typeFieldName: "BalRealtyTypeClassic1Id",
					offerTypeFieldName: "BalRealtyOfferTypeClassicId",
					priceFieldName: "BalPriceUSDClassic",
				};				
				ServiceHelper.callService("BalRealtyService", "GetTotalAmountByTypeId", this.getWebServiceResult, params, this);
				this.console.log("webservice call made");
			},
			getWebServiceResult: function(response, success) {
				this.console.log("response classic" + JSON.stringify(response));
				this.Terrasoft.showInformation("Total amount by typeId: " + response.GetTotalAmountByTypeIdResult);
			},
						
			//Calcualte commission based on field change.
			calculateCommissionAmount: function(){
				//todo				
				var OfferTypeObject = this.get("BalRealtyOfferTypeClassic");
				var offermultiplier = OfferTypeObject? OfferTypeObject.BalCommissionMultiplierClassic: 0;
				var price = (this.get("BalPriceUSDClassic")) === undefined? 0 : this.get("BalPriceUSDClassic");
				this.set("BalCommissionUSDClassic", price * (offermultiplier=== undefined? 0: offermultiplier) );
				this.set("BalRealtyCommissionMultiplierClassic",(offermultiplier=== undefined? 0: offermultiplier));
				this.console.log("commission amount" + this.get("BalCommissionUSDClassic"));
			},
			
			minvaluevalidation: function(value, column){
				var msg = "";
				this.console.log("column"+ column);
				this.console.log("value"+ value);
				if(value > 0 ){
					msg = "";
				}
				else{
					msg = this.get("Resources.Strings.BalPostivevaluemessage");
				}
				
				this.console.log(msg);
				
				return {
					invalidMessage: msg
				};							
			},
			setValidationConfig: function() {
				/* Call the setValidationConfig method of the parent schema. */
				this.callParent(arguments);
				/* Set up validation for the [Email] column. */
				this.addColumnValidator("BalPriceUSDClassic", this.minvaluevalidation);
				this.addColumnValidator("BalRealtyAreaSqftClassic", this.minvaluevalidation);
			},
			
			
			 /* Initialize the schema. */
            init: function() {
                /* Call the parent method. */
                this.callParent(arguments);
                /* Subscribe to the NewMessage message. */
                this.sandbox.subscribe("NewMessage", this.onNewMessage, this);
            },
            /* Handle the reception event of the NewMessage message. */
            onNewMessage: function(args) {
                /* Save the message body to local variables. */
                var birthday = args.birthday;
                var name = args.name;
                /* Display the body in the browser console. */
                //window.console.info("Received message: NewMessage. Name: " + name + "; birthday: " + birthday);
				window.console.info("Received message in Realty Page: NewMessage" + JSON.stringify(args));
            },
			
			//to validate the no of visits for an apartment.
			asyncValidate: function(callback, scope) {
				this.console.log("Entered async");
				this.callParent([
						function(response) {
					if (!this.validateResponse(response)) {
						return;
					}
					this.validateRealtyData(function(response) {
						if (!this.validateResponse(response)) {
							return;
						}
						callback.call(scope, response);
					}, this);
				}, this]);
			},
			validateRealtyData: function(callback, scope) {
				this.console.log("Entered validateRealtyData");
				var typeObject = this.get("BalRealtyTypeClassic1");
				var offerTypeObject = this.get("BalRealtyOfferTypeClassic");
				var RealtyId = this.get("Id");
				var RealtyComments = this.get("BalRealtyCommentClassic");
				
				if (!typeObject || !offerTypeObject) {
					if (callback) {
						callback.call(scope, {
							success: true
						});
					}
					return;
				}
				var typeId = typeObject.value;
				var offerTypeId = offerTypeObject.value;
				// create query for server side
				var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "BalRealtyVisitClassic1"
				});
				esq.addAggregationSchemaColumn("Id", Terrasoft.AggregationType.COUNT, "NoofVisits");
				var visitRealtyFilter = esq.createColumnFilterWithParameter(this.Terrasoft.ComparisonType.EQUAL,
							"BalRealtyParentClassic", RealtyId);
				esq.filters.addItem(visitRealtyFilter);
				//var offerTypeFilter = esq.createColumnFilterWithParameter(this.Terrasoft.ComparisonType.EQUAL,							"UsrOfferType", offerTypeId);
				//esq.filters.addItem(offerTypeFilter);
				
				esq.getEntityCollection(function(response) {
					if (response.success && response.collection) {
						var visitcount = 0;
						var items = response.collection.getItems();
						if (items.length > 0) {
							visitcount = items[0].get("NoofVisits");
						}
						this.console.log("NoofVisits: "+visitcount);
						var max = 25;
						if (visitcount > max &&  RealtyComments == "") {
							if (callback) {
								callback.call(this, {
									success: false,
									message: "You cannot save, fill the comments reason for high no of visits" + visitcount + " is bigger than " + max
								});
							}
						} else
						if (callback) {
							this.console.log("Else part triggered");
							callback.call(scope, {
								success: true
							});
						}
					}
				}, this);
			}
			
			
			
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "BalPushmeButtonClassic",
				"values": {
					"itemType": 5,
					"className": "Terrasoft.Button",
					"style": "red",
					"caption": {
						"bindTo": "Resources.Strings.BalPushmeButtonClassic"
					},
					"click": {
						"bindTo": "onPushMeButtonClick"
					},
					"enabled": {
						"bindTo": "onPushMeButtonEnable"
					},
					"visible":true,
					"layout": {
						"column": 2,
						"row": 7,
						"colSpan": 12,
						"rowSpan": 1,
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "BalGetTotalAmountButtonClassic",
				"values": {
					"itemType": 5,
					"className": "Terrasoft.Button",
					"style": "green",
					"caption": {
						"bindTo": "Resources.Strings.BalGetTotalAmountButtonClassic"
					},
					"click": {
						"bindTo": "onGetTotalAmountButtonClick"
					},
					"enabled": {
						"bindTo": "onPushMeButtonEnable"
					},
					"layout": {
						"column": 2,
						"row": 6,
						"colSpan": 18,
						"rowspan":1
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "BalName0af9c7b9-1e91-4643-a7ef-e231340e33af",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "BalName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT29300ddf-9f98-4d26-a29c-3b50fde36129",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "BalPriceUSDClassic",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOATa9784ac1-03f7-4e63-b7d7-f38c3a151aa2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "BalRealtyAreaSqftClassic",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FLOATbbc36ffc-7be1-4f26-ba60-41750497c654",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "BalCommissionUSDClassic",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPf1fb8e2d-b8ac-4508-ac28-c0cf27a52fe7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "BalRealtyTypeClassic1",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP2ffceaaa-c4e5-45e6-aec2-5edc247a49eb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "BalRealtyOfferTypeClassic",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING10abd965-9fd2-4580-ae90-dbd879e82486",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "BalRealtyCommentClassic",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP0f7b7dfc-506b-4f6a-93e9-a2eb53f97ca6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "BalRealtyManagerClassic",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "BalNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "insert",
				"name": "BalRealtyVisitClassicTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.BalRealtyVisitClassicTabLabelTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			/*{
				"operation": "insert",
				"name": "BalAutoVisitsButtonClassic",
				"values": {
					"itemType": 5,
					"className": "Terrasoft.Button",
					"style": "green",
					"caption": {
						"bindTo": "Resources.Strings.BalAutoVisitsButtonCaption"
					},
					"click": {
						"bindTo": ""
					},
					"enabled": {
						"bindTo": ""
					}
				},
				"parentName": "BalRealtyVisitClassicTabLabel",
				"propertyName": "items",
				"index": 0
			},*/
			{
				"operation": "insert",
				"name": "BalSchema77553282Detail1333f461",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "BalRealtyVisitClassicTabLabel",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
