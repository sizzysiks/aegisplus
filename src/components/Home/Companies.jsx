import logo1 from '../../images/1.png'
import logo2 from '../../images/2.png'
import logo3 from '../../images/3.jpg'
import logo4 from '../../images/4.png'
import logo5 from '../../images/5.jpg'


const Companies = () =>
{
    return(
        <div className="companies-wrapper">
            {/* <p>They trust us with their business</p> */}
            <div className="companies-logos">
                <div><img src={logo1} alt="" /></div>
                <div><img src={logo2} alt="" /></div>
                <div><img src={logo3} alt="" /></div>
                <div><img src={logo4} alt="" /></div>
                <div><img src={logo5} alt="" /></div>
            </div>
        </div>
    )
}

export default Companies