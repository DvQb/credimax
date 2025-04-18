
import logo from '/credimax.png'

const Navbar = () => {

    return(

        <section className="bg-cyan-950 text-neutral-100 p-4 rounded-b-3xl">

            <div className="w-full">

                <img src={logo} alt="logo de credimax" className='w-1/4 justify-self-center'/>
            
                <hr className="w-full m-auto" />


                <ul className="flex justify-around my-8 text-xl">

                            <li>
                                <a href="">Inicio</a>
                            </li>
                            <li>
                                <a href="">Servicios</a>
                            </li>
                            <li>
                                <a href="">Contactanos</a>
                            </li>
                            <li>
                                <a href="">Mi cuenta</a>
                            </li>
                            

                </ul>
            </div>

        </section>

    )
}


export default Navbar;