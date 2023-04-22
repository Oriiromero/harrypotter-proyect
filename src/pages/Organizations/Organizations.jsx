import React, { useContext, useEffect, useState } from 'react';
import { CharactersContext } from '../../shared/characters.context';
import Menu from '../../components/Menu/Menu';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home-icon.png';
import lupa from '../../assets/lupa.png';
import GalleryOrganizations from '../../components/GalleryOrganizations/GalleryOrganizations';
import Gallery from '../../components/Gallery/Gallery';
const Organizations = () => {
    const { organizations } = useContext(CharactersContext);
    const [ filteredOrganizations, setFilteredOrganizations] = useState([]);


    const onFilter = (e) => {
        const filterOrg = organizations.filter((organization) => organization.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredOrganizations(filterOrg);
    }


    useEffect(() => {
        setFilteredOrganizations(organizations);
    }, [organizations] )

    return (
        <div className='container-characters'>
            <div className='searcher'>
                <div className='searcher_input'>
                    <input onChange={(e) => onFilter(e)} className='searcher_input-inp' type='text' placeholder='Search...' />
                    <img className='input-lupa' src={lupa} alt='lupa' />
                </div>
                <div className='searcher_icon'>
                    <Link to='/'>
                        <img src={homeIcon} alt='home_icon-img'></img>
                    </Link>
                </div>
            </div>
            <div className='gallery-container'>
                <GalleryOrganizations params={filteredOrganizations}></GalleryOrganizations>
                <Menu></Menu>
            </div>
        </div>
    )
}

export default Organizations;
