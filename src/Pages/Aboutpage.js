import React from 'react'
import Title from '../Components/Title';
import Imagesection from '../Components/Imagesection';
import Skillsection from '../Components/Skillsection';
import Servicesection from '../Components/Servicesection';

function Aboutpage() {
    return (
        <div className="Aboutpage">
            <Title title={`About Me`} span={`About Me`}/>
            <Imagesection/>
            <Title title={`My Skills`} span={`My Skills`}/>
            <div class="skillsContainer">
                <Skillsection skill={'C'} progress={`90%`} width={'90%'}/>
                <Skillsection skill={`Java`} progress={`70%`} width={'70%'}/>
                <Skillsection skill={`Python`} progress={`80%`} width={'80%'}/>
                <Skillsection skill={`ReactJS`} progress={`60%`} width={'60%'}/>
                <Skillsection skill={`NodeJS`} progress={`70%`} width={'70%'}/>
                <Skillsection skill={`AWS`} progress={`90%`} width={'90%'}/>
                <Skillsection skill={`HTML`} progress={`40%`} width={'40%'}/>
                <Skillsection skill={`CSS`} progress={`40%`} width={'40%'}/>
                <Skillsection skill={`UI/UX Design`} progress={`80%`} width={'80%'}/>
                <Skillsection skill={`Xcode`} progress={`90%`} width={'90%'}/>
                <Skillsection skill={`Swift`} progress={`80%`} width={'80%'}/>
                <Skillsection skill={`Thunkable`} progress={`100%`} width={'100%'}/>
                <Skillsection skill={`Google Suite`} progress={`100%`} width={'100%'}/>
                <Skillsection skill={`Canva`} progress={`80%`} width={'80%'}/>
                <Skillsection skill={`IMovie`} progress={`70%`} width={'70%'}/>

            </div>
            <div className="services-container">
                <Servicesection/>
            </div>

        </div>
        
    )
}

export default Aboutpage
