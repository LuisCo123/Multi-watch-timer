import '../App.css'
const Formulario = (props) =>{
    return(
        <div className="div-form">
            <form className="formulario" onSubmit={(e)=>{props.handleFict(e)}}>
                <h3>Insira uma Data fictícia</h3>
                <span className="explicacao">Para ter informações de um determinado horário em uma determinada Localização do mundo escolha a data/hora e a localização, ao clicar no Enviar fictícia a data irá se transformar na data fictícia, clique no resetar para voltar ao horário padrão.</span>
                <input type="datetime-local" id="data"/>
                <label from ="estado">Localização do Horário fictício</label>
                <input id="estado" type="text" name="city" list="stateName"/>
                <datalist id="stateName">
                    {props.listarPaises}
                </datalist>
                <div className="botao-form">
                    <button type="button"className="botao" onClick={() => props.setFict(false)}>Resetar Timer</button>
                    <button className="botaoSubmit" type="submit" onClick={()=>props.setFict(true)}>Enviar fictícia</button>
                </div>
            </form>
        </div>
    )
}
export default Formulario