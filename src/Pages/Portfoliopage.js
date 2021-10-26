import React from 'react';
import Categories from '../Components/Categories';
import Title from '../Components/Title';
import allportfolios from '../Components/allportfolios';
import Menuitems from '../Components/Menuitem';
import { useState } from 'react';

function Portfoliopage() {
    const [categories, setCategories] = useState(null);
    const [menuitems, setmenuitems] = useState(allportfolios);
    return (
        <div>
            <div className="Portfoliopage">
                <div className="title">
                <Title title={`Portfolio`} span={`Portfolio`}/>
                </div>
                <div class="portfolio-info">
                    <Categories/>
                    <Menuitems menuitem={menuitems}/>
                </div>
            </div>
        </div>
        
    )
}

export default Portfoliopage
