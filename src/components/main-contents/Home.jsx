import React from 'react'
import './Home.css'

function Home(props) {

    return (
        <div className={`home`}>
            <h2 className="" >Ler<ruby>漢字<rp>(</rp><rt>kanji</rt><rp>)</rp></ruby></h2>
            <hr className="" />
            <div className="" >
                <p>Uma boa parte das pessoas que estão estudando japonês, seja por curos, autodidata, ou ate aprenderam por acaso com o passar do tempo,
                    possuem dificuldade na leitura dos kanjis. Tanto por serem muitos e ter diferentes formas de serem lidos,
                    ou pela falta de tempo para aprende-los. Porém mesmo sem saber kanji ainda quer ler textos como notícias,
                    artigos, web novels e outros conteúdos em japonês espalhados pela internet.</p>
                <p>LerKanji é um conversor de kanji (em romaji, katakana e hiragana) free que foi construído visando a conversão de
                    grandes e pequenos textos, formatando-os para uma leitura mais limpa.</p>
            </div>
        </div>
    )
}

export default Home