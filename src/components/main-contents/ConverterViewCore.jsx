import React, { useState } from 'react'
import './ConverterViewCore.css'

import { Editor, EditorState } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import { stateFromHTML } from 'draft-js-import-html'

import LoadComponent from '../template/LoadComponent'

import axios from 'axios'

const INITIAL_STATE = {
    convertedText: '',
    readOnly: false,
    loadMsg: 'Convertendo'
}

function ConverterViewCore(props) {

    const [data, setData] = useState(INITIAL_STATE)
    const [editorData, setEditorData] = useState(EditorState.createEmpty())
    const [loadOn, setLoadOn] = useState(false)

    const serverSideConvert = _ => {
        setLoadOn(true)
        const currentContet = editorData.getCurrentContent()
        const text = stateToHTML(currentContet)
        const settings = {
            to: localStorage.getItem('convertFor') || 'hiragana',
            mode: localStorage.getItem('convertAs') || 'normal'
        }

        axios.post('http://10.0.0.180:3001/converter', { text, settings })
            .then(resp => {
                // setEditorData(EditorState.createWithContent(convertedSatate))
                setData({ ...data, readOnly: true, convertedText: resp.data })
                setLoadOn(false)
            })
            .catch(err => {
                setData({ ...data, loadMsg: 'Erro na conversão tente mais tarde' })
                setTimeout(_ => {
                    setLoadOn(false)
                    setData({...data, loadMsg: 'Convertendo' })
                }, 1500)
            })
    }

    const clear = _ => {
        setEditorData(EditorState.createEmpty())
        setData({ ...data, readOnly: false, convertedText: '' })
    }

    const editCurrentContent = _ => {
        setData({ ...data, readOnly: false, convertedText: '' })
    }

    return (
        <div className="converter-view-core">
            <div className="btn btn-group d-flex m-0 p-0 border-0 buttons">
                <button className="btn btn-secondary first-button" onClick={editCurrentContent}>Editart</button>
                <button className="btn btn-secondary border-left rounded-0 " onClick={serverSideConvert}>Converter</button>
                <button className="btn btn-secondary border-left last-button" onClick={clear}>Linpar</button>
            </div>
            {loadOn && <LoadComponent msg={data.loadMsg} />}
            {!loadOn && <div className="text-fild p-2">
                {!data.readOnly && <Editor editorState={editorData} onChange={setEditorData} readOnly={data.readOnly} />}
                {data.readOnly && <div className="viewdive" dangerouslySetInnerHTML={{ __html: data.convertedText }} ></div>}
            </div>}
        </div>
    )
}

export default ConverterViewCore