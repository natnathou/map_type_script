import faker from 'faker';
export class Company {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	message: string;

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
		this.message = "Hi, I'm a company";
	}

	markerContent(): string {
		return this.message;
	}
}
