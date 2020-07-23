import { CustomMap } from './CustomMap';

let apples: number = 5;

let orange: number;

orange = 5;

let text: string;
text = 'rfrf';

let result: false | number = false;

let colors: string[] = ['red', 'green', 'yellow'];

let numbers: number[] = [1, 2, 3];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
	x: 10,
	y: 10
};

let coordonate = {
	x: 10,
	y: 10,
	z: 10
};

// dont use
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

logNumber(1);

//  use
const logNumbers = (i: number): void => {
	console.log(i);
};

logNumbers(1);

const add = (a: number, b: number): number => {
	return a + b;
};
function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

const throwError = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
};

const todayWeather = {
	date: new Date(),
	weather: 'sunny'
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

logWeather(todayWeather);

const logWeatherDestruct = ({
	date,
	weather
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};

logWeatherDestruct(todayWeather);

const profile = {
	name: 'alex',
	age: 20,
	coords: {
		lat: 0,
		lng: 15
	},
	setAge: function (age: number): void {
		this.age = age;
	}
};

const profile2 = {
	name: 'alex',
	age: 20,
	coords: {
		lat: 0,
		lng: 15
	},
	setAge(age: number): void {
		this.age = age;
	}
};

let age1: number = profile.age;

let { age } = profile;

let { age: age2 }: { age: number } = profile;

console.log(age2);

const {
	coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

console.log(lat);

let tst = { alice: { lg: 3, ll: 3 } };

let {
	alice: { lg, ll }
} = tst;

let multipleTypeArray: (number | string)[] = [1, 'a'];
let multipleTypeArraytest = [1, 'a'];

//tuples

let drink = {
	color: 'brown',
	carbonate: true,
	sugar: 40
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

interface Vehicule {
	speed: number;
	place: number;
}
