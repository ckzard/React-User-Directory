import React, { Component, useState, useEffect } from "react";
import './Container.css';
import Title from '../Title/Title'
import DataTable from '../DataTable/DataTable'
import API from '../../utils/API'
require("es6-promise").polyfill()
require("isomorphic-fetch");

const Container = () => {
    //these are the state monitors
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    
    //grabs data on load
    useEffect(() => {
        API.search().then((res) => {
            setUsers(res.data.results)})
            .catch(err => console.log(err));
    }, [])

    //this function allows us to filter the directory, by search query in our state above
    //indexOf will try and match the two strings and return it if there's a match
    function filter(rows) {
        return rows.filter(
            (row) => 
            row.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1 || 
            row.name.last.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            row.cell.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            row.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            row.location.city.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            row.location.state.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            row.location.country.toLowerCase().indexOf(search.toLowerCase()) !== -1 
        )
    }

    return (
        <div>
            <Title />
            <div>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>  
            </div>
            <div>
            {/* here we apply the filter function to our users data before its rendered */}
            <DataTable 
            data={filter(users)}/>
            </div>
            
        </div>
        
    )
}

export default Container;