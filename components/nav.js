import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'

const links = [
  { href: 'https://janberkarikan.com', label: 'Janberk Arıkan' },
  { href: 'https://github.com/Janberka/next-test', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const NavStyled = styled.nav`
  text-align: center;
  ul {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #067df7;
    text-decoration: none;
    font-size: 13px;
  }
`;

const Nav = () => (
  <NavStyled>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </NavStyled>
)

export default Nav
