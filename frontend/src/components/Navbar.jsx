
import logo from '/credimax.png'
import { Link } from 'react-router-dom';



const Navbar = () => {

    const autenticado = localStorage.getItem('auth') === 'true';

    return(

        <section className="bg-cyan-950 text-neutral-100 p-4 rounded-b-3xl">

            <div className="w-full">

                <img src={logo} alt="logo de credimax" className='w-1/4 justify-self-center'/>
            
                <hr className="w-full m-auto" />


                <ul className="flex justify-around my-8 text-xl">

                            <li>
                                <Link to='/'>Inicio</Link>
                            </li>
                            <li>
                                <a href="">Servicios</a>
                            </li>
                            <li>
                                <a href="">Contactanos</a>
                            </li>
                            <li>
                                <Link to={autenticado ? '/dashboard' : '/login'} className=""> Mi cuenta </Link>
                            </li>
                            

                </ul>
            </div>

        </section>

    )
}


export default Navbar;