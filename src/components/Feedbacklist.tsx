import { TriangleUpIcon } from "@radix-ui/react-icons"


export default function Feedbacklist() {
  return <ol className="feedback-list">
    <li className="feedback">
      <button>
        <TriangleUpIcon/>
        <span >593</span>
      </button>
      <div>
        <p>B</p>
      </div>
      <div>
        <p>
          Javascript
        </p>
        <p>
          Javascript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
        </p>
      </div>
      
      <p>2021-09-01</p>

    </li>
  </ol>
}
