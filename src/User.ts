import faker from 'faker';
export class User {
	name: String;
	location: {
		lat: number;
		lng: number;
	};
	message: string;

	constructor() {
		this.name = faker.company.companyName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
		this.message = "Hi, I'm a user";
	}

	markerContent(): string {
		return this.message;
	}
}
