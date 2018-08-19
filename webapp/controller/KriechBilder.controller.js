sap.ui.define([
	"sap/ui/core/mvc/Controller",

	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("KickerApp.controller.KriechBilder", {

		onInit: function () {
			// 	var oImgModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/img.json"));
			// 	this.getView().setModel(oImgModel, "img");

			// 	// set the possible screen sizes
			// 	var oCarouselContainer = {
			// 		screenSizes: [
			// 			"350px",
			// 			"420px",
			// 			"555px",
			// 			"743px",
			// 			"908px"
			// 		]
			// 	};
			// 	var oScreenSizesModel = new JSONModel(oCarouselContainer);
			// 	this.getView().setModel(oScreenSizesModel, "ScreenSizesModel");
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("AllGames", true);
			}

		},

	});

});