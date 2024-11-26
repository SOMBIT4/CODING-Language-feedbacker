

import { useFeedbackItemStore } from "../../stores/feedbackItemsStore";
import Hashtagitem from "./Hashtagitem";



export default function Hashtaglist(
) {
 // const {companyList,handleSelectcompany} = useFeedbackItemsContext();
const companyList = useFeedbackItemStore((state)=> state.getcompanyList());
const handleSelectcompany = useFeedbackItemStore((state)=> state.selectlanguage);
  return (
    <ul className="hashtags">
      {
        companyList.map((Languagename) => {
          return <Hashtagitem key = {Languagename}Languagename = {Languagename} 
          onSelectLanguage= {handleSelectcompany}/>
        })
      }
      
    </ul>
  )
}
