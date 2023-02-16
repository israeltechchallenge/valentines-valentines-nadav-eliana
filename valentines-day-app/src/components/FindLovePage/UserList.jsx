import React from 'react'
import { useState, useEffect } from 'react';
import SingleUser from './SingleUser';
import Form from 'react-bootstrap/Form';

function UserList() {
    const [userArray, setUserArray] = useState([]);
    const [selectedArray, setSelectedArray] = useState([]);
    const [isMale, setIsMale] = useState(true);
    const [isFemale, setIsFemale] = useState(true)

    async function fetchFromServer() {
        const URL = 'https://randomuser.me/api/?results=50'

        try {
            const response = await fetch(URL);
            const data = await response.json();
            setUserArray(data.results);
            setSelectedArray(data.results);
            console.log(data.results);
        }
        catch (e) {
            console.log(e)
        }
    };

    function handleChange(e, gender) {
        if (!e.target.checked && gender ==='male') {
            const newArray = userArray.filter((user) => user.gender !== 'male')
            setSelectedArray(newArray);
            setIsMale(current => !current)
        }

        if (e.target.checked && gender ==='male') {
            const newArray = userArray.filter((user) => user.gender === 'male')
            setSelectedArray(newArray);
            setIsMale(current => !current)
        }

        if (!e.target.checked && gender ==='male') {
            const newArray = userArray.filter((user) => user.gender !== 'male')
            setSelectedArray(newArray);
            setIsMale(current => !current)
        }

        if (e.target.checked && gender ==='male') {
            const newArray = userArray.filter((user) => user.gender === 'male')
            setSelectedArray(newArray);
            setIsMale(current => !current)
        }

        gender === 'male' ? setIsMale(current => !current) : setIsFemale(current => !current)
          
    }

    useEffect(() => {
        fetchFromServer();
    }, [])

    return (
        <>
            <div>
                <h3>What are you looking for?</h3>
                <Form>
                    <Form.Check
                        type="switch"
                        id="male-switch"
                        label="Male"
                        defaultChecked={isMale}
                        onChange={(e) => handleChange(e, 'male')}
                    />
                    <Form.Check
                        type="switch"
                        label="Female"
                        id="female-switch"
                        value={isFemale}
                        onChange={(e) => handleChange(e, 'female')}
                    />
                </Form>
            </div>
            <div className='d-flex flex-row' style={{
                maxWidth: '80vw',
                overflow: 'scroll',
            }}>
                {userArray.length ? selectedArray.map((user, index) => {
                    return (<SingleUser user={user} key={index} />)
                }) : ''}
            </div>
        </>
    )
}

export default UserList