import { User } from './User';

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(element: string) {
		this.googleMap = new google.maps.Map(document.getElementById(element), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

	addMarket(user: User): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: user.location.lat,
				lng: user.location.lng
			}
		});
	}
}
