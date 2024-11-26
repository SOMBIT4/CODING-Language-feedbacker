





import { useFeedbackItemStore } from "../../stores/feedbackItemsStore";
import ErroMessage from "../ErroMessage";
import Spinner from "../Spinner";
import Feedbackitem from "./Feedbackitem";





export default function Feedbacklist() {
 // const{isloading, errorMessage, filteredFeedbackitems} = useFeedbackItemsContext();

 const isloading = useFeedbackItemStore((state)=> state.isloading);
 const errorMessage = useFeedbackItemStore((state)=> state.errorMessage);
 const filteredFeedbackitems = useFeedbackItemStore((state)=> state.getfilteredFeedbackItems());
  
  return (<ol className="feedback-list">
    {
      isloading ? <Spinner/> : null
    }
    {
      errorMessage ? <ErroMessage message = {errorMessage} /> : null
    }
    {
      filteredFeedbackitems.map((feedbackitem)=>(
     <Feedbackitem  key = {feedbackitem.id} feedbackitem={feedbackitem}/>
))}
   
  </ol>);
}
