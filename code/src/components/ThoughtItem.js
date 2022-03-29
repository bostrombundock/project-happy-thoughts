import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onIncreaseLikes }) => {

    return (
        <section>
        <div className='thought-container'>
            <p className='thought-message'> {thought.message} </p>

            <div className='like-container' >
                <button
                    className={thought.hearts > 0 ? "heart-btn liked" : "heart-btn"}
                    onClick={() => onIncreaseLikes(thought._id)} 
                >
                    <span role="img" aria-label="like-heart">
                    💗
                    </span>
                </button>

                <p className="likes">x {thought.hearts}</p>
            </div>
            <div className="date">{moment(thought.createdAt).fromNow()}</div>

        </div>
        </section>
    )
}




export default ThoughtItem;

