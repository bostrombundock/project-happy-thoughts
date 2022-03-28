import React from "react";

const ThoughtForm = ({ newThought, setNewThought, onFormSubmit }) => {


    return (
        <form onSubmit={onFormSubmit}>
            <h1>What's making you happy right now? </h1>
            <textarea
                className="text-input"
                value={newThought}
                onChange={(event) => setNewThought(event.target.value)}
                type="text"
                id="newThought"
            />

            <button
                disabled={newThought.length < 5 || newThought.length > 140}
                type="submit"
                className="submit-button"
            >
                <span role="img" aria-label=" like-heart"> 💗 </span>
                Send happy thougths
                <span role="img" aria-label="like-heart"> 💗 </span>
            </button>
        </form>

    )
}

export default ThoughtForm;