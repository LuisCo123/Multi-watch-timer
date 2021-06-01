// import Moment from 'moment-timezone'
import '../App.css'
import watch from './watch.png'
const Hora = (props)=>{
    let hour = props.currentHour.clone().tz(props.nomeEstado); 
    return(
        <div className="ZoneTime">
            <h3 class="name">{props.nomeEstado}</h3>
            <h4 class ="hora">
                <img class="watch" src={watch} alt="logo do projeto"/>
                {props.formatDate(hour)}</h4>
            <button className="botao" onClick={(e)=>{props.handleRemove(e.target.parentNode.firstChild.textContent)}}>X</button>
            
        </div>
    )
}
export default Hora