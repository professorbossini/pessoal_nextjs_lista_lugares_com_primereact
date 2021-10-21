const LugarItem = ({titulo, foto, endereco, descricao}) => {
    return (
        <div className="align-items-center flex-column flex m-3 border border-round border-1 border-400">
            <p className="text-center sm:text-base md:text-lg lg:text-3xl">{titulo}</p>
            <div>
                <img className="border border-round" src={foto} alt={titulo} width={400}/>
            </div>
            <address className="text-center text-xs md:text-sm lg:text-base ">{endereco}</address>
            <p className="p-2 text-justify text-center text-xs md:text-sm lg:text-base">
                {descricao}
            </p>
        </div>
    )
}

export default LugarItem