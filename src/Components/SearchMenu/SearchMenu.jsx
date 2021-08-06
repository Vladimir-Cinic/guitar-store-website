import React, { useState } from 'react';
import { useGlobalContext } from '../../Context';

import {
  Wrapper,
  SearchBar,
  DropDownWrapper,
  DropDownMenu,
  DropDownItem,
  Arrow,
  Submenu,
} from './SearchMenuElements';

const SearchMenu = () => {
  const {
    setSearchTerm,
    allBrands,
    selectBrand,
    sortByPrice,
    toggleDropDownMenu,
    setToggleDropDownMenu,
    toggleSubmenu,
    setToggleSubmenu,
  } = useGlobalContext();

  return (
    <Wrapper>
      <SearchBar
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DropDownWrapper
        onMouseEnter={() => setToggleDropDownMenu(true)}
        onMouseLeave={() => setToggleDropDownMenu(false)}
      >
        Filter Products <Arrow />
        <DropDownMenu active={toggleDropDownMenu}>
          <DropDownItem onClick={() => sortByPrice('lower')}>
            By price lower to higher
          </DropDownItem>
          <DropDownItem onClick={() => sortByPrice('higher')}>
            By price Higher to lower
          </DropDownItem>
          <DropDownItem
            onMouseEnter={() => setToggleSubmenu(true)}
            onMouseLeave={() => setToggleSubmenu(false)}
          >
            By product brand <Arrow />
            <Submenu active={toggleSubmenu}>
              {allBrands.map((brand, i) => {
                return (
                  <DropDownItem onClick={() => selectBrand(brand)} key={i}>
                    {brand}
                  </DropDownItem>
                );
              })}
            </Submenu>
          </DropDownItem>
        </DropDownMenu>
      </DropDownWrapper>
    </Wrapper>
  );
};

export default SearchMenu;
