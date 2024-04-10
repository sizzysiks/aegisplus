import './intro.css'

export default function Intro (){
    return(
        <section className="intro">
            <h1 className='page-title'>01 - About us</h1>

            <div className='intro-content-wrapper'>
            <div className='intro-content'>
                <p>Welcome to Aegis, where digital dreams take flight.</p>
                <small>We specialize in crafting distinctive online identities for businesses, ensuring your brand stands out from the crowd. Say goodbye to cookie-cutter websites with countless online duplicates.</small>
                <button className='main-btn'>Read more</button>
            </div>

            <div className="stats">
                <div>
                    <p>10+</p>
                    <small>Years of experience</small>
                </div>

                <div>
                    <p>200+</p>
                    <small>Homes transformed</small>
                </div>

                <div>
                    <p>15+</p>
                    <small>Awards won</small>
                </div>

                <div>
                    <p>5+</p>
                    <small>Team experts</small>
                </div>
            </div>
            </div>
        </section>
    )
}