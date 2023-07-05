define("BalRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_BalName",
							"caption": "#ResourceString(PDS_BalName)#",
							"dataValueType": 1
						},
						{
							"id": "40567cf5-8614-43c5-491d-20b5dc6f7858",
							"code": "PDS_BalPriceUSD",
							"path": "BalPriceUSD",
							"caption": "#ResourceString(PDS_BalPriceUSD)#",
							"dataValueType": 32
						},
						{
							"id": "79a83f39-e03c-0815-4768-22a18212378c",
							"code": "PDS_BalAreaSqft",
							"path": "BalAreaSqft",
							"caption": "#ResourceString(PDS_BalAreaSqft)#",
							"dataValueType": 32
						},
						{
							"id": "55497f1a-da80-c8ca-9c24-ee6690108edf",
							"code": "PDS_BalRealtyFreedomType",
							"path": "BalRealtyFreedomType",
							"caption": "#ResourceString(PDS_BalRealtyFreedomType)#",
							"dataValueType": 10,
							"referenceSchemaName": "BalRealtyTypeLookupFreedomUI"
						},
						{
							"id": "4c0c1ed4-7145-d139-3384-5ebb51852c10",
							"code": "PDS_BalRealtyOfferTypeFreedom",
							"path": "BalRealtyOfferTypeFreedom",
							"caption": "#ResourceString(PDS_BalRealtyOfferTypeFreedom)#",
							"dataValueType": 10,
							"referenceSchemaName": "BalRealtyOfferTypeFreedomUI"
						},
						{
							"id": "a3d2564c-dd85-6edc-ca19-abad0a8dfde0",
							"code": "PDS_BalRealtCommentsFreedom",
							"path": "BalRealtCommentsFreedom",
							"caption": "#ResourceString(PDS_BalRealtCommentsFreedom)#",
							"dataValueType": 28
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "effd0688-f4ea-8312-db54-1d052558f3d8",
							"code": "PDS_BalRealtyManagerFreedom",
							"path": "BalRealtyManagerFreedom",
							"caption": "#ResourceString(PDS_BalRealtyManagerFreedom)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "3cb0957e-8ab0-8db6-0ff8-fc098132ef14",
							"code": "PDS_BalCommissionusdfreedom",
							"path": "BalCommissionusdfreedom",
							"caption": "#ResourceString(PDS_BalCommissionusdfreedom)#",
							"dataValueType": 32
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"selectedRows": "$DataTable_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "DataTable_SelectedRows"
					}
				}
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_caption)#",
					"folderTree": "FolderTree"
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RightFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "none",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"targetAttributes": [
						"Items"
					]
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButtonCaption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "PDS"
						}
					},
					"iconPosition": "only-icon",
					"icon": "reload-button-icon",
					"clickMode": "default"
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "BalRealty",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					]
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Items": {
					"viewModelConfig": {
						"attributes": {
							"PDS_BalName": {
								"modelConfig": {
									"path": "PDS.BalName"
								}
							},
							"PDS_BalPriceUSD": {
								"modelConfig": {
									"path": "PDS.BalPriceUSD"
								}
							},
							"PDS_BalAreaSqft": {
								"modelConfig": {
									"path": "PDS.BalAreaSqft"
								}
							},
							"PDS_BalRealtyFreedomType": {
								"modelConfig": {
									"path": "PDS.BalRealtyFreedomType"
								}
							},
							"PDS_BalRealtyOfferTypeFreedom": {
								"modelConfig": {
									"path": "PDS.BalRealtyOfferTypeFreedom"
								}
							},
							"PDS_BalRealtCommentsFreedom": {
								"modelConfig": {
									"path": "PDS.BalRealtCommentsFreedom"
								}
							},
							"PDS_CreatedOn": {
								"modelConfig": {
									"path": "PDS.CreatedOn"
								}
							},
							"PDS_BalRealtyManagerFreedom": {
								"modelConfig": {
									"path": "PDS.BalRealtyManagerFreedom"
								}
							},
							"PDS_CreatedBy": {
								"modelConfig": {
									"path": "PDS.CreatedBy"
								}
							},
							"PDS_BalCommissionusdfreedom": {
								"modelConfig": {
									"path": "PDS.BalCommissionusdfreedom"
								}
							},
							"PDS_Id": {
								"modelConfig": {
									"path": "PDS.Id"
								}
							}
						}
					},
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting"
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							}
						]
					}
				},
				"ItemsSorting": {},
				"FolderTree_visible": {
					"value": false
				},
				"FolderTree_items": {
					"isCollection": true,
					"viewModelConfig": {
						"attributes": {
							"Id": {
								"modelConfig": {
									"path": "FolderTree_items_DS.Id"
								}
							},
							"Name": {
								"modelConfig": {
									"path": "FolderTree_items_DS.Name"
								}
							},
							"ParentId": {
								"modelConfig": {
									"path": "FolderTree_items_DS.Parent.Id"
								}
							},
							"FilterData": {
								"modelConfig": {
									"path": "FolderTree_items_DS.FilterData"
								}
							}
						}
					},
					"modelConfig": {
						"path": "FolderTree_items_DS",
						"filterAttributes": [
							{
								"name": "FolderTree_items_DS_filter",
								"loadOnChange": true
							}
						]
					},
					"embeddedModel": {
						"name": "FolderTree_items_DS",
						"config": {
							"type": "crt.EntityDataSource",
							"config": {
								"entitySchemaName": "FolderTree"
							}
						}
					}
				},
				"FolderTree_active_folder_id": {},
				"FolderTree_active_folder_name": {},
				"FolderTree_active_folder_filter": {
					"value": {}
				},
				"FolderTree_items_DS_filter": {
					"value": {
						"isEnabled": true,
						"trimDateTimeParameterToDate": false,
						"filterType": 6,
						"logicalOperation": 0,
						"items": {
							"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
								"isEnabled": true,
								"trimDateTimeParameterToDate": false,
								"filterType": 1,
								"comparisonType": 3,
								"leftExpression": {
									"expressionType": 0,
									"columnPath": "EntitySchemaName"
								},
								"rightExpression": {
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "BalRealty"
									}
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
					"hiddenInPageDesigner": true,
					"config": {
						"entitySchemaName": "BalRealty",
						"attributes": {
							"BalName": {
								"path": "BalName"
							},
							"BalPriceUSD": {
								"path": "BalPriceUSD"
							},
							"BalAreaSqft": {
								"path": "BalAreaSqft"
							},
							"BalRealtyFreedomType": {
								"path": "BalRealtyFreedomType"
							},
							"BalRealtyOfferTypeFreedom": {
								"path": "BalRealtyOfferTypeFreedom"
							},
							"BalRealtCommentsFreedom": {
								"path": "BalRealtCommentsFreedom"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							},
							"BalRealtyManagerFreedom": {
								"path": "BalRealtyManagerFreedom"
							},
							"CreatedBy": {
								"path": "CreatedBy"
							},
							"BalCommissionusdfreedom": {
								"path": "BalCommissionusdfreedom"
							}
						}
					},
					"scope": "viewElement"
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});