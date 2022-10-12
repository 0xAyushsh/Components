import Accordion from "./Accordion";
import './Components.css';

const Components = ({data})=>{
    console.log(data);
    return(
        <div className="parent">
            {
                data.map((item)=>(
                    <Accordion item={item}/>
                ))
            }
        </div>
    );
}

export default Components;