import React from 'react'

const GalleryOrganizations = (org) => {
    const props = org.params;

    return (
        <div className='container'>
            {props.map((e, index) => <div className='container_char' key={index}>
                <div className='container_char-img'>
                    <img src={e.image} alt={e.name}></img>
                </div>
                <div className='container_char-name'>
                    <p>{e.name}</p>
                </div>
            </div>
            )}
        </div>
    )
}

export default GalleryOrganizations
