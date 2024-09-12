import React, { useRef, useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Input } from './ui/input';
import { useTheme } from 'next-themes';


const SearchBar = () => {
  const { theme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const dropdownListRef = useRef<HTMLUListElement>(null);

  const pageList = {
    "./": "Home",
    "Gaming": "Gaming",
    "Gaming/HollowKnight": "Hollow Knight",
    "Gaming/MarioWonder": "Super Mario Wonder",
    "Gaming/LinksAwakening": "Zelda Link's Awakening",
    "Tv-Shows": "Tv-Shows",
    "Movies": "Movies",
  }

  const searchFunc = () => {
    const inputValue = inputRef.current?.value;
    console.log(`Searching for: ${inputValue}`);
    const tempList = dropdownListRef.current;

    if (tempList) {
      tempList.innerHTML = '';
      for (const [key, value] of Object.entries(pageList)) {
        if (value.toLowerCase().includes(inputValue!.toLowerCase())) {
          console.log(`Found match: ${value}`);
          tempList.innerHTML += `<li><a href="/${key}">${value}</a></li>`;
        }
      }
    } 
    else {
      return;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setIsTyping(!!inputValue);
    searchFunc()
  };

  const handleDropdownClick = () => {
    setIsTyping(false);
  };

  return (
    <div className={`flex justify-center mx-auto ${theme === 'light' ? 'bg-light-2' : 'bg-dark-1'}`}>
      <Button type='submit' onClick={searchFunc}>
        <Image src={`${theme === 'light' ? '/icons/search-dark.svg' : '/icons/search.svg'}`} alt='search' width={20} height={20}/>
      </Button>
      <Input
        onChange={handleInputChange}
        id='SearchBar'
        type='text'
        placeholder='Search'
        className={`w-full max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[264px] ${theme === 'light' ? 'bg-light-2' : 'bg-dark-1'} border-none`}
        ref={inputRef}
      />
      {isTyping && (
        <div
          className={`absolute ${theme === 'light' ? 'bg-light-2' : 'bg-dark-1'} shadow-md p-2 w-full max-w-[264px] rounded`}
          style={{ top: '60px' }}
          ref={dropdownRef}
          onClick={handleDropdownClick}
        >
          <ul id='dropDownList' ref={dropdownListRef}>
            {/* Add search results here */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;