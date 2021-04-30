import React from 'react'

function SearchImage(props){

    const image = `https://source.unsplash.com/600x400/?${props.imageName}`
    return(
        <>
        <div className="search_result_area">
            <img src={image} alt="randomimage"/>
        </div>
        </>
    )
}
export default SearchImage