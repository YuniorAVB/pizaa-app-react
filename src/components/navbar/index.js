import React from 'react'

const NavBar = ({ handleSearch,user }) => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand">{user.name}</a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Buca tu Pizza"
          aria-label="Search"
        />
        <button className="btn btn-success my-2 my-sm-0">Buscar</button>
      </form>
      
    </nav>
  )
}

export default NavBar
