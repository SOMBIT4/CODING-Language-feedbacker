
import { useFeedbackItemStore } from "../../stores/feedbackItemsStore";
import Feedbackform from "../feedback/Feedbackform";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";


export default function Header(){
 //const {handleAddtolist}= useFeedbackItemsContext()
 const additemtolist = useFeedbackItemStore((state)=> state.additemlist)

  return (
    <header>
      <Pattern/>
      <Logo />
      <PageHeading />
       <Feedbackform onAddtolist={additemtolist}/>
      
    </header>
  )
}
