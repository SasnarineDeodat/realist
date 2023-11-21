import { useSearch } from "../../context/search";

export default function SearchForm() {
  // context
  const [search, setSearch] = useSearch();

  return <>Search form</>;
}
