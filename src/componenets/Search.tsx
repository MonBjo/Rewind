import './search.scss';

function Search() {

  function doSearch(event: any) {
    console.log("Search:", event.target.value);
  }

  return (
    <section className="search">
      <input type="text" placeholder='Sök på namn' onChange={doSearch} />
    </section>
  );
}

export default Search;