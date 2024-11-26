
import { useEffect } from "react";
import { useFeedbackItemStore } from "../stores/feedbackItemsStore";
import Hashtaglist from "./hashtag/Hashtaglist";
import Container from "./layout/Container";
import Footer from "./layout/Footer";



function App() {
  
  const fetchFeedbackItems = useFeedbackItemStore((state) => state.fetchFeedbackItems);
  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);
  
  return (
    <div className="app">
      <Footer/>


      
      <Container />
      <Hashtaglist 
      />
      
      

      
    </div>
  )
}

export default App
