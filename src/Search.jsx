import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import SearchImage from './SearchImage'
import {Link} from 'react-router-dom'

function Search(){

    const [img,setImg] = useState('')

    const searchEvent = (event) => {
        setImg(event.target.value)
    }
    return(
        <>
        <header className="header">
            <div className="logo_wrapper">
                <img src="https://i.ibb.co/gvQH0Mr/unsplash.png" alt="logo"/>
            </div>

            <div className="searchBar">
                <Button className="search_btn">
                <SearchIcon/>
                </Button>
                
                <input type="text" placeholder="Search Images" className="search_input" value={img} onChange={searchEvent} />
                
            </div>
            <div className="create_account_menus">

                <Link exact="true" to='/login' className="login_text">
                    <Button className="login_btn">Login</Button>
                </Link>
                

                <Link exact="true" to='/join' className="join_text">
                    <Button className="join_btn">Join Free</Button>
                </Link>
            </div>
        </header>

        {img === '' ? 
        <div>
        <h1 className="searchAnyText">Search any images</h1>
        <img src="https://i.ibb.co/B6s6bKR/House-searching-cuate.png" alt="src" className="searching_img" /> 
        </div>
        : <SearchImage imageName={img}/>}
        </>
    )
}
export default Search