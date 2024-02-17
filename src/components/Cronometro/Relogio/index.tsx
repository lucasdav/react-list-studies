import style from './Relogio.module.scss'

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0}: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    // abaixo para desestruturar array de string tsconfig.json e dentro do compilerOptions, 
    // logo abaixo da linha de código de "jsx": "react-jsx" incluir "downleveliteration": true
    const [minutoDezena, minutoUnidade] = String(minutos)
    // Abaixo no padStart()
    //permite que tenhamos uma cadeia de caracteres padrão e se não tiver o número mínimo de cadeia de caracteres, 
    //ele pega esses valores e transforma em padrão. Por exemplo, se queremos que a cadeia de caracteres mínima de 
    //um minuto seja de 2 caracteres e que o valor padrão que esteja no início seja zero, ele vai fazer isso para nós. 
    //Por exemplo, se for 1 ele transforma em "01" e se for 25 ele vai manter "25"
    //O padStart() aceita dois parâmetros, o primeiro é qual o tamanho (length) padrão dessa cadeia de caracteres, 
    //que no caso vai ser 2, para dois caracteres. O segundo parâmetro é qual o caractere default que queremos que 
    //tenha lá, aqui o padrão será 0
    .padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos)
    .padStart(2, '0');
    return(
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}