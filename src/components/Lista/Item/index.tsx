import style from '../Lista.module.scss'
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
    console.log('item atual: ', {tarefa, tempo, selecionado, completado, id})
    return(
        <li className={style.item} onClick={() => selecionaTarefa({
            tarefa, 
            tempo, 
            selecionado, 
            completado, 
            id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}