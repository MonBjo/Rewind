import { useState } from 'react';
import './search.scss';

function Search(props: { search: any; setSearch: any; }) {
  const { search, setSearch } = props;

  function doSearch(event: any) {
    console.log(event.target.value.toLowerCase());
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <section className="search">
      <input type="text" placeholder='Sök på namn, datum eller match-typ' onChange={doSearch} />
    </section>
  );
}

export default Search;