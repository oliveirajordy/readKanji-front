import React, { useState } from 'react'
import './ConverterViewCore.css'

import { Editor, EditorState } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import { stateFromHTML } from 'draft-js-import-html'

// import axios from 'axios'

const INITIAL_STATE = {
    convertedText: '',
    loadOn: false
}

function ConverterViewCore(props) {

    const [data, setData] = useState(INITIAL_STATE)
    const [editorData, setEditorData] = useState(EditorState.createEmpty())

    const convert = _ => {
        const currentContet = editorData.getCurrentContent()
        const text = stateToHTML(currentContet)
        const settings = {
            convertFor: localStorage.getItem('convertFor') || 'hiragana',
            convertAs: localStorage.getItem('convertAs') || 'normal'
        }

        const convertedSatate = stateFromHTML('<br>aaaaa<br>aaaaa')
        console.log(editorData.convertFromRaw(convertedSatate))


        // axios.post('http://localhost:3001/converter', { text, settings })
        //     .then(resp => {
        //         const convertedSatate = stateFromHTML(resp.data)

        //     })
    }

    return (
        <div className="converter-view-core">
            <div className="btn btn-group d-flex m-0 p-0 border-0">
                <button className="btn btn-secondary rounded-0" onClick={convert}>Editart</button>
                <button className="btn btn-secondary border-left">Converter</button>
                <button className="btn btn-secondary rounded-0 border-left border-">Linpar</button>
            </div>
            <div className="text-fild p-2">
                <Editor editorState={editorData} onChange={setEditorData} />
            </div>
        </div>
    )
}

export default ConverterViewCore