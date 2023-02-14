import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import AddStory from "./AddStory";
import SuccessStory from "./SuccessStory";

function SuccessPage(){
    const [successStories, setSuccessStories] = useState([{
        person1: 'Six',
        person2: 'Seven',
        imgSrc: 'https://thumbs.dreamstime.com/b/two-hearts-wooden-background-valentine-day-wedding-love-concept-shape-white-ribbon-as-joined-couple-49015942.jpg',
        story: `6 and 7's relationship started out complicated due to fear. However, on our site, six learned more about seven's other sides, and their relationship blossomed.`
        }]);
    const [storyText, setStoryText] = useState('');
    const [person1, setPerson1] = useState('');
    const [person2, setPerson2] = useState('');
    const [imgSrc, setImgSrc] = useState(`https://www.shutterstock.com/image-vector/2-linked-hearts-3-smaller-260nw-269356313.jpg`);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    function updateStoryText(event){
        setStoryText(event.target.value);
        if(storyText !== '' && person1 !== '' && person2 !== ''){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }
    function updatePerson1Name(event){
        setPerson1(event.target.value)
        if(storyText !== '' && person1 !== '' && person2 !== ''){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }
    function updatePerson2Name(event){
        setPerson2(event.target.value)
        if(storyText !== '' && person1 !== '' && person2 !== ''){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }
    function updateImgSrc(event){
        setImgSrc(event.target.value)
    }
    function saveStory(){
        const newStory = {
            person1: person1,
            person2: person2,
            story: storyText,
            imgSrc: imgSrc
        }
        successStories.push(newStory);
        setSuccessStories(successStories);
        setButtonDisabled(true);
        setPerson1('');
        setPerson2('');
        setImgSrc('`https://www.shutterstock.com/image-vector/2-linked-hearts-3-smaller-260nw-269356313.jpg`');
        setStoryText('');

    }
    return(
        <div>
            <div>
                <AddStory storyText={storyText} updateStoryText={updateStoryText} person1Name={person1} person2Name={person2} updatePerson1Name={updatePerson1Name} updatePerson2Name={updatePerson2Name} imgSrc={imgSrc} updateImgSrc={updateImgSrc} saveStory={saveStory} buttonDisabled={buttonDisabled}/>
            </div>
            <div className="d-flex flex-wrap">
            {successStories.map((item, index) => {
                return <SuccessStory key={index} props={item}/>
            })}
            </div>
        </div>
    )
}

export default SuccessPage;