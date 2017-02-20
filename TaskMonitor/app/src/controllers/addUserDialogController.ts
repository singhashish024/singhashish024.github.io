/// <reference path="../_all.ts" />

module contactManager{
	export class addUserDialogControllerClass{
		static $inject=['$mdDialog'];

		user:createUser;

		avatars=['svg-1','svg-2','svg-3','svg-4'];

		constructor(private $mdDialog){}

		cancel(){
			this.$mdDialog.cancel();
		}

		save(){
			this.$mdDialog.hide(this.user);
		}
	}
}