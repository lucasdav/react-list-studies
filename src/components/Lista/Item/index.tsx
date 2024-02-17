import style from './Item.module.scss'
import { ITarefa } from '../../../types/tarefa';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
    {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: Readonly<Props>) {

    return(
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
            onClick={() => !completado && selecionaTarefa({
                tarefa, 
                tempo, 
                selecionado, 
                completado, 
                id
            })}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {/* abaixo uso do && para renderização condicional se completado não for null ou undefined rederiza o elemento */}
            {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
        </li>
    )
}