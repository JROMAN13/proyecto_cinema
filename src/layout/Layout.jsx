import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'


const Layout = () => {
  return (
    <div className='bg-lime-600 p-10'>
        <div>
            <NavLink to="/page1"> ir a la pagina 1</NavLink>
            <NavLink to="/page2"> ir a la pagina 2</NavLink>
            {/* <button onClick={handleId}>ir a pagina id</button> */}
            <NavLink to="/page1/12"> ir a la pagina id</NavLink>
        </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
