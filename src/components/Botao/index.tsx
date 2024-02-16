import React, { ReactNode } from 'react';
import style from './Botao.module.scss'


interface BotaoProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset" | undefined
}

class Botao extends React.Component<BotaoProps> {
    
    render() {
        const { type = "button" } = this.props;

        return(
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
        
    }
}

export default Botao;