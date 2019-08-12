import React, { useState } from 'react'
import './Settings.css'

import RadioButtons from '../template/RadioButtons'

function Settings(props) {

    const INITIAL_STATE = {
        convertFor: localStorage.getItem('convertFor') || 'hiragana',
        convertAs: localStorage.getItem('convertAs') || 'normal',
        convertOffline: localStorage.getItem('convertOffline') || false
    }

    const [data, setData] = useState(INITIAL_STATE)

    const setConvertFor = convertFor => {
        localStorage.setItem('convertFor', convertFor)
        setData({ ...data, convertFor })
    }

    const setConvertAs = convertAs => {
        localStorage.setItem('convertAs', convertAs)
        setData({ ...data, convertAs })
    }

    return (
        <div className="settings w-100 h-100 m-0">
            <div className={`settings h-100 border-0 rounded-0 ${props.style}`}>
                <div className="card-header">
                    <h3>Configurações</h3>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Configuração de Conversão</h5>
                    <div className="row">
                        <RadioButtons title="Converter para" name="converterPara" value={data.convertFor} options={['Hiragana', 'Katakana', 'Romaji']} values={['hiragana', 'katakana', 'romaji']} function={setConvertFor} />
                        <RadioButtons title="Converter como" name="converterComo" value={data.convertAs} options={['Normal', 'Spaced', 'Okurigana', 'Furigana']} values={['normal', 'spaced', 'okurigana', 'furigana']} function={setConvertAs} />
                        <RadioButtons title="Converter Offline (em construção)" name="converterOffline" value={data.convertOffline} options={['Sim', 'Não']} values={[true, false]} disabled={true} />
                    </div>
                    <h5 className="card-title">Configuração de Cores e Tamanhos</h5>
                    <div className="row">
                        <RadioButtons title="Tema" name="theme" value={props.theme} options={['Dark', 'Light']} values={['dark', 'light']} function={props.setTheme} />
                        {/*<RadioButtons title="Cor da Fonte" name="textColor" valuesOn={props.sty} options={['Preto', 'Branco', 'Cinza']} values={['text-dark','text-light','text-secondary']} function={props.changeTheme} />*/}
                        <RadioButtons title="Tamanho da Fonte" name="fontSize" value={props.fontSize} options={['Pequeno', 'Normal', 'Grande']} values={['small-size', 'normal-size', 'big-size']} function={props.changeFontSize} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings