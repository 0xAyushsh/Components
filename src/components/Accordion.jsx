import { useState } from "react";
import './Accordion.css'

const Accordion = ({item})=>{

    const [onShow , setOnShow] = useState(false);
    const onSelect = (display)=>
    {  
        setOnShow(!display);
    }


    return(
        <div className="wrapper" style={{marginLeft: '10px'}}>
            <div className="item fade-in" onClick={()=>onSelect(onShow)}>
                <h4 >{item.item}</h4>
                <span>{item.child && (onShow ? '-' : '+')}</span>
            </div>
            {
                onShow ? item.child ? item.child.map((children)=>(<Accordion item={children} />)) : <></> : <></>
            }
        </div>
    );

};

export default Accordion;
