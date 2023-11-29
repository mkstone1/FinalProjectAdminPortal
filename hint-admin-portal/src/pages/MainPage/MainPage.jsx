import { useState } from 'react'
import './MainPage.css'
import Menu from '../../components/menu/Menu'


const MainPage = () =>{

const handleMenuClose = () =>{
  setMenuOpen(false);
}


return (
  <>
    <div>

   {/*   <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={handleMenuClose} />
      <Menu isOpen={isMenuOpen} onClose={handleMenuClose}/>*/}
      <div className='main-page-title'>
      <h1>Marks Hint Admin Portal</h1>
      </div>
    </div>

  </>
)
}
export default MainPage