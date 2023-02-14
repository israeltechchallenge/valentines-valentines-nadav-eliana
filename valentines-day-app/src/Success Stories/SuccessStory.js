import './SuccessStory.css';

function SuccessStory(props){
    // {imgSource, person1, person2, story}
    const person1 = props.props.person1;
    const person2 = props.props.person2;
    const imgSource = props.props.imgSrc;
    const story = props.props.story;
    return(
        <div className="d-flex justify-content-center mt-2 me-2">
            <div className="card">
                <img className='card-img-top' src={imgSource}/>
                <div className="card-body">
                    <h5 className="card-title">{person1} and {person2}</h5>
                    <p className="card-text">{story}</p>
                </div>
            </div>
        </div>
    )
}

export default SuccessStory;
