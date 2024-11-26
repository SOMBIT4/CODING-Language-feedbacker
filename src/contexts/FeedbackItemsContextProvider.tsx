import { createContext,   useMemo, useState } from "react";
import { TFeedbackitem } from "../lib/types";
import { useFeedbackItems } from "../lib/hooks";

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode
  }

type TFeedbackItemsContext = {
          
           filteredFeedbackitems: TFeedbackitem[];
           isloading: boolean;
            errorMessage: string;
            companyList: string[];
            handleAddtolist: (text: string) => void;
            handleSelectcompany: (Languagename: string) => void;

}
export const FeedbackItemsContext  = createContext<TFeedbackItemsContext | null>(null);

export default function FeedbackItemsContextProvider({
  children
}:FeedbackItemsContextProviderProps) {
  const {
    feedbackitems,
    isloading,
    errorMessage,
    setFeedbackitems,
  }=  useFeedbackItems();
  const [selectedlanguage, setSelectedlanguage] = useState("");

  const companyList = useMemo(()=>feedbackitems.map((item) => item.Languagename).filter((languagename , index ,arrray)=>{
    return arrray.indexOf(languagename) === index;
  }),[feedbackitems]);

  const handleAddtolist = async (text: string) => {
    const newItem: TFeedbackitem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: "0000-00-00",
      Languagename: text.split(" ").find((word )=> word.includes("#"))!.substring(1),
      badgeLetter: text.split(" ").find((word) => word.includes("#"))!.substring(1).substring(0,1).toUpperCase(),
    };
    setFeedbackitems([...feedbackitems, newItem]);
    
    
    await fetch("https://jsonhost.com/json/2f5fbf08e98611e74bee75626a439d6a",{
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      
      }
    });
  };


  


  const filteredFeedbackitems = useMemo(()=>selectedlanguage ? feedbackitems.filter((feedbackitem )=> feedbackitem.Languagename === selectedlanguage):feedbackitems,[feedbackitems , selectedlanguage]);
  

  

  const handleSelectcompany = (Languagename: string) => {
    setSelectedlanguage(Languagename);
  }
 

  return (
    <FeedbackItemsContext.Provider 
    value = {{
      
      isloading,
      filteredFeedbackitems,
      handleSelectcompany,
      errorMessage,
      companyList,
      handleAddtolist
          }}>
      {children}
    </FeedbackItemsContext.Provider>
  )
}

