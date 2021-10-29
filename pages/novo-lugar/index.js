import LugarForm from '../../components/lugar/LugarForm'
const NovoLugarPage = () => {

    const onAdicionarLugar = (lugar)   => {
        console.log(lugar)
    }
    return (
        <LugarForm onAdicionarLugar={onAdicionarLugar}/>
    )
}

export default NovoLugarPage