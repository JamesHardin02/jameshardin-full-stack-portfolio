import Nav from '../Nav';
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header(props) {
    // deconstruct properties sent that keep track of section choosen to view
    const {
      categories = [],
      setCurrentCategory,
      currentCategory
    } = props;
  
    useEffect(() => {
      document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
  
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          James Hardin | Full Stack Portfolio
        </a>
      </h2>
      <nav>
        <Nav       
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}></Nav>
      </nav>
    </header>
  );
}

export default Header