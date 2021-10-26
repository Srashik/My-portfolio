import React from 'react'
import ContactItem from '../Components/ContactItem';
import emailme from '../Img/emailme.svg';
import phone from '../Img/phone.svg';
import Title from '../Components/Title';


function Contactpage() {
    return (

        <div>
            <div class="title"><Title title={`Contact`} span={`Contact`}/></div>
            <div className="ContactPage">
            <div class="map-sect">

            </div>
            <div className="contact-sect">
                <ContactItem icon={emailme} text1={'srashik@dons.usfca.edu'} text2={'srashik99@gmail.com'} title={"Email: "}/>
                <ContactItem icon={phone} text1={'+16613781586'} title={"Phone Number: "}/>
                
            </div>
        </div>
        </div>
        
    )
}

export default Contactpage
