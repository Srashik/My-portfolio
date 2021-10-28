import React from 'react'
import ContactItem from '../Components/ContactItem';
import emailme from '../Img/emailme.svg';
import phone from '../Img/phone.svg';
import Title from '../Components/Title';
import linkedin from '../Img/linkedin.png';


function Contactpage() {
    return (

        <div>
            <div class="title"><Title title={`Contact`} span={`Contact`}/></div>
            <div className="ContactPage">
                <ContactItem icon={linkedin} text1={'https://www.linkedin.com/in/shehrebanu-rashik/'} text2={''} title={"LinkedIn: "}/>
                <ContactItem icon={emailme} text1={'srashik@dons.usfca.edu'} text2={'srashik99@gmail.com'} title={"Email: "}/>
                <ContactItem icon={phone} text1={'+16613781586'} title={"Phone Number: "}/>
        </div>
        </div>
        
    )
}

export default Contactpage
