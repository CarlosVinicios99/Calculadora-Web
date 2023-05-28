import { FunctionComponent } from "react";
import CorBotao from "./CorBotao";

interface BotaoProps {
    rotulo: string,
    cor: CorBotao,
    pressionar: () => void
}

const Botao: FunctionComponent<BotaoProps> = (props: BotaoProps) => {

    function clicarBotao(){
        props.pressionar()
    }

    return (
        <button className={props.cor === CorBotao.CINZA ? "botao-cinza": "botao-verde"} onClick={clicarBotao}>
            {props.rotulo}
        </button>
    )
}

export default Botao