import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

function Search() {
    const [search, setSearch] = useState({search: ""})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch({[name]: value})
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(search);
        API.bookSearch(search.search)
          .then(res => console.log(res));
    }
    return (
        <>
        <div className="card">
            <div className="card-body">
        <form className="form-inline">
            <div class="form-group mb-2">
                <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Search"/>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label  class="sr-only">Search</label>
                <input type="text" name="search" onChange={handleInputChange} class="form-control" id="inputPassword2" placeholder="Search"/>
            </div>
            <button type="submit" onClick={handleSubmit} class="btn btn-primary mb-2">Search</button>
        </form>
        </div>
        </div>
        </>
    )
}

export default Search