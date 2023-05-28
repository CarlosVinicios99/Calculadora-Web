import { FunctionComponent, useState } from "react";
import Display from "./Display";
import Botao from "./Botao";
import CorBotao from "./CorBotao";


const Calculadora: FunctionComponent = () => {

    const [conteudoDisplay, setConteudoDisplay] = useState<string>("")

    const ultimoBotaoClicadoEhUmNumero = () => {
        const numero = Number(conteudoDisplay.charAt(conteudoDisplay.length - 1))
        return !isNaN(numero)
    }

    const obterRotuloDoBotao = (rotulo: string) => {
        
        if(!isNaN(Number(rotulo))){
            alterarDisplay(conteudoDisplay.concat(rotulo))
        }
        else {
            switch(rotulo){
                case "X": case "÷": case "-": case "+": case ".":
                    if(ultimoBotaoClicadoEhUmNumero()){
                        alterarDisplay(conteudoDisplay.concat(rotulo))
                    }
                    break
                
                case "+/-":
                    break
                    
                case "=":
                    break
                
                case "C":
                    break

                case "CE":
                    break
                
                case "S":
                    break
            }
        }

    }

    const alterarDisplay = (conteudo: string) => {
        setConteudoDisplay(conteudo)
    }   
 
    return (
        <div className="calculadora-container">
            <Display conteudo={conteudoDisplay}/>

            <div className="botoes-container">
                <div className="linha-de-botoes">
                    <Botao rotulo="S" cor={CorBotao.VERDE} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="C" cor={CorBotao.VERDE} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="CE" cor={CorBotao.VERDE} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="÷" cor={CorBotao.VERDE} pressionar={obterRotuloDoBotao}/>
                </div>
                <div className="linha-de-botoes">
                    <Botao rotulo="7" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="8" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="9" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="X" cor={CorBotao.VERDE} pressionar={obterRotuloDoBotao}/>
                </div>
                <div className="linha-de-botoes">
                    <Botao rotulo="4" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="5" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="6" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="-" cor={CorBotao.VERDE} pressionar={obterRotuloDoBotao}/>
                </div>
                <div className="linha-de-botoes">
                    <Botao rotulo="1" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="2" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="3" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="+" cor={CorBotao.VERDE} pressionar={obterRotuloDoBotao}/>
                </div>
                <div className="linha-de-botoes">
                    <Botao rotulo="0" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="." cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="+/-" cor={CorBotao.CINZA} pressionar={obterRotuloDoBotao}/>
                    <Botao rotulo="=" cor={CorBotao.VERDE} pressionar={obterRotuloDoBotao}/>
                </div>
            </div>
        </div>
    )
}

export default Calculadora

