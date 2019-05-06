import React from 'react';

import img_bg from '../../Assets/Images/lanche_bg.jpg';
import './Header.css'


//Todo: Make this navbar responsible
class Header extends React.Component{
    render(){
        return(
            <div className="Header">
                <nav className="HeaderNav">
                    <a href="/" className="HeaderBranch">
                        Startup Branch
                    </a>
                    <ul className="HeaderList">
                        <li className="HeaderItem"><a className="HeaderLink" href="/">Página Principal</a></li>
                        <li className="HeaderItem"><a className="HeaderLink" href="/Cardapio">Cárdapio</a></li>
                        <li className="HeaderItem"><a className="HeaderLink" href="/">Monte seu lanche</a></li>
                        <li className="HeaderItem"><a className="HeaderLink" href="/">Sobre nós</a></li>
                    </ul>
                </nav>
                {/* <img src={img_bg} className="image-bg" alt="" /> */}
            </div>
        );
    }
}

export default Header;