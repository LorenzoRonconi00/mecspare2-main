import EmptyState from "./EmptyState";
import getRicambi from "../../actions/getRicambi";

const SearchResults =  ({
    ricambi
}) => {

    if(ricambi?.length === 0){
        return (
            <EmptyState showReset />
        )
    }

    return ( 
        <div
        className="grid grid-cols-5 gap-8 text-center text-white"
        >
            {ricambi?.map((ricambio) => {
                <div>
                    {ricambio.titolo}
                </div>
            })}
        </div>
     );
}
 
export default SearchResults;