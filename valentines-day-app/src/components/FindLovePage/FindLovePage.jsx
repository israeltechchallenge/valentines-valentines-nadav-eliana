import React from 'react'
import UserList from './UserList'

function FindLovePage() {
    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <h1 className='p-5'>Find Your Match!</h1>
                <UserList />
            </div>
        </>
    )
}

export default FindLovePage