import React, { useState, useEffect } from 'react'
import "../App.css"
import Moment from 'moment-timezone'
import Hora from './Hora'
import Formulario from './Formulario'
import logoWatch from './watch.png'
const Time = () => {
    const paises = Moment.tz.names();
    const [listEstado, setestado] = useState([]);
    const [currentHour, setCurrentHour] = useState(Moment.tz("America/Bahia"));
    const [fictHour, setFictHour] = useState(false);
    const handleFict = (e) => {
        e.preventDefault();
        if(e.target.data.value.length && e.target.estado.value.length)
            setCurrentHour(Moment.tz(e.target.data.value,e.target.estado.value));
        else
            alert("Data ou Localização Invalido")    
    }
    const handleEstado = (e) => {
        if (!listEstado.includes(e.target.value) && e.target.value.length)
            if(paises.includes(e.target.value))
                setestado([...listEstado, e.target.value]);
        else
            alert("Não é Possivel Selecionar");
    }
    const removeList = (item) => {
        setestado(listEstado.filter((estado) => {
            return estado !== item
        }))
    }
    const listarPaises = () => {
        return (
            (paises.map((pais) => {
                return (
                    <option>{pais}</option>
                )
            }))
        )
    }
    const formatDate = (tempo) => {
        if(fictHour){
            return tempo.format();
        }else{
        return (`${tempo.hour() >= 10 ? tempo.hour() : "0" + tempo.hour()} : 
        ${tempo.minute() >= 10 ? tempo.minute() : "0" + tempo.minute()} :
        ${tempo.second() >= 10 ? tempo.second() : "0" + tempo.second()}`)
        }
    }
    useEffect(() => {
        if (!fictHour)
            setCurrentHour(Moment.tz("America/Bahia"));
    }, [currentHour, fictHour])
    return (
        <div className="wathcer">
            {/* TITULO COM O ELEMENTO DE SELECT */}
            <section className='title'>
                <h1>
                    <img class="logoWatch" src={logoWatch} alt="logo do projeto" />
                    Times
                    <img class="logoWatch" src={logoWatch} alt="logo do projeto" />
                </h1>
                <input id="estado" type="text" name="city" list="stateName" onBlur={handleEstado} />
                <datalist id="stateName">
                    {listarPaises()}
                </datalist>
            </section>
            {/* SECTION ONDE MOSTRA A DATA LOCAL OU FICTICIA */}
            <section className="currentDate">
                <h2>
                    {fictHour ? "Hora Ficticia" : "Zona Local: "}
                    
                </h2>
                <h2 >{fictHour ? "" : "America/Bahia"}</h2>
                <h2>{formatDate(currentHour)}</h2>
                <Formulario handleFict={handleFict} listarPaises={listarPaises} setFict={setFictHour}/>
            </section>
            {/* LISTA DE FUSOS HORARIOS */}
            <section className="time-list">
                {listEstado.length ? listEstado.map((estado) =>
                    <Hora nomeEstado={estado} handleRemove={removeList} formatDate={formatDate} currentHour={currentHour}/>
                ) : ""}
            </section>
        </div>
    )
}
export default Time