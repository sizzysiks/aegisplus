export default function Faq ({ title, text, id, activeFaq, setActiveFaq }){
    return(
        <div className={`${activeFaq === id? "faq-active": "faq"}`} onClick={()=>{ setActiveFaq(id) }}>
            <span>
                <div className='plus-line'></div>
                <div className={`${activeFaq === id? "plus-line": "plus-line-hidden"}`}></div>
            </span>
            <div>
                <p>{title}</p>
                {activeFaq === id? 
                <small>{text}</small>
                : ""}
            </div>
        </div>
    )
}