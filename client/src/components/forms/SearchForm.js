import { useSearch } from "../../context/search";
import { GOOGLE_PLACES_KEY } from "../../config";
import GooglePlacesAutoComplete from "react-google-places-autocomplete";
import { sellPrices, rentPrices } from "../../helpers/priceList";

export default function SearchForm() {
  // context
  const [search, setSearch] = useSearch();

  console.log(sellPrices, rentPrices);

  return (
    <>
      <div className="container m-5">
        <div className="row">
          <div className="col-lg-12  form-control">
            <GooglePlacesAutoComplete
              apiKey={GOOGLE_PLACES_KEY}
              apiOptions="us"
              selectProps={{
                defaultInputValue: search?.address,
                placeholder: "Search for address...",
                onChange: ({ value }) => {
                  setSearch({ ...search, address: value.description });
                },
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary col-lg-2 square">Buy</button>
          <button className="btn btn-primary col-lg-2 square">Rent</button>
          <button className="btn btn-primary col-lg-2 square">House</button>
          <button className="btn btn-primary col-lg-2 square">Land</button>

          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              &nbsp; Price range
            </button>
            <ul className="dropdown-menu">
              {search.action === "Buy" ? (
                <>
                  {sellPrices?.map((p) => (
                    <li key={p._id}>
                      <a
                        className="dropdown-item"
                        onClick={() =>
                          setSearch({
                            ...search,
                            price: p.name,
                            priceRange: p.array,
                          })
                        }
                      >
                        {p.name}
                      </a>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {rentPrices?.map((p) => (
                    <li key={p._id}>
                      <a
                        className="dropdown-item"
                        onClick={() =>
                          setSearch({
                            ...search,
                            price: p.name,
                            priceRange: p.array,
                          })
                        }
                      >
                        {p.name}
                      </a>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <button className="btn btn-danger col-lg-2 square">Search</button>
        </div>
      </div>
    </>
  );
}
