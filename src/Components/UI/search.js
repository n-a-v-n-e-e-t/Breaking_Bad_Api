import React, {useState} from 'react'

const Search = ({changequery}) => {
    const [text,setText] = useState('');
    const handleChange=(e)=>{
        setText(e.target.value);
        changequery(e.target.value);
    }
    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Characters"
                    value={text}
                    onChange={handleChange}
                />
            </form>
        </section>
    )
}

export default Search