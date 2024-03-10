import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Privacy ({ sidebarIsOpen, setSidebarIsOpen }){
    return(
        <div className="terms">
            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}

            <div className="terms-wrapper">
                <div className="terms-top">
                    <h1>Privacy Policy</h1>
                    <p>
                        Aegis+ ("us", "we", or "our") operates the www.aegis.plus website (the "Service").
                    </p>
                    <p>
                        This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                        We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
                    </p>
                </div>

                <div className='terms-content'>
                    <h2>Information Collection And Use</h2>
                    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                </div>

                <div className='terms-content'>
                    <h2>Types of Data Collected</h2>
                    <p>Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    {/* <li>Address, State, Province, ZIP/Postal code, City</li> */}
                    <li>Cookies and Usage Data</li>
                </div>

                <div className='terms-content'>
                    <h2>Use of Data</h2>
                    <p>We may use the collected data for various purposes:</p>
                    <li>To provide and maintain our Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To provide customer support</li>
                    <li>To gather analysis or valuable information so that we can improve our Service</li>
                    <li>To monitor the usage of our Service</li>
                    <li>To detect, prevent and address technical issues</li>
                </div>

                <div className='terms-content'>
                    <h2>Transfer Of Data</h2>
                    <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                    If you are located outside the United Kingdom, and choose to provide information to us, please note that we transfer the data, including Personal Data, to United Kingdom and process it there.
                    Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                </div>

                <div className='terms-content'>
                    <h2>Security Of Data</h2>
                    <p>
                    The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is completely foolproof or immune to potential risks. While we employ industry-standard security measures to safeguard your data, including encryption and regular security audits, we cannot guarantee absolute protection. Therefore, we encourage you to remain vigilant and take necessary precautions when sharing sensitive information online.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    )
}