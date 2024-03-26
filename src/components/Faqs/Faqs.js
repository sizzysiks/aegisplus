import './faqs.css'

import { CiCirclePlus } from "react-icons/ci";

export default function Faqs (){
    return(
        <section className="faqs">
            <div className="reviews-top">
                <h1 className='page-type'>What are you curious about?</h1>

                <div className="faqs-container">
                    <div>
                        <span><CiCirclePlus /></span>
                        <div>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>

                    <div>
                        <span><CiCirclePlus /></span>
                        <div>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>

                    <div>
                        <span><CiCirclePlus /></span>
                        <div>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>

                    <div>
                        <span><CiCirclePlus /></span>
                        <div>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>

                    <div>
                        <span><CiCirclePlus /></span>
                        <div>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}