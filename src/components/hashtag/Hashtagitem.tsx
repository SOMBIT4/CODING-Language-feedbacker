type HashTagItemProps = {
onSelectLanguage: (Languagename: string) => void;
    Languagename: string
};

export default function Hashtagitem({onSelectLanguage,
    Languagename
}: HashTagItemProps) {
  console.log("onSelectLanguage:", typeof onSelectLanguage)
  return (
    <li key={Languagename}><button onClick={()=>onSelectLanguage(Languagename)}>{Languagename}</button></li>
  );
}
