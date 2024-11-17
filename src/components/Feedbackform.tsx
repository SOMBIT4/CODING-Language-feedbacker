

export default function Feedbackform() {
  return (
    <form className="form">
      <textarea  id="feedback-textarea" placeholder="blabla" spellCheck={false} maxLength={150}/>
      <label htmlFor="feedback-textarea">
        Enter your feedback about me here 👇
      </label>
      <div>
      <p className="u-italic">150</p>
      <button><span>submit</span></button>
      </div>
      
    </form>
  )
}
