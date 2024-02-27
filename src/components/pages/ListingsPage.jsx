import React, { useState } from 'react';
import Cards from '../Cards';
import Filter from '../Filter';
import { list, list2 } from "../../assets/cards-list";


export const ListingsPage = () => {

    const [selectedFilter, setSelectedFilter] = useState(0);

    return (
      <div>
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
      </div>
    );
}