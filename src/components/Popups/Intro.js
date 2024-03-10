import './popups.css'

const Intro = ({ setShowIntro }) =>
{
    return(
        <div className="intro">
            <div>
                <h1>Guide</h1>
                <p>To navigate throught the scene you can <span>drag your mouse</span> or your touch screen to rotate it.</p>
                <p>You can <span>click on any of the images</span> to view a detailed summary of the project.</p>
                <button onClick={()=>{setShowIntro(false)}}>X</button>
            </div>
        </div>
    )
}

export default Intro