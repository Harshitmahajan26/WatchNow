import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { ShopContext } from '../../Context/ShopContext'; // Import ShopContext

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);  // Get setUser from UserContext
  const { cartItems, setCartItems } = useContext(ShopContext);  // Get cartItems and setCartItems from ShopContext
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');  // Remove user from localStorage
    setUser(null);  // Clear user from state
    localStorage.removeItem('cartItems');  // Remove cartItems from localStorage
    setCartItems({});  // Reset the cartItems state in ShopContext
    navigate('/login');  // Redirect to login page
  };

  // Calculate the total items in the cart
  const cartItemCount = Object.values(cartItems).reduce((total, count) => total + count, 0);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>WatchNow</p>
      </div>
      <ul className='nav-menu'>
        <li><Link to='/'>Shop</Link></li>
        <li><Link to='/mens'>Men's</Link></li>
        <li><Link to='/womens'>Women's</Link></li>
      </ul>
      <div className='nav-login-cart'>
        {user ? (
          <>
            <div className="user-display" style={{ marginRight: '10px' }}>
              {user.name} {/* Display the user's name */}
            </div>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}
        <Link to='/cart'>
          <img src={cart} alt="cart" />
        </Link>
        <div className="nav-cart-count">{cartItemCount}</div> {/* Dynamic Cart Count */}
      </div>
    </div>
  );
};

export default Navbar;
