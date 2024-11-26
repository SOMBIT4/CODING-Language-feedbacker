import { useContext, useEffect, useState } from "react";
import { FeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";
import { TFeedbackitem } from "./types";

export function useFeedbackItemsContext() {
    const context = useContext(FeedbackItemsContext);
    if(!context){
      throw new Error("useFeedbackItemsContext must be used within a FeedbackItemsContextProvider");
    }
    return context;
  }
  
  export function useFeedbackItems (){
    const [feedbackitems, setFeedbackitems] = useState<TFeedbackitem[]>([]);
    const [isloading , setisloading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
      const fetchfeedbackitems = async () => {
        setisloading(true);
        try{
          const response = await fetch(
            "https://jsonhost.com/json/2f5fbf08e98611e74bee75626a439d6a");
            if(!response.ok){
              throw new Error();
            }
           
  
            const data = await response.json();
            setFeedbackitems(data.feedbacks);
      
        }
     
  
      catch(error){
        setErrorMessage("Error while loading data");
        setisloading(false);
      }
      setisloading(false);
      };
  
     
      fetchfeedbackitems();
  
  }, []);
  return {
    feedbackitems,
    isloading,

    errorMessage,
    setFeedbackitems,
    
  };
  }

  