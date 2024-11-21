

import { useEffect, useState } from "react";
import Feedbackitem from "./Feedbackitem"
import Spinner from "./Spinner";


export default function Feedbacklist() {
  const [feedbackitems, setFeedbackitems] = useState([]);
  const [isloading , setisloading] = useState(false);
  useEffect(() => {
    setisloading(true);
    fetch("https://jsonhost.com/json/7ae5e15209142c8a46ad74ccfee71287").then((response) => {
        return response.json();
    }).then((data) => {
      setFeedbackitems(data.feedbacks);
      setisloading(false);
      //console.log(data);
    })
  }, []);
  return (<ol className="feedback-list">
    {
      isloading ? <Spinner/> : null
    }
    {
      feedbackitems.map((feedbackitem)=>(
     <Feedbackitem  key = {feedbackitem.id} feedbackitem={feedbackitem}/>
))}
   
  </ol>);
}
