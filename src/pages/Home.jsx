import ShowMessage from "../components/ShowMessage";
import SearchInput from "../components/SearchInput";
import RegionMenue from "../components/RegionMenue";
import CountryList from "../components/CountryList";
import { useFetchData } from "../useFetchData";

const Home = () => {
  const {
    result,
    filterCountriesList,
    setFilteredCountries,
    isError,
    isLoading,
  } = useFetchData();

  return (
    <>
      {isError && <ShowMessage message={"Something went wrong!"} />}
      {isLoading && <ShowMessage message={"Loading countries data..."} />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 px-5 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenue
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={result} />
        </>
      )}
    </>
  );
};

export default Home;
