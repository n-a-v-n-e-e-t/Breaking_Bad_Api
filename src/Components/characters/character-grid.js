import React from 'react'
import CharacterItem from './characterItem';
import Spinner from '../UI/spinner';
const characteGrid = ({isLoading, items}) => {
    const allItems = items.map(item =>(
        <CharacterItem key={item.char_id} item={item} />
    ));

    return isLoading?(<Spinner />):(
        <section className="cards"> 
        {allItems}
        </section>
    )
}

export default characteGrid
