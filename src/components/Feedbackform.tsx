import { useState } from "react"
import { max_characters } from "../lib/constants";



export default function Feedbackform() {
  const [text,setText] = useState("");
  const charCount = max_characters - text.length;
  const handlechange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    { 
      
      const newText = e.target.value;
      if(newText.length > max_characters){
        return;
      }
      setText(newText)}
  return (
    <form className="form">
      <textarea 
      value ={text}
      onChange={handlechange}
      id="feedback-textarea"
       placeholder="blabla" 
       spellCheck={false}
        maxLength={max_characters}
        />
      <label htmlFor="feedback-textarea">
        Enter your feedback about me here 👇
      </label>
      <div>
      <p className="u-italic">{charCount}</p>
      <button><span>submit</span></button>
      </div>
      
    </form>
  )
}
