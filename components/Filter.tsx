import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = () => {
    const { theme } = useTheme();

    const handleChange = (value: string) => {
        if (value === "Alphabetical") {
            handleSortAsc();
        }
        else{
            handleSortDesc();
        }
    };

    const grabElements = () => {
        const subsections = document.querySelectorAll('[id="sub"]');
        const subsectionsArray = Array.from(subsections);
        return subsectionsArray;
    };

    const mapImageElements = (subsectionsArray: Element[]) => {
        return subsectionsArray.map((element) => {
            const imageElement = element.querySelector('img');
            const name = imageElement?.alt;
            return { element, name };
        });
    };

    const handleSortAsc = () => {

        const imageElements = mapImageElements(grabElements());
        
        const sortedArray = imageElements.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''));

        changeContainer(sortedArray);
    };

    const handleSortDesc = () => {
        const imageElements = mapImageElements(grabElements());
        
        const sortedArray = imageElements.sort((b, a) => (a.name ?? '').localeCompare(b.name ?? ''));

        changeContainer(sortedArray);
    };

    const changeContainer = (sortedArray: { element: Element; name: string | undefined }[]) => {
        const container = document.getElementById('container'); // assume the container has an id of "container"
        if (container) {
        container.innerHTML = ''; // clear the container
        sortedArray.forEach((imageElement) => {
            container.appendChild(imageElement.element);
        });
        } else {
            return;
        }
    };

    return (
      <section className='flex'>
        <Image src={`/icons/${theme === 'light' ? 'filter-dark' : 'filter'}.svg`} alt='Filter' width={32} height={32}/>
        <Select onValueChange={handleChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Alphabetical">Alphabetical &uarr;</SelectItem>
            <SelectItem value="AlphabeticalDown">Alphabetical &darr;</SelectItem>
          </SelectContent>
        </Select>
      </section>
    );
  };
export default Filter;