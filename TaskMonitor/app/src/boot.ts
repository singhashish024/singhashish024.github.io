/// <reference path="_all.ts" />
module contactManager{
	angular.module("contactManager",['ngMaterial','ngMdIcons','ngMessages'])
	.service("userService",userService)
	.controller("addUserDialogController", addUserDialogControllerClass)
	.controller("controlPanelController", controlPanelControllerClass)
	.controller("mainController",mainControllerClass)
	.config(($mdIconProvider:ng.material.MDIconProvider, $mdThemingProvider:ng.material.MDThemingProvider)=>{
			$mdIconProvider
				.defaultIconSet('../assets/svg/avatars.svg', '128')
				.icon('menu','../assets/svg/menu.svg', '24')
				.icon('google_plus','../assets/svg/google_plus.svg', '512')
				.icon('mail','../assets/svg/mail.svg', '512')
				.icon('phone','../assets/svg/phone.svg', '512')
				.icon('twitter','../assets/svg/twitter.svg', '512')
				.icon('hangouts','../assets/svg/hangouts.svg', '512');
			$mdThemingProvider.theme('default').dark(); /*
				.primaryPalette('blue')
				.accentPalette('red');
				*/
		});
	}