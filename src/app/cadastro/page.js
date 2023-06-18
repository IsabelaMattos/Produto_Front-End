'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_cadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            data_cadastro: data_cadastro,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3001/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <i><input
                    type="text"
                    placeholder='Titulo:'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                /></i><br/>
                <i><input
                    type="date"
                    placeholder='Data de cadastro:'
                    nome="data_cadastro"
                    onChange={e => setData_cadastro(e.target.value)}
                /></i><br/>
                <i><input
                    type="number"
                    placeholder='Preço:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                /></i><br/>
                <i><input
                    type="text"
                    placeholder='Descrição:'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                /></i><br/>
                <i><input
                    type="link"
                    placeholder='Imagem:'
                    nome="imagem"
                    onChange={e => setImagem(e.target.value)}
                /></i><br/>
                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}