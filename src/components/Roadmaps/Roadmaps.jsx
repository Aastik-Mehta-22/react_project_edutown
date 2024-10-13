import React from 'react'
import Title from '../Title/Title'
import Card from '../Card/Card'
import webd from '../../assets/roadmaps/webd.pptx'
import dsa from '../../assets/roadmaps/dsaByEdutown.pdf'
import sql from '../../assets/roadmaps/sqlRoadmap.pdf'



function Roadmaps() {
  return (
    <div>
            <Title subTitle="Your journey Begins Here" title="Navigating Your Path: Roadmap for Newbies" />
            <div className='flex items-center justify-center mb-6 gap-8 flex-wrap'>

                <Card imageLink="https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png" title="Web Development (MERN)" fileLink={webd} />
                <Card imageLink="https://media.licdn.com/dms/image/C5612AQEz0hpmCQQ9xA/article-cover_image-shrink_600_2000/0/1645599766887?e=2147483647&v=beta&t=bofydXF-Sf5Q_t5T8xX0Cz1Yuk4uSLma4sUb61WhogY" title="Data Structures and Algorithms" fileLink={dsa} />
                <Card imageLink="https://miro.medium.com/v2/resize:fit:1024/1*lbZJd2zWpLnKXzcsiMpmLw.jpeg" title="Structured Query Language (SQL)" fileLink={sql} />
                

            </div>
    </div>
  )
}

export default Roadmaps