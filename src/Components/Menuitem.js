import React from 'react'

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
                                    <a href={item.icon1}></a>
                                    {/* <a href={item.icon2}></a> */}
                                </li>
                            </ul>
                        </div>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                    </div>
                })
            }
            
        </div>
    )
}

export default Menuitem
