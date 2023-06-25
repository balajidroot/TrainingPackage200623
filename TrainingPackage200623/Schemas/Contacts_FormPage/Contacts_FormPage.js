define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Dear",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "Language",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "AddressList",
				"values": {
					"selectedRows": "$AddressList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "AddressList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CareerList",
				"values": {
					"selectedRows": "$CareerList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "CareerList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "RecommendedProductList",
				"values": {
					"selectedRows": "$RecommendedProductList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "RecommendedProductList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadList",
				"values": {
					"selectedRows": "$LeadList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "LeadList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityList",
				"values": {
					"selectedRows": "$OpportunityList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "OpportunityList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OrderList",
				"values": {
					"selectedRows": "$OrderList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "OrderList_SelectedRows"
					}
				}
			},
			{
				"operation": "insert",
				"name": "Input_n19v1v4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_7y9oxlj",
					"labelPosition": "auto",
					"control": "$StringAttribute_7y9oxlj",
					"multiline": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Input_hl97ouu",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_tymdj1d",
					"labelPosition": "auto",
					"control": "$StringAttribute_tymdj1d"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"StringAttribute_tymdj1d": {
					"modelConfig": {
						"path": "PDS.BalColumn5"
					}
				},
				"StringAttribute_7y9oxlj": {
					"modelConfig": {
						"path": "PDS.BalWebsiteCode"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});