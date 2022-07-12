import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
      let newText = '';
      setText(newText)
  }
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  //using regex
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
   // text = "new text"; // wrong way to change the state
//    setText = ("new text"); // correct way


  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black' }}>
    <h1 className='my-3' >{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'#grey' }} ></textarea>
  <button className="btn btn-primary mx-1 " onClick={handleUpClick} >Convert to Uppercase</button>
  <button className="btn btn-primary my-2 mx-1 " onClick={handleLowClick} >Convert to Lowercase</button>
  <button className="btn btn-primary my-2 mx-1 " onClick={handleClearClick} >Clear</button>
  <button className="btn btn-primary my-2 mx-1 " onClick={handleCopy} >Copy Text</button>
  <button className="btn btn-primary my-2 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
    </div>

    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the Textbox above to preview it here"}</p>
    </div>
    </>
  )
}
