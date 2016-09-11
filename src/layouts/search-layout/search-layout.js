import React from 'react';
import SearchBarContainer from '../../components/Search-Bar/Search-Bar-Container';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="search">
      <header className="search-header">
        <SearchBarContainer />
      </header>
      <div className="search-results">
        {props.children}
      </div>
    </div>
    );
}
