import faker from 'faker';
import { User } from './src/User';
import { Company } from './src/Company';
import { CustomMap } from './src/CustomMap';

const user = new User(
	faker.name.firstName(),
	parseFloat(faker.address.latitude()),
	parseFloat(faker.address.longitude())
);

const company = new Company(
	faker.company.companyName(),
	parseFloat(faker.address.latitude()),
	parseFloat(faker.address.longitude())
);

const map = new CustomMap('mapDiv');
map.addMarket(user);
