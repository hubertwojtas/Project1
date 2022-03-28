import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import {Home} from './views/Home';
import { RoomsList } from './views/RoomsList';
import { Nav } from './navigation/Nav';

const main = document.querySelector('main');

main.before(Nav());

//na start pokazujemy komponent Home
main.append(Home());
//main.append(RoomsList());

document.body.addEventListener('navigate', (event) => {
    const {detail: Component} = event;
    //czyscimy zawartosc main
    main.innerHTML = '';
    //wstawiamy nowy komponent do elementu main
    main.append(Component());
});
