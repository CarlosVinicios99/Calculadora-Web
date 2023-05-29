import { FunctionComponent } from "react";
import CorBotao from "./CorBotao";
import "./css/botao.css"

interface BotaoProps {
    rotulo: string,
    cor: CorBotao,
    pressionar: (rotulo: string) => void
}

const Botao: FunctionComponent<BotaoProps> = (props: BotaoProps) => {

    function clicarBotao(){
        props.pressionar(props.rotulo)
    }

    return (
        <button className={props.cor === CorBotao.CINZA ? "botao-cinza": "botao-verde"} onClick={clicarBotao}>
            {props.rotulo}
        </button>
    )
}

export default Botao