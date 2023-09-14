import React from 'react'
import '../../styles/team.css'
import team01 from '../../images/team-01.png'
import team02 from '../../images/team-02.jpg'
import team03 from '../../images/team-03.png'
import team04 from '../../images/team-04.png'


const teamMembers = [
    {
        imgUrl: team01,
        name: 'Thein Dan Ma',
        position: 'Production Designer'
    },

    {
        imgUrl: team02,
        name: 'Ngwe Pu',
        position: 'Product Designer'
    },

    {
        imgUrl: team03,
        name: 'OK Tal Mg Lay',
        position: 'Customer Service'
    },

    {
        imgUrl: team04,
        name: 'Ma Ma Saung',
        position: 'Project Leader'
    },
]

const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h6 className='subtitle'>Our Team</h6>
                    <h2>
                        Join With <span className='highlight'>Our Team</span>
                    </h2>
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i class='ri-linkedin-line'></i></span>
                                        <span><i class='ri-twitter-line'></i></span>
                                        <span><i class='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team