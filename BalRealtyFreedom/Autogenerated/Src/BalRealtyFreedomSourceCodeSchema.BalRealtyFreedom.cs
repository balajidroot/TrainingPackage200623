namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: BalRealtyFreedomSourceCodeSchema

	/// <exclude/>
	public class BalRealtyFreedomSourceCodeSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public BalRealtyFreedomSourceCodeSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public BalRealtyFreedomSourceCodeSchema(BalRealtyFreedomSourceCodeSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6c981be3-6f20-4546-bb0a-b625bfab6aac");
			Name = "BalRealtyFreedomSourceCode";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("eac08b0b-0f5d-4739-80e4-b08f8d8498ff");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,220,48,16,189,7,242,31,6,211,131,13,139,72,174,77,27,168,183,155,178,16,218,18,123,115,41,61,104,229,89,71,69,31,70,146,55,221,150,252,247,142,44,47,113,188,41,100,46,178,70,239,189,153,55,30,195,53,250,142,11,132,26,157,227,222,238,2,91,90,179,147,109,239,120,144,214,156,159,253,61,63,3,138,222,75,211,66,117,240,1,245,213,52,53,37,106,109,205,127,31,29,178,149,9,50,72,244,111,193,176,213,30,77,56,66,127,12,233,195,144,187,149,212,132,65,151,87,226,1,53,255,74,30,224,35,100,27,239,238,144,171,112,200,138,159,137,212,245,91,37,5,8,197,189,135,244,246,138,12,188,135,146,123,124,229,37,169,140,3,152,8,218,61,181,44,27,132,189,149,13,124,51,107,227,209,5,242,146,219,237,47,20,1,60,154,6,221,2,146,102,137,59,50,54,40,127,114,173,7,44,158,21,39,226,49,182,212,8,155,10,30,149,176,184,122,137,76,210,224,6,87,100,63,79,137,34,17,102,224,6,133,212,92,65,231,164,136,179,74,44,246,5,67,125,232,176,89,90,213,107,115,207,85,143,31,70,232,117,158,149,92,125,143,248,77,245,57,155,87,151,59,200,147,216,53,92,94,28,163,120,9,154,121,139,129,108,237,151,220,8,84,216,80,31,193,245,72,202,167,56,31,92,92,13,90,78,207,91,172,81,119,138,135,216,185,193,71,184,181,130,43,249,135,111,21,86,3,46,31,253,108,104,106,180,189,134,126,1,173,46,187,67,111,123,39,8,100,29,169,44,78,203,196,136,62,211,110,220,56,196,198,234,106,32,45,109,131,217,2,178,147,98,158,13,131,90,251,218,218,82,182,233,150,21,172,182,99,51,197,27,28,145,147,148,96,55,214,105,30,242,153,83,42,124,201,46,202,119,39,131,143,17,30,156,125,28,38,177,250,45,176,139,94,143,252,57,252,233,249,58,126,210,241,244,15,73,39,172,188,246,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("f2c753be-ed0b-0e05-bf80-4f6a7f2e85e5"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("eac08b0b-0f5d-4739-80e4-b08f8d8498ff"),
				CreatedInSchemaUId = new Guid("6c981be3-6f20-4546-bb0a-b625bfab6aac"),
				ModifiedInSchemaUId = new Guid("6c981be3-6f20-4546-bb0a-b625bfab6aac")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6c981be3-6f20-4546-bb0a-b625bfab6aac"));
		}

		#endregion

	}

	#endregion

}

