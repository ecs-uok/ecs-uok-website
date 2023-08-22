import { Link } from "react-router-dom";
import HeaderLogo from "../assets/ecsc_logo_header.png";


const SideNav = ({visible,setVisible}) => {

    const handleOnClose = (e) => {
        if(e.target.id === 'container') setVisible(false);
    }

    const menuItemsArray = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact Us',
            link: '/contact-us'
        }
    ];

    return (
        <div  id="container"  className={`${visible ? "fixed inset-0 h-screen " : "fixed h-screen"}`} onClick={handleOnClose}>
            <nav 
                className = { visible 
                    ? "bg-primary w-[250px] h-screen flex justify-center fixed t-0 left-0 transition-all duration-700 z-25 lg:hidden inset-0" 
                    : "bg-primary w-[250px] h-screen flex justify-center fixed t-0 left-[-100%] transition-all duration-700 z-25 lg:hidden inset-0"
                    }
                >
                <div className="w-full h-screen flex flex-col justify-start items-center space-y-3" >
                    <div className="w-full" >
                    <img
                        className="flex h-full w-fit  justify-center items-center"
                        src={HeaderLogo}
                        alt="ECSC Logo"
                    />
                    </div>
                    <div className="h-full w-full flex flex-col items-center justify-start gap-10 text-xl font-[600] text-white py-5 pb-10" >

                        {
                            menuItemsArray.map((item,i) => {
                                return (
                                    <Link to={item.link} className='w-full flex justify-start pl-[20%]' key={i} >
                                        <div className="inline-block hover:w-[60%] transition-all duration-600 w-[20%]  pb-1 bt-5 justify-start items-center border-b-[1px]">
                                            <pre>
                                                {item.name}
                                            </pre>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default SideNav;