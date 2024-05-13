import './pages.css'

import Nav from '../components/Nav/Nav'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'

export default function Terms ({ sidebarIsOpen, setSidebarIsOpen }){
    return(
        <div className="terms">
            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}

            <div className="terms-wrapper">
                <div className="terms-top">
                    <h1>Welcome to Aegis!</h1>
                    <p>These terms govern your use of our website and services. By accessing or using our website or services, you agree to these terms. Please read them carefully.</p>
                </div>

                <div className='terms-content'>
                    <h2>Services Offered</h2>
                    <p>Aegis offers a range of web design, development, and maintenance services tailored to meet our clients' needs.</p>
                </div>

                <div className='terms-content'>
                    <h2>Payment Terms</h2>
                    <p>Clients agree to pay Aegis according to the agreed-upon payment terms. Invoices are due upon receipt, and late payments may incur additional fees.</p>
                </div>

                <div className='terms-content'>
                    <h2>Refund Policy</h2>
                    <p>Refunds are provided at the discretion of Aegis, with consideration given to the circumstances surrounding the request. Refunds may not be available for certain services or after work has commenced.</p>
                </div>

                <div className='terms-content'>
                    <h2>Intellectual Property Rights</h2>
                    <p>Upon completion of the project and full payment, ownership of the website design and content transfers to the client. Aegis retains the right to showcase the work in our portfolio.</p>
                </div>

                <div className='terms-content'>
                    <h2>Timeline and Delivery</h2>
                    <p>Project timelines and deadlines will be outlined in the project proposal. Aegis will deliver completed work according to the agreed-upon schedule.</p>
                </div>

                <div className='terms-content'>
                    <h2>Privacy Policy</h2>
                    <p>Please refer to our Privacy Policy for information on how we collect, use, and protect personal information</p>
                </div>

                <div className='terms-content'>
                    <h2>Limitation of Liability</h2>
                    <p>Aegis shall not be liable for any damages or losses incurred by the client as a result of using our services.</p>
                </div>

                <div className='terms-content'>
                    <h2>Termination Clause</h2>
                    <p>Either party may terminate the agreement with written notice. Termination may result in additional fees or obligations, as outlined in the project proposal.</p>
                </div>

                <div className='terms-content'>
                    <h2>Governing Law</h2>
                    <p>These terms are governed by the laws of England. Any disputes arising from these terms shall be resolved in the courts of England.</p>
                </div>

                <div className='terms-content'>
                    <h2>Changes to Terms</h2>
                    <p>[Your Agency Name] reserves the right to update or modify these terms at any time. Clients will be notified of any changes.</p>
                </div>

                <div className='terms-content'>
                    <h2>Contact Information</h2>
                    <p>If you have any questions or concerns about these terms, please contact us at [Your Contact Information].</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}