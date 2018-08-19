sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",

	"sap/ui/model/json/JSONModel"
], function (Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("KickerApp.controller.AllPlayers", {
		onInit: function () {
			var oData2 = [{
				"Name": "Niklas Vieth",
				"Alias": "Der Zerstörer"

			}, {
				"Name": "Leo Irudayam",
				"Alias": "Der Looser"

			}, {
				"Name": "Peter Widmer",
				"Alias": "LickDatClick"

			}, {
				"Name": "Kerem Ünal",
				"Alias": "Trauerkandidat"

			}];

			var oModel2 = new JSONModel(oData2);

			this.getView().setModel(oModel2, "player_model");
		},
		onNewPlayer: function () {
			this._newPlayerDialog = sap.ui.xmlfragment("KickerApp.fragment.NewPlayer", this);

			this._newPlayerDialog.open();

		},
		onListItemPress: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("PlayerDetail", true);

		},
		onExit: function () {

			if (this._newPlayerDialog) {
				this._newPlayerDialog.destroy();
			}

		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("MainPage", true);
			}

		}

	});

});