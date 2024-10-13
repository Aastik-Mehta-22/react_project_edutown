import React from 'react'
import Title from '../Title/Title'
import Card from '../Card/Card'
import dbms_notes from '../../assets/notes/dbms_notes.pdf'
import os_notes from '../../assets/notes/os_notes.pdf'
import sql_notes from '../../assets/notes/sql_notes.pdf'
import cn_notes from '../../assets/notes/cn_notes.pdf'

function Notes() {
  return (
    <div>
            <Title subTitle="Personalized Insights" title="Hand Written Notes" />
            <div className='flex items-center justify-center mb-6 gap-8 flex-wrap'>

                <Card imageLink="https://static.javatpoint.com/fullformpages/images/dbms-full-form3.png" title="Database Management System" fileLink={dbms_notes}/>
                <Card imageLink="https://dxknuvztu7bsi.cloudfront.net/2561-shutterstock_559459693-scaled-1693197202540.jpg" title="Operating System" fileLink={os_notes}/>
                <Card imageLink="https://miro.medium.com/v2/resize:fit:1024/1*lbZJd2zWpLnKXzcsiMpmLw.jpeg" title="SQL" fileLink={sql_notes}/>
                <Card imageLink="https://media.geeksforgeeks.org/wp-content/uploads/20230406152358/CN-(1).jpg" title="Computer Networks" fileLink={cn_notes}/>
                <Card imageLink="https://community-cdn-digitalocean-com.global.ssl.fastly.net/zBPCfEhW65BKHa1HbLvBk8BX" title="MongoDB" />
                <Card imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd8ZEM4nA7Ycx0I70edHD_UqqGAFV7qbFgw&s" title="Express.js"/>
                <Card imageLink="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124" title="React.js"/>
                <Card imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRri9OHeJ3zjKRr-G4HG8Iq6FH39nW_3o0Bxg&s" title="Node.js"/>

            </div>
    </div>
  )
}

export default Notes