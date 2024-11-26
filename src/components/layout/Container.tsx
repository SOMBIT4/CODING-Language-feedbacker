
import Feedbacklist from "../feedback/Feedbacklist";
import Header from "./Header";


export default function Container() {
  return (
    <main className="container">
      <Header />

      <Feedbacklist />
    </main>
  )
}
