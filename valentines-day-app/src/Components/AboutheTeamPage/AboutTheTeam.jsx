import react, { useState } from 'react';
import MemberCard from '../MembersCard/MemberCard';
import './AboutTeam.css';

function AboutTheTeam () {

    const [membersArray, setMembersArray] = useState([{
        name:'Itay',
        position: 'Web-developper',
        ValentineStory: '',
        img: ''

    }, 
    {
        name:'Sam',
        position: 'Web-developper',
        ValentineStory: '',
        img: ''

    },
    {
        name:'Nadav',
        position: 'Web-developper',
        ValentineStory: '',
        img: ''
    },{
        name:'Eliana',
        position: 'Web-developper',
        ValentineStory: '',
        img: ''
    },
]);

    return(
        <div>
            <h1>Get to know our team!</h1>
            <div className='AboutPageContainer'>
                {membersArray.map(member=> <MemberCard name={member.name} position={member.position} story={member.story} img={member.img}/>)}
            </div>
        </div>
    )
}
export default AboutTheTeam