define("BalRealtyVisitClassic1Page", [], function() {
	return {
		entitySchemaName: "BalRealtyVisitClassic1",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{				
				"operation": "insert",
				"name": "BalRealtyVisitCommentsClassic4507d3f4-ac2f-405a-a00f-3c57832621c8",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "BalRealtyVisitCommentsClassic",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BalRealtyVisitDateTimeClassic4689eb0b-cbb6-4298-b901-daaf199e545b",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "BalRealtyVisitDateTimeClassic",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BalRealtyVisitManagerClassicc4eb1481-fafb-4cc4-b35d-d4fd50b49854",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "BalRealtyVisitManagerClassic",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_DIFF*/
	};
});
