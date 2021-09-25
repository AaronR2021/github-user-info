import './App.css';
import './index.css'
import Nav from './components/Nav.js'
import Search from './components/Search.js'
import Content_Found from './components/Content_Found.js'
import Error_Page from './components/Error_Page.js'
import {useState} from 'react'


function App() {
  //states
  const [username, setusername] = useState('');
  const [userVal, setUserVal] = useState(null);
  const [error, setError] = useState(false);


  //methods
  function theme(){
let body=document.querySelector('body');
body.classList.toggle('light')
  }

  function searchUser(e){
    e.preventDefault();
    const user=e.target[0].value;
    fetch(`https://api.github.com/users/${user}`).then(res=>res.json()).then(userData=>{
     
    if(userData.message){
      setError(userData.message)
      setUserVal(null);
    }
    else{
      setUserVal(userData);
      setError(null)
    }
    })
    //run a fetch function to search for user in github
    //if error empty execute Content_Found else Error_Page
  }
  return (
   <div  className='content-body'>
    <Nav theme={theme}/>
    <Search searchUser={searchUser}/>
    {
      userVal?<Content_Found userInfo={{...userVal}}/>:<></>
    }
   </div>
  );
}

export default App;
