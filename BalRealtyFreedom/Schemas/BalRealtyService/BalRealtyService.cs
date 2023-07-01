 namespace Terrasoft.Configuration.BalRealtyServiceNamespace
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core;
    using Terrasoft.Web.Common;
    using Terrasoft.Core.Entities;
    using System.Collections.Generic;
    using System.Data;
    using Terrasoft.Common;
    using Newtonsoft.Json;
    using Terrasoft.Core.DB;
	using System.Runtime.Serialization;
	using Terrasoft.Core.Factories;
	 
	[DataContract]
	public class RealtyResponse{
		
			[DataMember(Name = "TotalAmount")]
			public string TotalAmount { get; set; }

			[DataMember(Name = "NoOfRecords")]
			public string NoOfRecords { get; set; }
			
			[DataMember(Name = "BalName")]
			public string BalName { get; set; }
			
			[DataMember(Name = "BalPriceUSD")]
			public string BalPriceUSD { get; set; }
		  
			
	};
	 
	/*[DataContract] 
	public class RealtyResponseList{
			
			private dynamic rr = new List<RealtyResponse>();

			public bool AddRealtyResponse (string TotalAmount, string NoOfRecords)
			{
				 rr.Add(new Book { TotalAmount = TotalAmount, NoOfRecords = NoOfRecords });
				 return true;
			}
			
	}; */

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class BalRealtyService: BaseService
    {

        /* The method that returns the contact ID by the contact name. */
        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,ResponseFormat = WebMessageFormat.Json)]		
        public List<RealtyResponse> GetTotalAmountByTypeandOffer(string RealtyType, string RealtyOffer)
        {
            /* The default result. */
            //var result = "{}";
			var result = new List<RealtyResponse>();
            /* The EntitySchemaQuery instance that accesses the Contact database table. */

            if (string.IsNullOrEmpty(RealtyType) || string.IsNullOrEmpty(RealtyOffer))
            {
                return null;
            }
            var select = new Select(UserConnection)
            .Column(Func.Sum("BalPriceUSD")).As("TotalAmount")
			.Column(Func.Count("BalPriceUSD")).As("NoOfRecords")
			//.Column("BalRealty","BalPriceUSD").As("BalPriceUSD")
			//.Column("BalRealty","BalName").As("BalName")
			//.Column("BalRealtyTypeLookupFreedomUI","Name").As("RealtyType")
			//.Column("BalRealtyOfferTypeFreedomUI","Name").As("RealtyOffer")
            .From("BalRealty")
            .Join(JoinType.Inner, "BalRealtyTypeLookupFreedomUI")
            .On("BalRealty", "BalRealtyFreedomTypeId").IsEqual("BalRealtyTypeLookupFreedomUI", "Id")
            .Join(JoinType.Inner, "BalRealtyOfferTypeFreedomUI")
            .On("BalRealty", "BalRealtyOfferTypeFreedomId").IsEqual("BalRealtyOfferTypeFreedomUI", "Id")
            .Where("BalRealtyTypeLookupFreedomUI", "Name").IsEqual(Column.Parameter(RealtyType))
            .And("BalRealtyOfferTypeFreedomUI", "Name").IsEqual(Column.Parameter(RealtyOffer))

            as Select;
            using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection())
            {
                using (IDataReader dataReader = select.ExecuteReader(dbExecutor))
                {
                    //result = CreateJson(dataReader);
					result = sqlprocessing(dataReader);
                }
            }

            // Return the results.
            return result;
        }
		
		
		private List<RealtyResponse> sqlprocessing (IDataReader dataReader){
		
			var list = new List<RealtyResponse>();
			//var fields = new List<string>();
			while (dataReader.Read())
            {
				RealtyResponse rr = new RealtyResponse();
				rr.TotalAmount = dataReader.GetColumnValue<string>("TotalAmount");
				rr.NoOfRecords = dataReader.GetColumnValue<string>("NoOfRecords");
				//rr.BalPriceUSD = dataReader.GetColumnValue<string>("BalPriceUSD");
				//rr.BalName = dataReader.GetColumnValue<string>("BalName");
				list.Add(rr);
			}
			return list;
		}
		//Generate JSON Response from select query
        private string CreateJson(IDataReader dataReader)
        {
            var list = new List<dynamic>();
            var cnt = dataReader.FieldCount;
            var fields = new List<string>();
            for (int i = 0; i < cnt; i++)
            {
                fields.Add(dataReader.GetName(i));
            }
            while (dataReader.Read())
            {
                dynamic exo = new System.Dynamic.ExpandoObject();
                foreach (var field in fields)
                {
                    ((IDictionary<String, Object>)exo).Add(field, dataReader.GetColumnValue(field));
                }
                list.Add(exo);
            }
            return JsonConvert.SerializeObject(list);
        }
		
		
		//Code by Dmitriy
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
			public decimal GetTotalAmountByTypeId(string realtyTypeId, string realtyOfferTypeId,string entityName, string typeFieldName, string offerTypeFieldName, string priceFieldName)
		{
			if (string.IsNullOrEmpty(realtyTypeId) || string.IsNullOrEmpty(realtyOfferTypeId)
				|| string.IsNullOrEmpty(entityName)|| string.IsNullOrEmpty(typeFieldName)
				|| string.IsNullOrEmpty(offerTypeFieldName)|| string.IsNullOrEmpty(priceFieldName))
			{
				return -1;
			}
			Select select = new Select(UserConnection)
				.Column(Func.Sum(priceFieldName))
				.From(entityName)
				.Where(typeFieldName).IsEqual(Column.Parameter(new Guid(realtyTypeId)))
				.And(offerTypeFieldName).IsEqual(Column.Parameter(new Guid(realtyOfferTypeId)))
				//.Where("BalRealtyFreedomTypeId").IsEqual(Column.Parameter(new Guid(realtyTypeId)))
				//.And("BalRealtyOfferTypeFreedomId").IsEqual(Column.Parameter(new Guid(realtyOfferTypeId)))
				as Select;
			decimal result = select.ExecuteScalar<decimal>();
			return result;
		}

        /* The method that returns the contact ID by the contact name. */
        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
        ResponseFormat = WebMessageFormat.Json)]
        public string GetContactIdByName(string Name) {
            /* The default result. */
            var result = "";
            /* The EntitySchemaQuery instance that accesses the Contact database table. */
            var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "Contact");
            /* Add columns to the query. */
            var colId = esq.AddColumn("Id");
            var colName = esq.AddColumn("Name");
            /* Filter the query data. */
            var esqFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", Name);
            esq.Filters.Add(esqFilter);
            /* Retrieve the query results. */
            var entities = esq.GetEntityCollection(UserConnection);
            /* If the service receives data. */
            if (entities.Count > 0)
            {
                /* Return the "Id" column value of the first query result record. */
                result = entities[0].GetColumnValue(colId.Name).ToString();
                /* You can also use this option:
                result = entities[0].GetTypedColumnValue<string>(colId.Name); */
            }
            // Return the results.
            return result;
        }
		
		//This method return list of realty based on type and offer
		[OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,ResponseFormat = WebMessageFormat.Json)]		
        public List<RealtyResponse> GetRealtyListByTypeandOffer(string RealtyType, string RealtyOffer)
        {
            /* The default result. */
            //var result = "{}";
			var result = new List<RealtyResponse>();
            /* The EntitySchemaQuery instance that accesses the Contact database table. */

            if (string.IsNullOrEmpty(RealtyType) || string.IsNullOrEmpty(RealtyOffer))
            {
                return null;
            }
            var select = new Select(UserConnection)
			.Column("BalRealty","BalPriceUSD").As("BalPriceUSD")
			.Column("BalRealty","BalName").As("BalName")
			//.Column("BalRealtyTypeLookupFreedomUI","Name").As("RealtyType")
			//.Column("BalRealtyOfferTypeFreedomUI","Name").As("RealtyOffer")
            .From("BalRealty")
            .Join(JoinType.Inner, "BalRealtyTypeLookupFreedomUI")
            .On("BalRealty", "BalRealtyFreedomTypeId").IsEqual("BalRealtyTypeLookupFreedomUI", "Id")
            .Join(JoinType.Inner, "BalRealtyOfferTypeFreedomUI")
            .On("BalRealty", "BalRealtyOfferTypeFreedomId").IsEqual("BalRealtyOfferTypeFreedomUI", "Id")
            .Where("BalRealtyTypeLookupFreedomUI", "Name").IsEqual(Column.Parameter(RealtyType))
            .And("BalRealtyOfferTypeFreedomUI", "Name").IsEqual(Column.Parameter(RealtyOffer))

            as Select;
            using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection())
            {
                using (IDataReader dataReader = select.ExecuteReader(dbExecutor))
                {
					while (dataReader.Read())
					{
						RealtyResponse rr = new RealtyResponse();
						//rr.TotalAmount = dataReader.GetColumnValue<string>("TotalAmount");
						//rr.NoOfRecords = dataReader.GetColumnValue<string>("NoOfRecords");
						rr.BalPriceUSD = dataReader.GetColumnValue<string>("BalPriceUSD");
						rr.BalName = dataReader.GetColumnValue<string>("BalName");
						result.Add(rr);
					}
                }
            }

            // Return the results.
            return result;
        }
		
    }
}