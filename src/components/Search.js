import React from 'react'

function Search(props) {

    return (
        <div className='search-block'>
            <div className='searchBox'>
            <i className="fas fa-search"></i>
            <form onSubmit={props.searchUser}>
            <input type="search" name="user" placeholder="Search GitHub username.."  className='userSearch' />            
            <button type="submit" className="btn-search" >Search</button>
           </form>
            </div>
            
        </div>
    )
}

export default Search
