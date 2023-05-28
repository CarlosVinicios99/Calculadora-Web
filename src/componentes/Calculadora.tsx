import { FunctionComponent, useState } from "react";
import Display from "./Display";
import Botao from "./Botao";
import CorBotao from "./CorBotao";


const Calculadora: FunctionComponent = () => {

    const [conteudoDisplay, setConteudoDisplay] = useState<string>("")

    const alterarDisplay = (rotulo: string) => {
        console.log(rotulo)
    }
 
    return (
        <div className="calculadora-container">
            <Display conteudo={conteudoDisplay}/>

            <div className="botoes-container">
                <div className="linha-de-botoes">
                    <Botao rotulo="S" cor={CorBotao.VERDE} pressionar={alterarDisplay}/>
                    <Botao rotulo="C" cor={CorBotao.VERDE} pressionar={alterarDisplay}/>
                    <Botao rotulo="CE" cor={CorBotao.VERDE} pressionar={alterarDisplay}/>
                    <Botao rotulo="÷" cor={CorBotao.VERDE} pressionar={alterarDisplay}/>
                </div>
                <div className="linha-de-botoes">
                    <Botao rotulo="7" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="8" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="9" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="X" cor={CorBotao.VERDE} pressionar={alterarDisplay}/>
                </div>
                <div className="linha-de-botoes">
                    <Botao rotulo="4" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="5" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="6" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="-" cor={CorBotao.VERDE} pressionar={alterarDisplay}/>
                </div>
                <div className="linha-de-botoes">
                    <Botao rotulo="1" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="2" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="3" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="+" cor={CorBotao.VERDE} pressionar={alterarDisplay}/>
                </div>
                <div className="linha-de-botoes">
                    <Botao rotulo="0" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="." cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="+/-" cor={CorBotao.CINZA} pressionar={alterarDisplay}/>
                    <Botao rotulo="=" cor={CorBotao.VERDE} pressionar={alterarDisplay}/>
                </div>
            </div>
        </div>
    )
}

export default Calculadora

