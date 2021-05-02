import React,{useState} from 'react'
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function Search(){

    const [img,setImg] = useState('')
    const [clientId,setClientID] = useState('7Ba_eQo9MNRsx10o7i0BgDVe8bIZIuR85PShZqsfdAw')
    const [result,setResult] = useState([])


    const searchEvent = (event) => {
        setImg(event.target.value) 
    }

    const handleSubmit = () => {
        const url = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${clientId}`

        axios.get(url).then(
            response => setResult(response.data.results)
        )
    }
    return(
        <>
        <header className="header">
            <div className="logo_wrapper">
                <img src="https://i.ibb.co/gvQH0Mr/unsplash.png" alt="logo"/>
            </div>

            <div className="searchBar">
                <Button className="search_btn" onClick={handleSubmit}>
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
        : <div className="image_container">
        {result.map( (photos,index) => (
                    <div className="search_result_area" key={index}>
                        <img  src={photos.urls.regular} alt="randomimage"/>
                    </div> 
        ))}
        </div>
        }
        </>
    )
}
export default Search

