import React from 'react';
import Categories from '../Components/Categories';
import Title from '../Components/Title';

function Portfoliopage() {
    const [categories, setCategories] = useState(null);
    const [menuitems, setmenuitems] = useState(portfolios);
    return (
        <div>
            <div className="Portfoliopage">
                <div className="title">
                <Title title={`Portfolio`} span={`Portfolio`}/>
                </div>
                <div class="portfolios">
                    <Categories/>
                    <Menuitems/>
                </div>
            </div>
        </div>
        
    )
}

export default Portfoliopage
