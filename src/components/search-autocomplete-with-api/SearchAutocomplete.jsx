
/**My Code */
import { useEffect, useState } from "react";
import Suggesstions from "./suggesstions";


export default function SearchAutocomplete() {


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
    const [totalusers, setTotalUsers] = useState(0);
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filterUsers, setFilterUsers] = useState([]);


    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);

        if (query.length > 1) {
            const filteredData = users && users.length
                ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                : [];

            setFilterUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }
    function handleClick(event) {
        console.log(event.target.innerText);
        setShowDropdown(false);
        setSearchParam(event.target.innerText);
        setFilterUsers([]);
    }
    async function fetchTotalUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            // console.log(data);
            // console.log(data.total);
            if (data && data.users && data.total && data.users.length) {
                setTotalUsers(data.total);
                setLoading(false);
                setError(null);
            }
        } catch (err) {
            console.log(err);
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTotalUsers();
    }, []);
    console.log(totalusers);
    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/users?limit=${totalusers}`);
            const data = await response.json();

            // console.log(data);
            // console.log(data.users.map((userItem) => userItem.firstName));
            if (data && data.users.length && totalusers > 0) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
                setError(null);
            }
        } catch (err) {
            console.log(err);
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, [totalusers]);

    console.log(users, filterUsers);

    if (error) return <div>{error}</div>
    return (
        <div className="search-autocomplete-container">
            <h1>Search Autocomplete with API implementation</h1>
            {
                loading
                    ? <div>Data Loading...</div>
                    : <input
                        value={searchParam}
                        name="search-users"
                        placeholder="Search Users here..."
                        onChange={handleChange}
                    />
            }

            {
                showDropdown && <Suggesstions handleClick={handleClick} data={filterUsers} />
            }
        </div>
    );
}