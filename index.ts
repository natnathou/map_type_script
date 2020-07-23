import { User } from './src/User';
import { Company } from './src/Company';
import { CustomMap } from './src/CustomMap';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const map = new CustomMap('mapDiv');
map.addMarket(user);

map.addMarket(company);
