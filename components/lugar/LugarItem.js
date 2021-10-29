import { useRouter } from 'next/router'
import { Button } from 'primereact/button'
const LugarItem = ({titulo, foto, endereco, id}) => {
    const router = useRouter()
    const exibirDetalhes = () => {
        //empilha uma nova página na pilha de navegação
        //observe que, seja lá qual for o id, a página definida em [lugarID]/index.js
        router.push(`/${id}`)
    }
    return (
        <div className="align-items-center flex-column flex m-3 border border-round border-1 border-400 p-2">
            <p className="text-center sm:text-base md:text-lg lg:text-3xl">{titulo}</p>
            <div>
                <img className="border border-round" src={foto} alt={titulo} width={400}/>
            </div>
            <address className="text-center text-xs md:text-sm lg:text-base mb-2">{endereco}</address>
            <Button 
               label="Ver detalhes"
               onClick={exibirDetalhes}
            />
        </div>
    )
}

export default LugarItem