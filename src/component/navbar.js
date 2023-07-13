import Akkenna from '../images/Layer1.jpg'

import { AiOutlineDown } from 'react-icons/ai';

function Navbar(){
  return(
    <>
      <nav id="navbar" class="navbar navbar-expand-lg bg-light">
          <img src={Akkenna} class='logo-img'/>
          <div  class="navbar">
          <ul class="nav">
            <li class="nav-item">
              <a id="nav-content" class="navbar-brand" href="#//">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a id="nav-content" class="navbar-brand" href="#//">
                Services <AiOutlineDown />
              </a>
            </li>
            <li class="nav-item">
              <a id="nav-content" class="navbar-brand" href="#//">
                Developers <AiOutlineDown />
              </a>
            </li>
            <li class="nav-item">
              <a id="nav-content" class="navbar-brand" href="#//">
                Animations <AiOutlineDown />
              </a>
            </li>
            <li class="nav-item">
              <a id="nav-content" class="navbar-brand" href="#//">
                Products <AiOutlineDown />
              </a>
            </li>
            <li class="nav-item">
              <a id="nav-content" class="navbar-brand" href="#//">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a id="nav-content" class="navbar-brand" href="#//">
              Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a id="nav-content" class="navbar-brand" href="#//">
              Careers
              </a>
            </li>
            <li class="nav-item">
              <button className='contact-button'>
                 Contact Us
              </button>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;