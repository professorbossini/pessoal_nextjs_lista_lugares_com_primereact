const LugarDetalhes  = ({foto, titulo, descricao}) => {
    return(

    <div className="align-items-center flex-column flex m-3 border border-round border-1 border-400 p-2">
            <div>
                <img className="border border-round" src={foto} alt={titulo} width={400}/>
            </div>
            <p className="text-center sm:text-base md:text-lg lg:text-3xl">{descricao}</p>
        </div>
    )
}

export default LugarDetalhes