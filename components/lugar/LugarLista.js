import LugarItem from './LugarItem'
const LugarLista = ({lugares}) => {
    
    
  
   return lugares.map(lugar => (
        <LugarItem 
        titulo={lugar.titulo}
        foto={lugar.foto}
        endereco={lugar.endereco}
        descricao={lugar.descricao}
    />
   ))
}

export default LugarLista