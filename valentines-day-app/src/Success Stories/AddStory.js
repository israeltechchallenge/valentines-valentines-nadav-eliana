
function AddStory({storyText, updateStoryText, person1Name, updatePerson1Name, person2Name, updatePerson2Name, imgSrc, updateImgSrc, saveStory, buttonDisabled}){

    return(
        <div className="text-center">
            <h4>Add Your Story</h4>
            <div>
                <textarea value={storyText} onChange={updateStoryText} type='text' placeholder="What's your story?"/>
            </div>
            <div>
                <input placeholder="Your Name" type='text' value={person1Name} onChange={updatePerson1Name}/>
                <input placeholder="Your Partner's Name" type='text' value={person2Name} onChange={updatePerson2Name}/>
            </div>
            <div>
                <input type="url" placeholder="Add an Image" value={imgSrc} onChange={updateImgSrc}/>
            </div>
            <button className="btn btn-primary" disabled={buttonDisabled} onClick={saveStory}>Add Your Story</button>
        </div>
    )
}

export default AddStory;