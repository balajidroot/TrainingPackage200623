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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,82,77,111,219,48,12,189,23,232,127,32,140,29,108,32,16,218,235,186,21,152,179,116,8,80,108,67,157,244,50,236,160,200,140,171,65,31,134,36,167,203,134,252,247,81,86,130,184,78,135,245,184,67,121,178,200,199,71,62,250,25,174,209,183,92,32,44,208,57,238,237,58,176,169,53,107,217,116,142,7,105,205,249,217,239,243,51,160,232,188,52,13,84,91,31,80,95,13,83,195,70,173,173,249,107,209,33,155,153,32,131,68,255,18,12,155,109,208,132,3,244,91,159,222,246,185,91,73,75,24,116,121,37,30,80,243,207,164,1,222,67,86,114,117,135,92,133,109,86,124,79,77,109,183,82,82,128,80,220,123,72,181,103,104,224,45,148,220,227,51,149,196,178,63,192,128,208,110,104,101,89,35,108,172,172,225,139,153,27,143,46,144,150,220,174,126,160,8,224,209,212,232,38,144,56,75,92,147,176,158,249,131,107,60,96,113,100,28,144,199,88,209,34,108,72,120,96,194,226,234,41,50,81,131,235,85,145,252,60,37,138,212,48,2,215,40,164,230,10,90,39,69,188,85,234,98,159,48,44,182,45,214,83,171,58,109,238,185,234,240,221,30,122,157,199,123,126,141,248,101,245,49,27,79,151,107,200,19,217,53,92,94,28,162,120,10,26,105,139,129,108,238,167,220,8,84,88,211,30,193,117,72,204,167,56,31,92,180,6,153,211,243,6,23,168,91,197,67,220,220,224,35,220,90,193,149,252,197,87,10,171,30,151,239,245,44,233,106,228,94,67,191,128,172,203,238,208,219,206,9,2,89,71,44,147,211,49,49,142,190,185,113,136,181,213,85,223,52,181,53,102,19,200,78,134,121,214,31,106,238,23,214,150,178,73,175,172,96,11,187,95,166,120,129,34,82,146,18,236,198,58,205,67,62,82,74,131,47,217,69,249,230,228,240,49,194,131,179,143,253,37,102,63,5,182,81,235,161,127,12,223,29,159,187,127,218,120,217,214,252,213,197,175,46,254,207,93,156,30,244,177,251,3,218,244,134,98,190,6,0,0 };
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

