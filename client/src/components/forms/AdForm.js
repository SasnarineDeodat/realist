import { useState } from "react";
import GooglePlacesAutoComplete from "react-google-places-autocomplete";
import { GOOGLE_PLACES_KEY } from "../../config";

export default function AdForm({ action, type }) {
  // state
  const [ad, setAd] = useState({
    photos: [],
    uploading: false,
    price: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    carpark: "",
    landsize: "",
    type: "",
    title: "",
    description: "",
    loading: false,
  });
  return (
    <>
      <div className="mb-3 form-control">
        <GooglePlacesAutoComplete
          apiKey={GOOGLE_PLACES_KEY}
          apiOptions="us"
          selectProps={{
            defaultInputValue: ad?.address,
            placeholder: "Search for address...",
            onChange: ({ value }) => {
              setAd({ ...ad, address: value.description });
            },
          }}
        />
      </div>

      <pre>{JSON.stringify(ad, null, 4)}</pre>
    </>
  );
}
