import { User } from './User';

interface Mapable {
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
}
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

	addMarket(mapable: Mapable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mapable.location.lat,
				lng: mapable.location.lng
			}
		});
		const infoWindow = new google.maps.InfoWindow({
			content: mapable.markerContent()
		});

		marker.addListener('click', (e) => {
			infoWindow.open(this.googleMap, marker);
		});
	}
}
