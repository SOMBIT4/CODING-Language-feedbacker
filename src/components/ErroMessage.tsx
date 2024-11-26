type errormessageProps = {
  message: string
}

export default function ErroMessage({
  message 
}:errormessageProps) {
  return (
    <div>
     {message} 
    </div>
  )
}
