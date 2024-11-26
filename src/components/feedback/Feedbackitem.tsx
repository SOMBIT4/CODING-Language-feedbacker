import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackitem } from "../../lib/types";
import { useState } from "react";



type FeedbackitemProps = {feedbackitem: TFeedbackitem};

export default function Feedbackitem({feedbackitem}: 
  FeedbackitemProps
) {

  const [open , setOpen ]= useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackitem.upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement>) =>{
     setUpvoteCount((prev) => ++prev);
     e.currentTarget.disabled = true;
     e.stopPropagation();
  }

  return ( <li onClick={()=> setOpen((prev) => !prev)} 
  className={`feedback ${open ? "feedback--expand" : ""}`}>
  <button onClick={handleUpvote}>
    <TriangleUpIcon/>
    <span >{upvoteCount}</span>
  </button>
  <div>
    <p>{feedbackitem.badgeLetter}</p>
  </div>
  <div>
    <p>
      {feedbackitem.Languagename}
    </p>
    <p>
        {feedbackitem.text}
    </p>
  </div>
  <p>{feedbackitem.daysAgo === "0000-00-0" ? 'NEW' : `${feedbackitem.daysAgo}`}</p>

</li>
  )
}
