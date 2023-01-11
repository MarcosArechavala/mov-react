import { useSearchParams } from "react-router-dom";
import { MoviesGrid } from "./MoviesGrid";
import { Search } from "./Search";
import { useDebounce } from "./useDebounce";

export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);
  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}