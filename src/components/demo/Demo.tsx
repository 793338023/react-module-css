import style from './demo.module.scss'
interface Props {
    
}

const Demo = (props: Props) => {
    return (
        <div className={style['demo-wrapper']}>
            123
            <div className={style['demo-ee']}>vvv</div>
        </div>
    )
}

export default Demo
