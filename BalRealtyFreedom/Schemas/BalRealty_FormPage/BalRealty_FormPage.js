/* jshint esversion: 11 */
define("BalRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "BalRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "b64811dd-3d9f-4df2-beef-9d05d47f8296",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_ykr0q8g",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ykr0q8g_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "bal.pushmebuttonclicked"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BalName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.BalName",
					"control": "$BalName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_gqyku3n",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_2493bdj",
					"labelPosition": "auto",
					"control": "$NumberAttribute_2493bdj"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_bw0fysy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_n3ght3u",
					"labelPosition": "auto",
					"control": "$NumberAttribute_n3ght3u"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_dciloxy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_knqhvmq",
					"labelPosition": "auto",
					"control": "$NumberAttribute_knqhvmq",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_5s8la8j",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_1yeogg0",
					"labelPosition": "auto",
					"control": "$LookupAttribute_1yeogg0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_to0ycnp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_to0ycnp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5s8la8j",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_0txrhfg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_wk8x94q",
					"labelPosition": "auto",
					"control": "$LookupAttribute_wk8x94q",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_cso9lhl",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_cso9lhl_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_0txrhfg",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_000l760",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_z3px23p",
					"labelPosition": "left",
					"control": "$LookupAttribute_z3px23p",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_lf951el",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lf951el_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_000l760",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_xn7yloy",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.BalRealtyOfferTypeFreedomBalOfferTypeCommissionMultiplier",
					"control": "$BalRealtyOfferTypeFreedomBalOfferTypeCommissionMultiplier",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "left",
					"tooltip": "",
					"visible": true,
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_4gdfsel",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_tcqxfjk",
					"labelPosition": "auto",
					"control": "$LookupAttribute_tcqxfjk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_lt0wsr2",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_oflsa0q",
					"labelPosition": "left",
					"control": "$StringAttribute_oflsa0q",
					"multiline": false,
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_gmuf1nk",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_gmuf1nk_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_chod3wj",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_gmuf1nk",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_xa51xme",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_chod3wj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_756ucwq",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_756ucwq_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "BalRealtyVisitFreedom",
							"defaultValues": [
								{
									"attributeName": "BalRealtyParentFreedom",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_xa51xme",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_inpk8bz",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_inpk8bz_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_jj7jhj4DS"
						}
					}
				},
				"parentName": "FlexContainer_xa51xme",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_bwvmnva",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_bwvmnva_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_xa51xme",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_hqs469v",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_hqs469v_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_jj7jhj4"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_bwvmnva",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_0278wa9",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_0278wa9_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "BalRealtyVisitFreedom"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_bwvmnva",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_hbz0fft",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_hbz0fft_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_jj7jhj4"
					]
				},
				"parentName": "FlexContainer_xa51xme",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_3z0rcc2",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_gmuf1nk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_jj7jhj4",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"selectedRows": "$GridDetail_jj7jhj4_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "GridDetail_jj7jhj4_SelectedRows"
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_jj7jhj4",
					"primaryColumnName": "GridDetail_jj7jhj4DS_Id",
					"columns": [
						{
							"id": "fd1c9511-70be-0ad5-af89-8e7936fd4d84",
							"code": "GridDetail_jj7jhj4DS_BalRealtyVisitDateTime",
							"path": "BalRealtyVisitDateTime",
							"caption": "#ResourceString(GridDetail_jj7jhj4DS_BalRealtyVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "8a7aa2ec-3c29-f4b3-25ad-11901c11fda2",
							"code": "GridDetail_jj7jhj4DS_BalRealtyVisitManager",
							"path": "BalRealtyVisitManager",
							"caption": "#ResourceString(GridDetail_jj7jhj4DS_BalRealtyVisitManager)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "b95184aa-7b39-83d7-9088-f23d67313225",
							"code": "GridDetail_jj7jhj4DS_BalRealtyPortentialCustomer",
							"path": "BalRealtyPortentialCustomer",
							"caption": "#ResourceString(GridDetail_jj7jhj4DS_BalRealtyPortentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "c68e566b-c476-861f-cc88-401c1ac2758b",
							"code": "GridDetail_jj7jhj4DS_BalRealtyVisitComments",
							"path": "BalRealtyVisitComments",
							"caption": "#ResourceString(GridDetail_jj7jhj4DS_BalRealtyVisitComments)#",
							"dataValueType": 30
						}
					]
				},
				"parentName": "GridContainer_3z0rcc2",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"BalName": {
					"modelConfig": {
						"path": "PDS.BalName"
					},
					"validators": {
                	/* Bind the custom validator to the attribute. */
                	"CallFieldValidator": {
						"type": "Bal.FieldValidator",
						"params": {
							"invalidName": "test",
							"message": "Invalid name",
							"minvalue": ""
						}
                	}
            	}
				},
				"NumberAttribute_2493bdj": {
					"modelConfig": {
						"path": "PDS.BalPriceUSD"
					},
					"validators": {
                	/* Bind the custom validator to the attribute. */
                	"CallFieldValidator": {
						"type": "Bal.FieldValidator",
						"params": {
							"invalidName": "test",
							"message": "Minimim value must be 100",
							"minvalue": "100"
						}
                	}
					}
				},
				"NumberAttribute_n3ght3u": {
					"modelConfig": {
						"path": "PDS.BalAreaSqft"
					},
					"validators": {
                	/* Bind the custom validator to the attribute. */
                	"CallFieldValidator": {
						"type": "Bal.FieldValidator",
						"params": {
							"invalidName": "test",
							"message": "Minimim value must be 10",
							"minvalue": "10"
						}
                	}
					}
				},
				"LookupAttribute_wk8x94q": {
					"modelConfig": {
						"path": "PDS.BalRealtyFreedomType"
					}
				},
				"LookupAttribute_1yeogg0": {
					"modelConfig": {
						"path": "PDS.BalRealtyOfferTypeFreedom"
					}
				},
				"StringAttribute_oflsa0q": {
					"modelConfig": {
						"path": "PDS.BalRealtCommentsFreedom"
					}
				},
				"LookupAttribute_z3px23p": {
					"modelConfig": {
						"path": "PDS.BalRealtyManagerFreedom"
					}
				},
				"LookupAttribute_tcqxfjk": {
					"modelConfig": {
						"path": "PDS.BalEmployeeTypeHiddenFreedomUI"
					}
				},
				"NumberAttribute_knqhvmq": {
					"modelConfig": {
						"path": "PDS.BalCommissionusdfreedom"
					}
				},
				"BalRealtyOfferTypeFreedomBalOfferTypeCommissionMultiplier": {
					"modelConfig": {
						"path": "PDS.BalRealtyOfferTypeFreedomBalOfferTypeCommissionMultiplier"
					}
				},
				"GridDetail_jj7jhj4": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_jj7jhj4DS",
						"sortingConfig": {
							"default": [
								{
									"direction": "asc",
									"columnName": "BalRealtyVisitDateTime"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_jj7jhj4DS_BalRealtyVisitDateTime": {
								"modelConfig": {
									"path": "GridDetail_jj7jhj4DS.BalRealtyVisitDateTime"
								}
							},
							"GridDetail_jj7jhj4DS_BalRealtyVisitManager": {
								"modelConfig": {
									"path": "GridDetail_jj7jhj4DS.BalRealtyVisitManager"
								}
							},
							"GridDetail_jj7jhj4DS_BalRealtyPortentialCustomer": {
								"modelConfig": {
									"path": "GridDetail_jj7jhj4DS.BalRealtyPortentialCustomer"
								}
							},
							"GridDetail_jj7jhj4DS_BalRealtyVisitComments": {
								"modelConfig": {
									"path": "GridDetail_jj7jhj4DS.BalRealtyVisitComments"
								}
							},
							"GridDetail_jj7jhj4DS_Id": {
								"modelConfig": {
									"path": "GridDetail_jj7jhj4DS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "BalRealty",
						"attributes": {
							"BalRealtyOfferTypeFreedomBalOfferTypeCommissionMultiplier": {
								"path": "BalRealtyOfferTypeFreedom.BalOfferTypeCommissionMultiplier",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"GridDetail_jj7jhj4DS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "BalRealtyVisitFreedom",
						"attributes": {
							"BalRealtyVisitDateTime": {
								"path": "BalRealtyVisitDateTime"
							},
							"BalRealtyVisitManager": {
								"path": "BalRealtyVisitManager"
							},
							"BalRealtyPortentialCustomer": {
								"path": "BalRealtyPortentialCustomer"
							},
							"BalRealtyVisitComments": {
								"path": "BalRealtyVisitComments"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_jj7jhj4DS": [
					{
						"attributePath": "BalRealtyParentFreedom",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
		{
			request: "bal.pushmebuttonclicked",
			/* The custom implementation of the system query handler. */
			handler: async (request, next) => {
				
				//request.$context.BalRealtCommentsFreedom = await request.$context.BalName;
				Terrasoft.showInformation("Button Clicked" + await request.$context.BalName);
				/* If the UsrName field changes, take the following steps. */
				this.console.log("button clicked");
            /* Call the next handler if it exists and return its result. */
            return next?.handle(request);
        	}		
    	},
		{
			request: "crt.HandleViewModelAttributeChangeRequest",
			/* The custom implementation of the system query handler. */
			handler: async (request, next) => {
				/* If the UsrName field changes, take the following steps. */
				if (request.attributeName === 'NumberAttribute_2493bdj' || request.attributeName === 'BalRealtyOfferTypeFreedomBalOfferTypeCommissionMultiplier') {
					/* Check whether the old UsrName field value matches the UsrDescription field value. */
					//const isFieldsShouldBeSynchronized = request.oldValue ===   await request.$context.BalRealtCommentsFreedom;
					//Terrasoft.showErrorMessage(isFieldsShouldBeSynchronized);
											/* Assign the new UsrName field value to the UsrDescription field. */
						//request.$context.BalRealtCommentsFreedom = await request.$context.BalName;
					//request.$context.BalPriceUSD = (await request.$context.BalPriceUSD) + 1;
					// commission update
					request.$context.NumberAttribute_knqhvmq = (await request.$context.NumberAttribute_2493bdj) * (await request.$context.BalRealtyOfferTypeFreedomBalOfferTypeCommissionMultiplier);
					//Terrasoft.showInformation(await request.$context.NumberAttribute_knqhvmq);
					this.console.log('updated value' + await request.$context.NumberAttribute_2493bdj +'*'+ await request.$context.BalRealtyOfferTypeFreedomBalOfferTypeCommissionMultiplier + '=' + await request.$context.NumberAttribute_knqhvmq);
					
				}
				/* Call the next handler if it exists and return its result. */
				return next?.handle(request);
        }
    }
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"Bal.FieldValidator": {
				"validator": function (config) {
					return function (control) {
						var result;
						if( control.value !== config.invalidName)
						{
							result = null;
						}
						if (control.value === config.invalidName){
							result ={
								"Bal.FieldValidator": { message: config.message }
							};
						}
						if (config.minvalue !== "" & config.minvalue > control.value ){
							result ={
								"Bal.FieldValidator": { message: config.message }
							};
						}
						else{
							result = null;
						}
						return (result);
					};
				},
				"params": [
					{
						"name": "invalidName"
					},
					{
						"name": "message"
					},
					{
						"name": "minvalue"
					}
				],
				"async": false
    		}
		}/**SCHEMA_VALIDATORS*/
	};
});