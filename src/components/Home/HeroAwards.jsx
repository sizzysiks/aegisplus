import aw from '../../assets/awards/aw.webp'
import award from '../../assets/awards/cssda-special-kudos-black.png'

export default function HeroAwards (){
    return(
        <div className="awards">
            <div className="awards-img"><img src={aw} alt="awwwards" /></div>
            <div className="awards-div" id="awards-div-1"></div>
            <div className="awards-div" id="awards-div-2"></div>
            <div className="awards-div" id="awards-div-3"></div>
            <small>Globally recognized</small>

            <div className="award">
                <img src={award} alt="css-design-awards-special-kudos" />
            </div>
         </div>      
    )
}