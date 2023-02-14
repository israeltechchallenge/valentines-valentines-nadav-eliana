import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MessageModal from './MessageModal';

function SingleUser({ user }) {
    const { name, gender , picture , email} = user;
    const [isModal , setIsModal] = useState(false)
    return (
        <div>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={picture.medium}/>
                <Card.Body>
                    <Card.Title>{name.first} {name.last}</Card.Title>
                    <Card.Text>
                        {gender}
                    </Card.Text>
                    <Button onClick={() => setIsModal(true)} variant="primary">Message</Button>
                </Card.Body>
            </Card>
            {isModal ? <MessageModal setIsModal={setIsModal} email={email}/> : ""}
        </div>
    )
}

export default SingleUser