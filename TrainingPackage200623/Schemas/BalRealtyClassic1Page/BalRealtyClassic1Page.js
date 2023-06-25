define("BalRealtyClassic1Page", [], function() {
	return {
		entitySchemaName: "BalRealtyClassic",
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
			
			calculateCommissionAmount: function(){
				//todo				
				var OfferTypeObject = this.get("BalRealtyOfferTypeClassic");
				var offermultiplier = OfferTypeObject? OfferTypeObject.BalCommissionMultiplierClassic: 0;
				this.set("BalCommissionUSDClassic",this.get("BalPriceUSDClassic")* (offermultiplier=== undefined? 0: offermultiplier) );
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
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "BalPushmeButtonClassic",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.BalPushmeButtonClassic"
					},
					"click": {
						"bindTo": "onPushMeButtonClick"
					},
					"enabled": {
						"bindTo": "onPushMeButtonEnable"
					},
					"layout": {
						"column": 1,
						"row": 6,
						"colSpan": 1
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
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
			}
		]/**SCHEMA_DIFF*/
	};
});
