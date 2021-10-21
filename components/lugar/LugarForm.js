import { useState } from 'react'
import { Button } from 'primereact/button'
const LugarForm = () => {
    const [titulo, setTitulo] = useState('')
    const [foto, setFoto] = useState('')
    const [endereco, setEndereco] = useState('')
    const [descricao, setDescricao] = useState('')
    const submitForm = (e) => {
        e.preventDefault()
    }
    const limparCampos = (e) => {
        e.preventDefault()
        setTitulo('')
        setFoto('')
        setEndereco('')
        setDescricao('')
        
    }

    const cancelar = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={submitForm}>
            <div className="formgrid grid">
                <div className="field col-12 lg:col-6">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} id="titulo" className="inputfield w-full p-2" />
                </div>
                <div className="field col-12 lg:col-6">
                    <label htmlFor="foto">URL da foto</label>
                    <input type="text" value={foto} onChange={(e) => setFoto(e.target.value)} id="foto" className="inputfield w-full p-2" />
                </div>
                <div className="field col-12">
                    <label htmlFor="endereco">Endereço</label>
                    <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} id="endereco" className="inputfield w-full p-2" />
                </div>
                <div className="field col-12">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} className="inputfield w-full p-3" />
                </div>
                <div className="col-12 flex justify-content-end">
                    <span className="p-buttonset">
                        <Button label="Salvar" icon="pi pi-check" />
                        <Button label="Limpar" onClick={limparCampos} icon="pi pi-trash" />
                        <Button label="Cancelar" onClick={cancelar} icon="pi pi-times" />
                    </span>
                </div>
            </div>
        </form>
    )
}

export default LugarForm