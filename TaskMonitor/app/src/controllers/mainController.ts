/// <reference path="../_all.ts" />

module contactManager{
	export class mainControllerClass{
		static $inject=['userService','$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia', '$mdBottomSheet'];
		constructor(private userService:IUserService,
			private $mdSidenav: ng.material.MDSidenavService,
			private $mdToast: ng.material.MDToastService,
			private $mdDialog: ng.material.MDDialogService,
			private $mdMedia: ng.material.MDMedia,
			private $mdBottomSheet: ng.material.MDBottomSheetService){
			var self= this;

			this.userService
				.loadAllUsers()
				.then((users:user[])=>{
					self.users=users;
					self.selected=users[0];
					self.userService.selectedUser=self.selected;
					console.log(self.users);
				});
		}

		searchText:string="";
		users:user[]=[];
		selected:user=null;
		tabIndex:number=0;
		newNote: note = new note('',null,null);

		toggleSideNav():void{
			this.$mdSidenav('left').toggle();
		}

		selectUser(userPassed:user):void{
			this.selected=userPassed;
			var sideNav=this.$mdSidenav('left');
			if(sideNav.isOpen())
			{
				sideNav.close();
			}
			this.tabIndex=0;
		}

		formScope:any;

		setFormScope(scope){
			this.formScope=scope;
		}

		addNote(){
			this.selected.notes.push(this.newNote);

			//reset the form
			this.formScope.noteForm.$setUntouched();
			this.formScope.noteForm.$setPristine();

			this.newNote=new note('',null,null);
			this.openToast('Note Added');
		}

		deleteNote(note:note){
			var foundIndex=this.selected.notes.indexOf(note);
			this.selected.notes.splice(foundIndex,1);
			this.openToast("Removed note");
		}

		openToast(message:string){
			this.$mdToast.show(
				this.$mdToast.simple()
				.content(message)
				.position('top right')
				.hideDelay(3000));
		}

		clearNotes($event){
			var confirm=this.$mdDialog.confirm()
				.title('Are you sure you want delete all the notes?')
				.content('All the notes for this User will be deleted, this action can\'t be undone')
				.ok('Yes')
				.cancel('No');

			var self=this;

			this.$mdDialog.show(confirm).then(() => {
				this.selected.notes=[];
				this.openToast('Notes Deleted');
			})
		}

		addUser($event){
			var self=this;
			var showFullscreen= (this.$mdMedia('sm')||this.$mdMedia('xs'));

			this.$mdDialog.show({
				templateUrl:'../dist/views/newUserDialog.html',
				parent:angular.element(document.body),
				targetEvent: $event,
				controller: 'addUserDialogController',
				controllerAs: 'ctrl',
				clickOutsideToClose: true,
				escapeToClose: true
				//fullscreen property is not there
			}).then((userItem:createUser)=>{
				var newUser:user=user.fromCreate(userItem);
				self.users.push(newUser);
				self.selectUser(newUser);
				self.openToast('User Added');
				},
				()=> {
					console.log('You cancelled the Dialog');
				}
			);
		}

		showContactOptions($event){
			this.$mdBottomSheet.show({
				parent:angular.element(document.getElementById('wrapper')),
				templateUrl:'../dist/views/bottom-sheet.html',
				controller:'controlPanelController',
				controllerAs: 'cp',
				targetEvent: $event
			}).then((clickedItem)=>{
				clickedItem && console.log(clickedItem.name + ' clicked!');
			})
		}
	}
}