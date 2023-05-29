import { FunctionComponent, useState } from "react";
import Display from "./Display";
import Botao from "./Botao";
import CorBotao from "./CorBotao";
import "./css/calculadora.css"


const Calculadora: FunctionComponent = () => {

    const [conteudoDisplay, setConteudoDisplay] = useState<string>("")

    const alterarDisplay = (conteudo: string): void => {
        setConteudoDisplay(conteudo)
    }

    const ultimoValorDoDisplayEhUmNumero = (): boolean => {
        const numero = Number(conteudoDisplay.charAt(conteudoDisplay.length - 1))
        return !isNaN(numero)
    }

    const obterRotuloDoBotao = (rotulo: string): void => {
        if(rotulo === "0"){
            if(conteudoDisplay.length === 1 && conteudoDisplay.includes("0")){
                alterarDisplay("0")
            }
            else{
                alterarDisplay(conteudoDisplay.concat(rotulo))
            }
        }

        else if(conteudoDisplay === "0" && (rotulo === "-" || !isNaN(Number(rotulo)))){
            alterarDisplay(rotulo)
        }

        else if(!isNaN(Number(rotulo))){
            alterarDisplay(conteudoDisplay.concat(rotulo))
        }

        else {
            switch(rotulo){
                case "x": 
                case "÷": 
                case "-": 
                case "+":
                    if(conteudoDisplay.length === 0 && rotulo !== "-"){
                        alterarDisplay("")
                    }

                    else if(conteudoDisplay === "0" && rotulo !== "-"){
                        alterarDisplay("0")
                    }

                    else if(ultimoValorDoDisplayEhUmNumero()){

                        if(conteudoDisplay.includes("+")){
                            const valores: Array<string> = conteudoDisplay.split("+")
                            const valor1: number = Number(valores[0])
                            const valor2: number = Number(valores[1])
                            const soma: number = valor1 + valor2
                            alterarDisplay(soma.toString() + rotulo)
                        }

                        else if(conteudoDisplay.includes("-") && conteudoDisplay.split("-").length > 2){
                            if(conteudoDisplay.charAt(0) === "-"){
                                const conteudoSemMenosInicial = conteudoDisplay.slice(1)
                                const valores: Array<string> = conteudoSemMenosInicial.split("-")
                                const valor1: number = Number(valores[0]) 
                                const valor2: number = Number(valores[1])
                                const subtracao: number = (-valor1) - valor2
                                alterarDisplay(subtracao.toString() + rotulo)
                            }
                            else{
                                const valores: Array<string> = conteudoDisplay.split("-")
                                const valor1: number = Number(valores[0])
                                const valor2: number = Number(valores[1])
                                const subtracao: number = valor1 - valor2
                                alterarDisplay(subtracao.toString() + rotulo)
                            }
                        }
    
                        else if(conteudoDisplay.includes("x")){
                            const valores: Array<string> = conteudoDisplay.split("x")
                            const valor1: number = Number(valores[0])
                            const valor2: number = Number(valores[1])
                            const multiplicacao: number = valor1 * valor2
                            alterarDisplay(multiplicacao.toString() + rotulo)
                        }
    
                        else if(conteudoDisplay.includes("÷")){
                            const valores: Array<string> = conteudoDisplay.split("÷")
                            const valor1: number = Number(valores[0])
                            const valor2: number = Number(valores[1])
                            const divisao: number = valor1 / valor2
                            alterarDisplay(divisao.toString() + rotulo)
                        }

                        else{
                            alterarDisplay(conteudoDisplay.concat(rotulo))
                        }
                    }            
                    break
                
                case ".":
                    if(ultimoValorDoDisplayEhUmNumero()){
                        alterarDisplay(conteudoDisplay.concat(rotulo))
                    }
                    break
                case "+/-":
                    const novoValor: number = (Number(conteudoDisplay)) * (-1)
                    if(!isNaN(novoValor)){
                        alterarDisplay(novoValor.toString())
                    }
                    break

                case "=":
                    if(ultimoValorDoDisplayEhUmNumero()){
                        if(conteudoDisplay.includes("+")){
                            const valores: Array<string> = conteudoDisplay.split("+")
                            const valor1: number = Number(valores[0])
                            const valor2: number = Number(valores[1])
                            const soma: number = valor1 + valor2
                            alterarDisplay(soma.toString())
                        }

                        else if(conteudoDisplay.includes("-") && conteudoDisplay.split("-").length > 1){
                            
                            if(conteudoDisplay.charAt(0) === "-" && conteudoDisplay.split("-").length > 2){
                                const conteudoSemMenosInicial = conteudoDisplay.slice(1)
                                const valores: Array<string> = conteudoSemMenosInicial.split("-")
                                const valor1: number = Number(valores[0]) 
                                const valor2: number = Number(valores[1])
                                const subtracao: number = (-valor1) - valor2
                                alterarDisplay(subtracao.toString())
                            }
                            else{
                                const valores: Array<string> = conteudoDisplay.split("-")
                                const valor1: number = Number(valores[0])
                                const valor2: number = Number(valores[1])
                                const subtracao: number = valor1 - valor2
                                alterarDisplay(subtracao.toString())
                            }
                        }
    
                        else if(conteudoDisplay.includes("x")){
                            const valores: Array<string> = conteudoDisplay.split("x")
                            const valor1: number = Number(valores[0])
                            const valor2: number = Number(valores[1])
                            const multiplicacao: number = valor1 * valor2
                            alterarDisplay(multiplicacao.toString())
                        }
    
                        else if(conteudoDisplay.includes("÷")){
                            const valores: Array<string> = conteudoDisplay.split("÷")
                            const valor1: number = Number(valores[0])
                            const valor2: number = Number(valores[1])
                            const divisao: number = valor1 / valor2
                            alterarDisplay(divisao.toString())
                        }
                    }

                    break
                
                case "C":
                    alterarDisplay("0")
                    break

                case "CE":
                    if(conteudoDisplay.length >= 1){
                        if(conteudoDisplay.length === 1 && conteudoDisplay.charAt(0) !== "0"){
                            alterarDisplay("0")
                        }
                        else {
                            alterarDisplay(conteudoDisplay.slice(0, -1))
                        }
                    }
                    break
                
                case "S":
                    if(conteudoDisplay === ""){
                        alterarDisplay("0")
                    }
                    else{
                        alterarDisplay("")
                    }
                    break
            }
        }

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
                    <Botao rotulo="x" cor={CorBotao.VERDE} pressionar={obterRotuloDoBotao}/>
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

