import { useState } from 'react';
import './search.scss';

function Search(props: { setSearch: any; setOnlyWins: any; }) {
  const { setSearch,  setOnlyWins } = props;

  function doSearch(event: any) {
    console.log(event.target.value.toLowerCase());
    setSearch(event.target.value.toLowerCase());
  }

  function getOnlyWins(event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) {
    setOnlyWins(event.target.checked);
  }

  return (
    <section className="search">
      <input type="text" placeholder='Sök på namn, datum eller match-typ' onChange={doSearch} />
      <section>
          <label htmlFor="winsOnly" >Visa endast vinster: </label>
          <input type="checkbox" id="winsOnly" onChange={getOnlyWins} />
        </section>
    </section>
  );
}

export default Search;