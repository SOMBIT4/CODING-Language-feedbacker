import { TriangleUpIcon } from "@radix-ui/react-icons";

type Feedbackitem = {
  upvoteCount: number;
  badgeLetter: string;
  Languagename: string ;
  text: string;
  date: string;
}
type FeedbackitemProps = {feedbackitem: Feedbackitem};

export default function Feedbackitem({feedbackitem}: 
  FeedbackitemProps
) {
  return  <li className="feedback">
  <button>
    <TriangleUpIcon/>
    <span >{feedbackitem.upvoteCount}</span>
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
  
  <p>{feedbackitem.date}</p>

</li>
}
