namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    [EntityEventListener(SchemaName = "BalRealty")]
    public class RealtyEntityEventListener : BaseEntityEventListener
    {
	
		public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            Entity realty = (Entity)sender;
            decimal price = realty.GetTypedColumnValue<decimal>("BalPriceUSD");
			decimal areasqft = realty.GetTypedColumnValue<decimal>("BalAreaSqft");
			string comments = realty.GetTypedColumnValue<string>("BalRealtCommentsFreedom");
            if (price > 100000 && comments == "")
            {
				e.IsCanceled = true;
				string messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage,
                    "BalRealtyFreedomSourceCode", "LocalizableStrings.CommentsRequired.Value").ToString();
					
				string message = string.Format(messageTemplate, "Comments","Price",">","100000");
					
				throw new Exception(message);
				
			}
			if(price < 1 || areasqft < 1){
				string messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage,
                    "BalRealtyFreedomSourceCode", "LocalizableStrings.CommentsRequired.Value").ToString();
					
				string message = string.Format(messageTemplate, "Price or Area Sqft","value",">","0");
					
				throw new Exception(message);
			}
		}
        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            Entity realty = (Entity)sender;
            decimal price = realty.GetTypedColumnValue<decimal>("BalPriceUSD");
            if (price > 1000000000)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage,
                    "BalRealtyFreedomSourceCode", "LocalizableStrings.ValueIsTooBig.Value").ToString();

                string message = string.Format(messageTemplate, "1.0B$");
                throw new Exception(message);
            }
        }
        public override void OnUpdating(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            Entity realty = (Entity)sender;
            decimal price = realty.GetTypedColumnValue<decimal>("BalPriceUSD");
            if (price > 1000000000)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage,
                    "BalRealtyFreedomSourceCode", "LocalizableStrings.ValueIsTooBig.Value").ToString();

                string message = string.Format(messageTemplate, "1.0B$");
                throw new Exception(message);
            }
        }

    }
}