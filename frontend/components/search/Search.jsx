import React from 'react';

// import FilterForm from './filter_form';
import RoomIndex from '../room/RoomIndex';
import RoomMap from './../room/map/RoomMap';

const Search = ({ rooms, fetchRooms, updateFilter, place }) => {
  const renderResults = () => {
    if (rooms.length === 0) {
      return <div>No Results...</div>
    } else {
      return (
        <RoomIndex
          rooms={rooms}
          fetchRooms={fetchRooms}
        />
      );
    }
  }

  return (
  <div className="search-page">
    <div className="search-results">
      {renderResults()}
    </div>

    <div className="map-results">
      <RoomMap
        rooms={rooms}
        updateFilter={updateFilter}
        place={place}
      />
    </div>
  </div>
)};

export default Search;





// <RoomIndex
//   rooms={rooms}
//   fetchRooms={fetchRooms}
//   />
