import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corDoFundo }

    return (
        (props.employee.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corDaFonte }} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.employee.map(colaborador => <Colaborador cor={props.corDaFonte} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
        : ''
    )
}

export default Time