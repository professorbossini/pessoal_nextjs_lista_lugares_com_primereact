import LugarDetalhes from "../../components/lugar/LugarDetalhes"

const LugarDetalhesPage = (props) => {
    return (
        <LugarDetalhes
            foto={props.dadosLugar.foto}
            titulo={props.dadosLugar.titulo}
            descricao={props.dadosLugar.descricao}
        />
    )
}

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    //tem que ser lugarID pois a pasta
                    //se chama [lugarID], lembra?
                    lugarID: '1'
                }
            },
            {
                params: {
                    lugarID: '2'
                }
            }
        ]
    }
}

export const getStaticProps = async () => {
    //buscar os dados do lugar a ser exibido de alguma forma
    //uma requisição http talvez
    return {
        props: {
            dadosLugar :{
                //vamos deixar fixo por enquanto, para dar um exemplo
                foto: 'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
                titulo: 'Praça H',
                descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, officiis.'
            }
        }
    }
}

export default LugarDetalhesPage