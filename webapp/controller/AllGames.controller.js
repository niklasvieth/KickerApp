sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("KickerApp.controller.AllGames", {

		onInit: function () {

			var oData = [{
				"Timestamp": "17.08.2018",
				"Player1": "Niklas Vieth",
				"Player2": "Peter Widmer",
				"Player3": "Kerem Ünal",
				"Player4": "Leo Irudayam",
				"Result": "5:1",
				"Kriechen": true

			}, {
				"Timestamp": "17.08.2018",
				"Player1": "Niklas Vieth",
				"Player2": "Peter Widmer",
				"Player3": "Kerem Ünal",
				"Player4": "Leo Irudayam",
				"Result": "6:5",
				"Kriechen": false

			}, {
				"Timestamp": "15.08.2018",
				"Player1": "Niklas Vieth",
				"Player2": "Peter Widmer",
				"Player3": "Kerem Ünal",
				"Player4": "Leo Irudayam",
				"Result": "1:5",
				"Kriechen": false

			}, {
				"Timestamp": "14.08.2018",
				"Player1": "Niklas Vieth",
				"Player2": "Peter Widmer",
				"Player3": "Kerem Ünal",
				"Player4": "Leo Irudayam",
				"Result": "3:5",
				"Kriechen": true

			}];

			var oModel = new JSONModel(oData);

			this.getView().setModel(oModel, "game_model");

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

			sap.ui.getCore().setModel(oModel2, "player_model");

		},
		onNewGame: function () {
			this._newGameDialog = sap.ui.xmlfragment("KickerApp.fragment.NewGame", this);

			this._newGameDialog.open();

		},
		onNavToKriechBilder: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("KriechBilder", true);
		},
		onSwitchChange: function(){
			
			var kriechState = sap.ui.getCore().byId("switchId").getState();
			sap.ui.getCore().byId("uploadSection").setVisible(kriechState);
		},

		onExit: function () {

			if (this._newGameDialog) {
				this._newGameDialog.destroy();
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