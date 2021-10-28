import React from 'react'
import {Link} from 'react-router-dom';

function Menuitem({menuitem}) {
    return (
        <div className="portfolios">
            {
                menuitem.map((item)=> {
                    return <div className="portfolio" key={item.id}>
                        <div class="image-data">
                            <img src={item.image} alt=""/>
                            <ul class="hover-items">
                                <li>
                                    <a href={item.link1} target="_blank">{item.icon1}</a>
                                    <a href={item.link2} target="_blank">{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                           {item.title}
                        </h5>
                        <p>{item.description}</p>
                    </div>
                })
            }
            
        </div>
    )
}

export default Menuitem
