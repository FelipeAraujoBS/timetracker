import React, { useState } from 'react'
import Card from "../UI/Card/Card"
import Menu from '../Menu/Menu'

//styling
import workImg from "../UI/imgs/icon-work.svg"
import playImg from "../UI/imgs/icon-play.svg"
import studyImg from "../UI/imgs/icon-study.svg"
import exerciseImg from "../UI/imgs/icon-exercise.svg"
import socialImg from "../UI/imgs/icon-social.svg"
import selfcareImg from "../UI/imgs/icon-self-care.svg"
import jeremy from "../UI/imgs/image-jeremy.png"
import titleImg from "../UI/imgs/icon-ellipsis.svg"
import "./Boards.css"

function Boards() {
    const [pageState, setPageState] = useState(1)

    console.log(pageState)

    const dailyCARDS = [
        {
            title: "Work",
            hours: "8hrs",
            complement: "Yesterday - 8hrs",
            color: "hsl(15, 100%, 70%)",
            img: workImg,
            id: 1
        },
        {
            title: "Play",
            hours: "2hrs",
            complement: "Yesterday - 8hrs",
            color: "hsl(195, 74%, 62%)",
            img: playImg,
            id: 2
        },
        {
            title: "Study",
            hours: "4hrs",
            complement: "Yesterday - 7hrs",
            color: "hsl(348, 100%, 68%)",
            img: studyImg,
            id: 3
        },
        {
            title: "Exercise",
            hours: "2hrs",
            complement: "Yesterday - 2hrs",
            color: "hsl(145, 58%, 55%)",
            img: exerciseImg,
            id: 4
        },
        {
            title: "Social",
            hours: "4hrs",
            complement: "Yesterday - 3hrs",
            color: "hsl(264, 64%, 52%)",
            img: socialImg,
            id: 5
        },
        {
            title: "Self Care",
            hours: "1hrs",
            complement: "Yesterday - 2hrs",
            color: "hsl(43, 84%, 65%)",
            img: selfcareImg,
            id: 6
        }
    ]

    const weeklyCARDS = [
        {
            title: "Work",
            hours: "32hrs",
            complement: "Last Week - 36hrs",
            color: "hsl(15, 100%, 70%)",
            img: workImg,
            id: 1
        },
        {
            title: "Play",
            hours: "10hrs",
            complement: "Last Week - 8hrs",
            color: "hsl(195, 74%, 62%)",
            img: playImg,
            id: 2
        },
        {
            title: "Study",
            hours: "4hrs",
            complement: "Last Week - 7hrs",
            color: "hsl(348, 100%, 68%)",
            img: studyImg,
            id: 3
        },
        {
            title: "Exercise",
            hours: "4hrs",
            complement: "Last Week - 5hrs",
            color: "hsl(145, 58%, 55%)",
            img: exerciseImg,
            id: 4
        },
        {
            title: "Social",
            hours: "5hrs",
            complement: "Last Week - 10hrs",
            color: "hsl(264, 64%, 52%)",
            img: socialImg,
            id: 5
        },
        {
            title: "Self Care",
            hours: "2hrs",
            complement: "Last Week - 2hrs",
            color: "hsl(43, 84%, 65%)",
            img: selfcareImg,
            id: 6
        }
    ]

    const monthlyCARDS = [
        {
            title: "Work",
            hours: "64hrs",
            complement: "Last Month - 128hrs",
            color: "hsl(15, 100%, 70%)",
            img: workImg,
            id: 1
        },
        {
            title: "Play",
            hours: "24hrs",
            complement: "Last Month - 36hrs",
            color: "hsl(195, 74%, 62%)",
            img: playImg,
            id: 2
        },
        {
            title: "Study",
            hours: "40hrs",
            complement: "Last Month - 36hrs",
            color: "hsl(348, 100%, 68%)",
            img: studyImg,
            id: 3
        },
        {
            title: "Exercise",
            hours: "30hrs",
            complement: "Last Month - 30hrs",
            color: "hsl(145, 58%, 55%)",
            img: exerciseImg,
            id: 4
        },
        {
            title: "Social",
            hours: "60hrs",
            complement: "Last Month - 40hrs",
            color: "hsl(264, 64%, 52%)",
            img: socialImg,
            id: 5
        },
        {
            title: "Self Care",
            hours: "20hrs",
            complement: "Last Month - 16hrs",
            color: "hsl(43, 84%, 65%)",
            img: selfcareImg,
            id: 6
        }
    ]

    const displayWeeklyCard = weeklyCARDS.map((elements) => (
        <Card key={elements.id}>
            <div className='colorCard' style={{backgroundColor: `${elements.color}`}}>
              <img className='img' src={elements.img} alt="img" />
            </div>
            <div className='innerCard'>
                <div className="title">
                    <h3>{elements.title}</h3>
                    <img className='titleImg' src={titleImg} alt="titleImg" />
                </div>
                <div className='hour'>
                    <h1>{elements.hours}</h1>
                </div>
                <div className='complement'>
                    <p>{elements.complement}</p>
                </div>
            </div>
        </Card>
    ))

    const displayDailyCard = dailyCARDS.map((elements) => (
        <Card key={elements.id}>
            <div className='colorCard' style={{backgroundColor: `${elements.color}`}}>
            <img className='img' src={elements.img} alt="img" />
            </div>
            <div className='innerCard'>
                <div className="title">
                    <h3>{elements.title}</h3>
                    <img className='titleImg' src={titleImg} alt="titleImg" />
                </div>
                <div className='hour'>
                    <h1>{elements.hours}</h1>
                </div>
                <div className='complement'>
                    <p>{elements.complement}</p>
                </div>
            </div>
        </Card>
    ))

    const displayMonthlyCard = monthlyCARDS.map((elements) => (
        <Card key={elements.id}>
            <div className='colorCard' style={{backgroundColor: `${elements.color}`}}>
            <img className='img' src={elements.img} alt="img" />
            </div>
            <div className='innerCard'>
                <div className="title">
                    <h3>{elements.title}</h3>
                    <img className='titleImg' src={titleImg} alt="titleImg" />
                </div>
                <div className='hour'>
                    <h1>{elements.hours}</h1>
                </div>
                <div className='complement'>
                    <p>{elements.complement}</p>
                </div>
            </div>
        </Card>
    ))
   
    console.log(pageState)

  return (
    <div className='Board'>
       <div className='mainBoard'>
        <Card className="mainCard">
            <Card className ="infoCard">
                    <div className="photoContainer">
                        <img className='photo' src={jeremy} alt="img" />
                    </div>
                    <div className='nameContainer'>
                    <div>
                        <p>Report for</p>
                    <div className='name'>
                        <h1>Jeremy</h1>
                        <h1>Robson</h1>
                    </div>
                    </div>
                    </div>
            </Card>       
           <Menu setActive={pageState} setPageState={setPageState}/>
        </Card>
       </div>
       {pageState === 1 ? <div className='cardBoard'> {displayDailyCard} </div>: null}
       {pageState === 2 ? <div className='cardBoard'> {displayWeeklyCard} </div> : null}
       {pageState === 3 ? <div className='cardBoard'> {displayMonthlyCard} </div> : null}
    </div>
  )
}

export default Boards 