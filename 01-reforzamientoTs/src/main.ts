import './style.css'
//import './bases/01-const-let'
// import './bases/03-object-literal'
//import './bases/05-functions'
//import './bases/06-obj-dest'
//import './bases/07-array-destructuring'
//import './bases/t1-desustructuracion'
//import './bases/08-import-export'
//import './bases/09-promises'
// import './bases/10-fetch-api'
import './bases/11-async-await'

import {getHeroesByOwner} from './bases/08-import-export'
import { Owner } from './data/heroes.data';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola mundo</h1>
  </div>
`

console.log(getHeroesByOwner(Owner.Marvel));
