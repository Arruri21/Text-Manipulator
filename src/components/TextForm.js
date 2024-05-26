import React,{useState} from 'react'


function TextForm(props) {
  const handleUpClick =() =>{
   console.log("UpperCase was clicked"+text);
   let newText=text.toUpperCase();
   setText(newText)
   props.showAlert("You have Converted to UpperCase","success")
  }
  const handleRevClick =() =>{
    //console.log("UpperCase was clicked"+text);
    let newText="";
    for(let i=text.length-1;i>=0;i--)
      {
        newText+=text.charAt(i);
      }
    setText(newText)
    props.showAlert("You have Reveresed the text","success")
   }
  const handleClearClick =() =>{
    //console.log("UpperCase was clicked"+text);
    let newText='';
    setText(newText)
    props.showAlert("You have Cleared the text","success")
   }
  const handleLoClick =() =>{
    console.log("UpperCase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("You have Converted to LowerCase","success")
   }
  const handleOnChange =(event) =>{
   console.log("onClick");
   setText(event.target.value)
  }
  const[text,setText]=useState(""); 
  return (
<>
  <div className="container" style={{color: props.mode=='dark'?'white':'black',backgroundColor:props.mode=='dark'?'gray':'white'}}>
    <h2>Enter string here</h2>
   <div className={`container:grey bg-props.mode=='dark'?'grey':'white'`} >
       <textarea className="form-control container:grey" style={{color: props.mode=='dark'?'white':'black',backgroundColor:props.mode=='dark'?'grey':'white'}} value={text}  onChange={handleOnChange} id="box" rows="8"></textarea>
    </div>
     <div className='my-3'>
     <button type="button" onClick={handleUpClick} className="btn btn-primary btn-lg mx-1">Convert To Uppercase</button>
     <button type="button" onClick={handleLoClick} className="btn btn-success btn-lg mx-1">Convert To LowerCase</button>
      <button type="button" onClick={handleRevClick} className="btn btn-warning btn-lg mx-1">Sentence reverse</button>
      <button type="button" onClick={handleClearClick} className="btn btn-danger btn-lg mx-1">Clear Text</button>
     </div>
       
  </div> 
   <div className="container-sm" style={{color: props.mode=='dark'?'white':'black',backgroundColor: props.mode=='dark'?'grey':'white'}}>
     <h2>Your Text Summary</h2>
     <p>{text.split(" ").length} words and {text.length} chaaracters</p>
     <p>speed of the sentence is {0.08 *text.split(" ").length}</p>
   </div>
   <div className="container-sm" style={{color: props.mode=='dark'?'white':'black',backgroundColor: props.mode=='dark'?'grey':'white'}}>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
   
   
</>
      

  )
}

export default TextForm;
