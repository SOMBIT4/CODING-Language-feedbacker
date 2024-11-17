import Feedbackform from "./Feedbackform";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";


export default function Header() {
  return (
    <header>
      <Pattern/>
      <Logo />
      <PageHeading />
       <Feedbackform />
    </header>
  )
}
