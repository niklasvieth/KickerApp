sap.ui.define(['jquery.sap.global', 'sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel',
		"sap/ui/core/routing/History"
	],
	function (jQuery, Controller, JSONModel, History) {

		return Controller.extend("KickerApp.controller.PlayerDetail", {

			onNavBack: function () {
				var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("AllPlayers", true);
				}

			},

		});

	});