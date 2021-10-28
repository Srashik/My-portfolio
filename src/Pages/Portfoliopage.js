import React from 'react';
import Categories from '../Components/Categories';
import Title from '../Components/Title';
import allportfolios from '../Components/allportfolios';
import Menuitems from '../Components/Menuitem';
import { useState } from 'react';
import portfolios from '../Components/allportfolios';


const allCategories = ['All', ...new Set(allportfolios.map(item => item.category))];
function Portfoliopage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuitems, setmenuitems] = useState(allportfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setmenuitems(allportfolios)
            return;
        }
        const filteredData  = allportfolios.filter((item)=>{
            return item.category === category;
        })
        setmenuitems(filteredData);
    }
    return (
        <div>
            <div className="Portfoliopage">
                <div className="title">
                <Title title={`Portfolio`} span={`Portfolio`}/>
                </div>
                <div class="portfolio-info">
                    <Categories filter ={filter} categories ={categories}/>
                    <Menuitems menuitem={menuitems}/>
                </div>
            </div>
        </div>
        
    )
}

export default Portfoliopage
