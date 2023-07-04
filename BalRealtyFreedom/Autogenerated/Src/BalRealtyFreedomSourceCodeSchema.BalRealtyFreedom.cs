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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,84,93,107,219,48,20,125,118,126,197,197,140,98,67,48,237,235,218,21,154,44,29,133,178,141,56,217,203,216,131,98,223,164,26,182,228,74,114,186,44,205,127,223,149,100,55,31,77,191,96,140,194,42,136,77,228,115,143,238,57,58,146,96,37,234,138,101,8,35,84,138,105,57,53,73,95,138,41,159,213,138,25,46,69,103,217,1,26,181,230,98,6,233,66,27,44,143,55,102,54,171,202,82,138,135,190,41,76,6,194,112,195,81,63,3,146,12,230,40,76,131,252,238,102,23,110,234,146,83,3,2,85,148,102,87,88,178,207,212,61,124,128,176,199,138,33,178,194,44,194,248,135,171,169,234,73,193,51,200,10,166,53,248,79,123,88,224,61,244,152,198,61,95,28,201,178,19,116,130,160,161,146,115,106,149,231,8,115,201,115,248,34,82,54,39,1,145,156,252,196,204,128,70,145,163,234,130,167,234,225,148,212,56,194,51,53,211,128,177,227,243,156,176,49,38,180,122,114,199,213,146,96,124,188,133,242,164,160,156,12,146,27,249,137,216,227,183,177,57,102,188,100,5,84,138,103,214,26,95,148,124,66,51,90,84,152,247,101,81,151,226,27,43,106,60,105,160,167,145,181,239,171,197,143,211,143,33,173,29,4,65,75,195,168,94,95,79,205,11,152,206,8,152,82,73,195,164,141,178,27,157,81,58,236,150,62,78,228,193,158,199,237,90,191,41,59,87,136,185,44,195,29,103,248,20,34,175,244,20,142,14,237,128,131,131,141,181,40,26,97,188,85,177,180,61,5,152,92,232,62,19,25,22,152,83,71,70,213,232,154,109,187,165,51,161,217,12,71,88,86,5,51,214,71,129,55,112,41,51,86,240,223,108,82,96,234,112,81,35,101,172,81,209,161,17,148,4,58,49,201,16,181,172,85,70,32,169,136,165,187,213,64,59,214,153,109,180,165,174,166,47,115,12,187,16,222,91,75,39,173,23,67,188,174,185,194,60,113,158,133,113,50,146,77,59,222,241,32,216,35,133,36,248,137,228,92,170,146,153,104,71,34,45,217,242,135,221,208,165,129,222,167,244,243,190,134,91,220,230,74,201,27,231,201,224,87,134,149,85,221,18,54,56,251,88,217,7,159,54,59,116,2,71,112,123,187,78,20,253,143,151,255,189,233,206,105,144,10,236,177,1,119,110,186,225,220,173,225,237,127,169,243,214,244,213,157,248,7,46,175,11,65,230,153,191,118,127,173,233,94,203,21,246,248,37,97,199,238,181,176,27,149,189,87,196,61,212,107,142,174,179,232,66,143,164,236,241,217,222,220,62,33,231,25,241,61,74,14,123,239,118,13,183,227,241,156,110,34,215,97,125,50,182,227,42,103,111,169,93,143,183,212,238,145,243,239,83,219,241,175,213,31,158,21,214,154,76,11,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
			LocalizableStrings.Add(CreateCommentsRequiredLocalizableString());
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

		protected virtual SchemaLocalizableString CreateCommentsRequiredLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("88289e05-50cc-eda8-ce99-3a2526bc7044"),
				Name = "CommentsRequired",
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

