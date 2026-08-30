import '../../index.css'
interface PreviousSearchesProps{
    searches: string[]
}


export default function PreviousSearches({searches}: PreviousSearchesProps) {
  return (
    <>
      <div className="previous-searches">
        <h2>busquedas previas</h2>
        <ul className="previous-searches-list">
          {searches.map((search) =>(
            <li key={search}>{search}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
