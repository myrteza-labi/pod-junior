import React from 'react'; 
import './TextPresentation.css'; 

function TextPresentation(props){
    return(
        <section className="TextPresentation" >
            <h1 className="textPresentationTitle" >
                <span className="lightText">Publish your podcasts</span> everywhere.
            </h1>
            <p className="textPresentationParagraph" >
                Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
                Apple Podcasts, Google Podcasts, Pocket Casts and more!
            </p>

        </section>
    )
}

export default TextPresentation; 