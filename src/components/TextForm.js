import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("button is click..");
        let uc = text.toUpperCase();
        let lc = text.toLocaleLowerCase();
        if(text == lc){
            setText(uc);
        }
    }

    const handleLClick = () =>{
        let uc = text.toUpperCase();
        let lc = text.toLocaleLowerCase();

        if(text == uc){
            setText(lc);
        }
    }

    const handleChange = (event) => {
        console.log("typing.....");
        setText(event.target.value);
    }

    const [text , setText] = useState("Enter the text here ...");

  return (                          
    <div>
  
<div className="mb-3 m-5 text-center">
  <label htmlFor="exampleFormControlTextarea1" className="form-label" ><h1>{props.title}</h1></label>
  <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" 
  rows="10"  ></textarea>
  <br />
  <div className='btn btn-primary ' onClick={handleUpClick}>Click to UpperCase</div>  <br/><br/>
  <div className='btn btn-primary' onClick={handleLClick}>Click to LowerCase</div>

  
</div>
    </div>
  )
}
