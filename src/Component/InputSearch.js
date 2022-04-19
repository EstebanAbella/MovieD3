import React,{useState} from "react"
import './InputSearch.css'
import { Link } from "react-router-dom"


function InputSearch({debounce, debounceSearch, header = false}){

    const [form, setForm] = useState({search:''})

    const handleChange = (event) => {
        const searchInput = event.target.value
        setForm({...form, search:searchInput}) 
        if(debounce && form.search.length >= 2){
            debounceSearch(form.search)
        }
    }


    return(
        <div className={header ? 'headerInput' : "inputSearch"}>
            <input type='text' name="search" value={form.search} onChange={handleChange} placeholder={header ? 'Search...' : 'Search for a movie, tv show...'}></input>
            {!debounce &&
                <Link to={ form.search.length > 3 ? `/search-results/${form.search}` : '/'}>Search</Link>
            }
        </div>
    )
}

export default InputSearch