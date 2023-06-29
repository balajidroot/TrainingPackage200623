namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: BalCreateRealtyVisitFreedomProcessMethodsWrapper

	/// <exclude/>
	public class BalCreateRealtyVisitFreedomProcessMethodsWrapper : ProcessModel
	{

		public BalCreateRealtyVisitFreedomProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			String sender = "CreateRealtyVisitFreedomProcess";
			String msgbody = "RefreshRealtyVisitDataGrid";
			MsgChannelUtilities.PostMessage(UserConnection, sender, msgbody);
			
			/* Receive the contact name. */
			string userName = "CREATIO_809";
			/* Receive the date of the contact birthday. */
			string birthDate="01-JAN-2000" ;
			/* Generate the message text. */
			string messageText1 = "{\"birthday\": \"" + birthDate + "\", \"name\": \"" + userName + "\"}";
			/* Set the message name. */
			string sender1 = "NewMessage";
			/* Publish the message via WebSocket. */
			MsgChannelUtilities.PostMessageToAll(sender1, messageText1);
			
			return true;
		}

		#endregion

	}

	#endregion

}

