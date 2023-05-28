import { FunctionComponent } from "react";

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