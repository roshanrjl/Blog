import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status); // fixed variable name from 'user' to 'authStatus'
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-800 text-white">
      <Container>
        <nav className="flex items-center justify-between">
          <div>
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex gap-6 items-center">
            {navItems.map((item, index) =>
              item.active ? (
                <li key={index}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="text-white hover:text-yellow-400 font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
