import React, { useState, useEffect } from 'react'
import '../Navbar/Header.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import CartPage from '../CartPage/CartPage'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCart } from '../Redux/CartSlice'   // 👈 import karo

function Header() {
  const [openCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items) || [];

  // ✅ Page load par cart fetch karo
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const totalcount = items.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  return (
    <div className='header'>
      <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar">
        <Container>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="nav-left">
              <Nav.Link as={NavLink} to='/shopall'>Shop All</Nav.Link>
              <Nav.Link as={NavLink} to='/combos'>Combos</Nav.Link>
              <Nav.Link as={NavLink} to='/recipes'>Recipes</Nav.Link>
              <Nav.Link as={NavLink} to='/about'>About Us</Nav.Link>
              <Nav.Link as={NavLink} to='/faqs'>FAQS</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand className="nav-logo mx-auto">
            <Link to='/home'>
              <img src="/Greenlogo.png" alt="Logo" />
            </Link>
          </Navbar.Brand>

          <div className="nav-right">
            <i className="bi bi-search"></i>
            <Nav.Link as={NavLink} to='/'>
              <i className="bi bi-person"></i>
            </Nav.Link>

            <div 
              className="cart-icon"
              onClick={() => setOpenCart(true)}
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-cart"></i>
              <span>{totalcount}</span>
            </div>
          </div>

          {openCart && (
            <CartPage closeCart={() => setOpenCart(false)} />
          )}

        </Container>
      </Navbar>
    </div>
  )
}

export default Header
