import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import React, { useState } from 'react';
import { ContentState } from "draft-js";
import { convertFromHTML } from "draft-js";

const DraftEditor = (props) => {
    console.log(props.content)
    const htmlDecode = (input) => {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
      }
    const [inputContent, setInputContent] = useState("");
    const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(props.content))));
    
    return (<div>
        <Editor toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editor-box"
            onEditorStateChange={setEditorState}
            editorState={editorState}
            onChange={() => {props.setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))}}/>
    </div>
    )
}

export default DraftEditor;