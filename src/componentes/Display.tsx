import { FunctionComponent } from "react";
import "./css/display.css"

interface DisplayProps {
    conteudo?: string
}

const Display: FunctionComponent<DisplayProps> = (props: DisplayProps) => {

    return (
        <div className="display">
            {props.conteudo}
        </div>
    )
}

export default Display