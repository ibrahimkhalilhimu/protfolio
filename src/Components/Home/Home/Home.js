import React from 'react';
import { useContext } from 'react';
import { ThemeSet } from '../../../App';
import HeaderMain from '../HeaderMain/HeaderMain';
import MainNav from '../MainNav/MainNav';
import './Home.css'
import { FaFacebookF, FaLinkedinIn,FaGithub } from 'react-icons/fa';
const Home = () => {
    const [darkTheme, setDarkTheme] = useContext(ThemeSet)
    // const handleClick = () => {
    //     setDarkTheme(prevTheme => !prevTheme)
    // }
    return (
        <div  className="background">   
            {/* <MainNav handleClick={handleClick}/> */}
            <HeaderMain/>
            <div className="header">
                <ul>
                    <li>
                    <a className={darkTheme?'text-white':'text-dark'} href="https://www.linkedin.com/in/ibrahim-khalil-8788b61ba/" target="_blank"> <FaLinkedinIn style={{width:"40px",height:"40px"}}/></a> 
                    </li>
                    <li>
                       <a className={darkTheme?'text-white':'text-dark'} href="https://github.com/ibrahimkhalilhimu" target="_blank"><FaGithub style={{width:"40px",height:"40px"}}/></a> 
                    </li>
                    <li>
                      <a className={darkTheme?'text-white':'text-dark'} href="">
                      <FaFacebookF style={{width:"40px",height:"40px"}}/>
                      </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;