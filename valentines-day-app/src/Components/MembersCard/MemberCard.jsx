import React from "react";
import './MemberCard.css'

function MemberCard({name, position, story, img}) {
  return (
    <div className="MainContainerCard">
        <img src="img"/>
        <div className="descriptionCard">
            <h6>
               Name: {name}
            </h6>
            <h6>
                Position: {position}
            </h6>
            <h6>
                Your valentine story: {story}
            </h6>
        </div>
    </div>
  );
}

export default MemberCard
