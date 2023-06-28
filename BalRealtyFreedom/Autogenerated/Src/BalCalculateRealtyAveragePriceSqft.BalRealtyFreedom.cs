namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: BalCalculateRealtyAveragePriceSqftMethodsWrapper

	/// <exclude/>
	public class BalCalculateRealtyAveragePriceSqftMethodsWrapper : ProcessModel
	{

		public BalCalculateRealtyAveragePriceSqftMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "BalRealty");
			var priceColumn = esq.AddColumn("BalPriceUSD");  // select UsrPriceUSD as UsrPriceUSD, UsrArea as UsrArea from UsrRealtyClassic where ...
			var areaColumn = esq.AddColumn("BalAreaSqft");
			
			Guid typeId = Get<Guid>("RealtyTypeIdParameter2");
			Guid offerTypeId = Get<Guid>("RealtyTypeOfferIdParameter3");
			
			var typeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "BalRealtyFreedomType", typeId);
			esq.Filters.Add(typeFilter);
			
			var offerTypeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "BalRealtyOfferTypeFreedom", offerTypeId);
			esq.Filters.Add(offerTypeFilter); // ... WHERE UsrTypeId = :typeId AND UsrOfferTypeId = :offerTypeId
			
			string sqlText = esq.GetSelectQuery(UserConnection).GetSqlText();
			Set("SqlTextParameter", sqlText);
			
			var entityCollection = esq.GetEntityCollection(UserConnection);
			decimal totalUSD = 0;
			decimal totalArea = 0;
			
			foreach(var entity in entityCollection) {
				decimal price = entity.GetTypedColumnValue<decimal>(priceColumn.Name);
				totalUSD += price;
				decimal area = entity.GetTypedColumnValue<decimal>(areaColumn.Name);
				totalArea += area;
			}
			Set("TotalUSDParameter", totalUSD);
			Set("TotalAreaParameter", totalArea);
			Set("AveragePriceUSDParameter", totalUSD/totalArea);
			
			return true;
		}

		#endregion

	}

	#endregion

}

