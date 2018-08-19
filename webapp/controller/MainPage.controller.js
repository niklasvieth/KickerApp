sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("KickerApp.controller.MainPage", {

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
			console.log("test");

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
		onNavToAllPlayers: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("AllPlayers");
		},

		onNavToAllGames: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("AllGames");
		},

		getEntityCount: function (entities) {
			console.log(entities);
			console.log("test");
			return entities && entities.length || 0;
		},
	});

});