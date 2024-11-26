import { useState } from "react";
import { max_characters } from "../../lib/constants";
 
type FeedbackformProps = {
     onAddtolist: (text: string) => void;
     
}

export default function Feedbackform({
  onAddtolist}: FeedbackformProps) {
  const [text,setText] = useState("");
  const [showvalidindicator , setShowvalidindicator] = useState(false);
  const [showinvalidindicator , setShowinvalidindicator] = useState(false);
  const charCount = max_characters - text.length;
  const handlechange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    { 
      
      const newText = e.target.value;
      if(newText.length > max_characters){
        return;
      }
      setText(newText)}

      const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        //basic validation
        if(text.includes("#")&& text.length >= 5){
          setShowvalidindicator(true);
          setTimeout(() => setShowvalidindicator(false), 2000);
          
        }else {
          setShowinvalidindicator(true);
          setTimeout(() => setShowinvalidindicator(false), 2000);
          return ;
        }
        onAddtolist(text);
        setText("");
      };
  return (
    <form onSubmit={handleSubmit}className={`form ${showvalidindicator ? "form--valid" : ""} ${showinvalidindicator ? "form--invalid" : ""}`}>
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
