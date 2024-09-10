import React from 'react'
import Title from '../Title/Title'
import Card from '../Card/Card'

function Notes() {
  return (
    <div>
            <Title subTitle="Personalized Insights" title="Hand Written Notes" />
            <div className='flex items-center justify-center mb-6 gap-8 flex-wrap'>

                <Card imageLink="https://static.javatpoint.com/fullformpages/images/dbms-full-form3.png" title="Database Management System" />
                <Card imageLink="https://dxknuvztu7bsi.cloudfront.net/2561-shutterstock_559459693-scaled-1693197202540.jpg" title="Operating System"/>
                <Card imageLink="https://miro.medium.com/v2/resize:fit:1024/1*lbZJd2zWpLnKXzcsiMpmLw.jpeg" title="SQL"/>
                <Card imageLink="https://media.geeksforgeeks.org/wp-content/uploads/20230406152358/CN-(1).jpg" title="Computer Networks"/>
                <Card imageLink="https://community-cdn-digitalocean-com.global.ssl.fastly.net/zBPCfEhW65BKHa1HbLvBk8BX" title="MongoDB"/>
                <Card imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd8ZEM4nA7Ycx0I70edHD_UqqGAFV7qbFgw&s" title="Express.js"/>
                <Card imageLink="https://chudovo.com/wp-content/uploads/2023/03/reactjs.jpg" title="React.js"/>
                <Card imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRri9OHeJ3zjKRr-G4HG8Iq6FH39nW_3o0Bxg&s" title="Node.js"/>

            </div>
    </div>
  )
}

export default Notes