export default function FaqQuestion (){
    return(
        <div className="faqs-custom-question">
            <form className='faqs-custom-question-form' name="faq-question" method="post">
                <label>What's your question?</label>
                <input type="text" />
            </form>
                
            <button type="submit">Ask</button>
        </div>
    )
}