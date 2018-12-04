import Developer from './developer';
import { name as alias } from './developer';

let user = new Developer('Anon', 23, '1995')
console.log(user.displayInfo());
console.log(alias);

document.getElementById("content").innerHTML = user.displayInfo();

