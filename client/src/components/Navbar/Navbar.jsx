import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import languageEn from "../../img/en.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container header__container">
        <nav className="header__navbar">
          <div className="header__navbar-left">
            <div className="item">
              <img src={languageEn} alt="" />
              <KeyboardArrowDownIcon />
            </div>
            <div className='item'>
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <Link className="link" to="/products1">Women</Link>
            </div>
            <div className="item">
              <Link className="link" to="/products2">Men</Link>
            </div>
            <div className="item">
              <Link className="link" to="/products3">Children</Link>
            </div>
          </div>
          <div className="header__navbar-center">
            <Link className="link" to="/">LAMASTORE</Link>
          </div>
          <div className="header__navbar-right">
            <div className="item">
              <Link className="link" to="/">Homepage</Link>
            </div>
            <div className="item">
              <Link className="link" to="/">About</Link>
            </div>
            <div className="item">
              <Link className="link" to="/">Contact</Link>
            </div>
            <div className="item">
              <Link className="link" to="/">Stores</Link>
            </div>
            <div className="icons">
              <SearchIcon />
              <PersonOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
              <div className="cartIcon">
                <ShoppingCartOutlinedIcon />
                <span>0</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}