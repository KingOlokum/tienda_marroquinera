
import './style.css';
import { CartWidget } from '../CartWidget/CartWidget';

const Navbar = () =>{
    return(
                <div className='navbar-container'>
            <div>
                <img alt="logo" src={'./logo.jpg'} width={'150px'}/>
                
            </div>
            <div>
                <ul className='list-container'>
                    <li><button className='category-button'>Correas Para Hombre
                        </button></li>
                        <li><button className='category-button'>Correas Para Mujer
                        </button></li>
                        <li><button className='category-button'>Sobre Nosotros
                        </button></li>
                </ul>
                
            </div>
            <CartWidget></CartWidget>
        </div>

    );
};

export default Navbar;