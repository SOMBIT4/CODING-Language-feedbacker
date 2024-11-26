import { create } from "zustand";
import { TFeedbackitem } from "../lib/types";

type Store = {
  feedbackitems: TFeedbackitem[];
  isloading: boolean;
  errorMessage: string;
  selectedlanguage: string;
  getcompanyList: () => string[];
  getfilteredFeedbackItems: () => TFeedbackitem[];
  additemlist: (text: string) => Promise<void>;
  selectlanguage: (Languagename: string) => void;
  fetchFeedbackItems: () => Promise<void>; 
}
export const useFeedbackItemStore = create<Store>((set,get )=>({
    feedbackitems: [],
    isloading: false,
    errorMessage: "",
    selectedlanguage: "",
    getcompanyList:()=>{
        return get().feedbackitems.map((item) => item.Languagename).filter((languagename , index ,arrray)=>{
            return arrray.indexOf(languagename) === index;
          });
    },

    getfilteredFeedbackItems: () => {
      const state = get();
      return   state.selectedlanguage ? state.feedbackitems.filter((feedbackitem )=> feedbackitem.Languagename === state.selectedlanguage):state.feedbackitems
  
    },
    additemlist : async (text: string) => {
        const newItem: TFeedbackitem = {
          id: new Date().getTime(),
          text: text,
          upvoteCount: 0,
          daysAgo: "0000-00-00",
          Languagename: text.split(" ").find((word )=> word.includes("#"))!.substring(1),
          badgeLetter: text.split(" ").find((word) => word.includes("#"))!.substring(1).substring(0,1).toUpperCase(),
        };
        //setFeedbackitems([...feedbackitems, newItem]);
        set(state =>({
            feedbackitems: [...state.feedbackitems, newItem]
        }))
        
        await fetch("https://jsonhost.com/json/2f5fbf08e98611e74bee75626a439d6a",{
          method: "POST",
          body: JSON.stringify(newItem),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          
          }
        });
      },
    selectlanguage: (Languagename: string) => {
        // setselectedlanguage(Languagename);
  set(()=>({
    selectedlanguage: Languagename
  }));
    },
    fetchFeedbackItems: async () => {
        set(()=>({
            isloading: true
        }));
        try{
          const response = await fetch(
            "https://jsonhost.com/json/2f5fbf08e98611e74bee75626a439d6a");
            if(!response.ok){
              throw new Error();
            }
           
  
            const data = await response.json();
           // setFeedbackitems(data.feedbacks);
      set(()=>({
        feedbackitems: data.feedbacks,
      }))
        }
     
  
      catch(error){
        // setErrorMessage("Error while loading data");
        // setisloading(false);
    set(()=>({
        errorMessage: "Error while loading data"
    })  )
    
    
    }
    //  setisloading(false);
    set(()=>({
        isloading: false,
    }))
      },
}))