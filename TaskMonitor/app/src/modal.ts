/// <reference path="_all.ts" />

module contactManager{

	export class user{
		constructor(
			public name:string,
			public avatar:string,
			public bio:string,
			public notes: note[]){
		}

		static fromCreate(userItem:createUser):user{
			return new user(
				userItem.firstName + ' ' + userItem.lastName,
				userItem.avatar,
				userItem.bio,
				[]);
		}
	}

	export class note {
		
		constructor(
			public title:string,
			public startDate:Date,
			public endDate:Date) {
		}
	}
	
	export class createUser{
		
		constructor(
			public firstName: string,
			public lastName: string,
			public avatar: string,
			public bio: string) {
		}
	}
}