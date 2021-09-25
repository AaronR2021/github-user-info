import React from 'react'

function Nav(props) {
 function rotateIcon(){
let icon=document.querySelector('.fa-adjust')
icon.classList.toggle("clicked-theme");
icon.classList.toggle('clicked-theme-again')
props.theme()
 }
    return (
        <nav>
          <h2 className='logo'>DevFinder</h2>
          <button onClick={rotateIcon}>
              <i className="fas fa-adjust clicked-theme"></i>
          </button>
        </nav>
    )
}

export default Nav
