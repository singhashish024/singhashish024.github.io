/// <reference path="../_all.ts" />

module contactManager{

	export class controlPanelControllerClass{

		static $inject= ['userService','$mdBottomSheet'];

		constructor(private userService: IUserService,
				    private $mdBottomSheet){
			this.user= userService.selectedUser;
		}

		user:user;

		actions=[
			{name:"Phone", icon:"phone"},
			{name:"Twitter", icon:"twitter"},
			{name:"Google Plus", icon:"google_plus"},
			{name:"Mail", icon:"mail"},
			{name:"Hangouts", icon:"hangouts"}
		];

		submitContact(action){
			this.$mdBottomSheet.hide(action);
		}
	}
}