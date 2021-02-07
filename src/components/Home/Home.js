import React, { useEffect, useState } from 'react'
import { getPortfolio } from '../../actions/portfolio'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { RiFacebookCircleFill, RiInstagramLine, RiPhoneFill, RiMailLine, RiGithubFill } from 'react-icons/ri'

import './Home.css'
import CardItem from '../CardItem/CardItem'

const Home = () => {
    const portfolio = useSelector(state => state.portfolio)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPortfolio());
    }, [dispatch]);

    return (
        <div>
            {!portfolio ?
                <div className="container">
                    <CircularProgress />
                </div>

                : (

                    <div className="home-container">
                        {/* Home Heading */}
                        <header className="home-heading">
                            <p>Portfolio</p>
                        </header>

                        <div className="home-section">
                            <div className="container">
                                {/* Home Card Heading */}

                                <div className="home-content-card-heading">
                                    <h2>Front-End</h2>
                                </div>

                                {
                                    portfolio.filter((portfolio) => portfolio.position === "Front-End").length === 0 ?
                                        <div style={{ marginBottom: '50px' }}>
                                            We have no any portfolio in Front-End position
                        </div>
                                        :

                                        <>
                                            <div className="home-content-cards">
                                                <div className="home-content-cards-grid">
                                                    {portfolio.filter((portfolio) => portfolio.position === "Front-End").slice(0, 3).map((portfolio) => {
                                                        return <div className="home-content-card-item">
                                                            <CardItem key={portfolio._id} portfolio={portfolio} />
                                                        </div>
                                                    })}

                                                </div>
                                            </div>
                                            <div className="home-content-viewall">
                                                <Link to='/all-portfolio/Front-End'>
                                                    <button type="button" className="btn btn-outline-primary">View All</button>
                                                </Link>
                                            </div>
                                        </>

                                }
                            </div>
                        </div>

                        <div className="home-section">
                            <div className="container">
                                {/* Home Card Heading */}

                                <div className="home-content-card-heading">
                                    <h2>Back-End</h2>
                                </div>

                                {
                                    portfolio.filter((portfolio) => portfolio.position === "Back-End").length === 0 ?
                                        <div style={{ marginBottom: '50px' }}>
                                            We have no any portfolio in Back-End position
                                </div>
                                        :

                                        <>
                                            <div className="home-content-cards">
                                                <div className="home-content-cards-grid">
                                                    {portfolio.filter((portfolio) => portfolio.position === "Back-End").slice(0, 3).map((portfolio) => {
                                                        return <div className="home-content-card-item">
                                                            <CardItem key={portfolio._id} portfolio={portfolio} />
                                                        </div>
                                                    })}

                                                </div>
                                            </div>
                                            <div className="home-content-viewall">
                                                <Link to='/all-portfolio/Back-End'>
                                                    <button type="button" className="btn btn-outline-primary">View All</button>
                                                </Link>
                                            </div>
                                        </>

                                }

                            </div>
                        </div>

                        <div className="home-section">
                            <div className="container">
                                {/* Home Card Heading */}

                                <div className="home-content-card-heading">
                                    <h2>UX/UI</h2>
                                </div>

                                {
                                    portfolio.filter((portfolio) => portfolio.position === "UX/UI").length === 0 ?
                                        <div style={{ marginBottom: '50px' }}>
                                            We have no any portfolio in UX/UI position
                                </div>
                                        :

                                        <>
                                            <div className="home-content-cards">
                                                <div className="home-content-cards-grid">
                                                    {portfolio.filter((portfolio) => portfolio.position === "UX/UI").slice(0, 3).map((portfolio) => {
                                                        return <div className="home-content-card-item">
                                                            <CardItem key={portfolio._id} portfolio={portfolio} />
                                                        </div>
                                                    })}

                                                </div>
                                            </div>
                                            <div className="home-content-viewall">
                                                <Link to='/all-portfolio/UX-UI'>
                                                    <button type="button" className="btn btn-outline-primary">View All</button>
                                                </Link>
                                            </div>
                                        </>

                                }

                            </div>
                        </div>

                        <div className="home-section">
                            <div className="container">
                                {/* Home Card Heading */}

                                <div className="home-content-card-heading">
                                    <h2>Network</h2>
                                </div>

                                {
                                    portfolio.filter((portfolio) => portfolio.position === "Network").length === 0 ?
                                        <div style={{ marginBottom: '50px' }}>
                                            We have no any portfolio in Network position
                                </div>
                                        :

                                        <>
                                            <div className="home-content-cards">
                                                <div className="home-content-cards-grid">
                                                    {portfolio.filter((portfolio) => portfolio.position === "Network").slice(0, 3).map((portfolio) => {
                                                        return <div className="home-content-card-item">
                                                            <CardItem key={portfolio._id} portfolio={portfolio} />
                                                        </div>
                                                    })}

                                                </div>
                                            </div>
                                            <div className="home-content-viewall">
                                                <Link to='/all-portfolio/Network'>
                                                    <button type="button" className="btn btn-outline-primary">View All</button>
                                                </Link>
                                            </div>
                                        </>

                                }

                            </div>
                        </div>

                        <div className="home-section">
                            <div className="container">
                                {/* Home Card Heading */}

                                <div className="home-content-card-heading">
                                    <h2>Infrastructure</h2>
                                </div>

                                {
                                    portfolio.filter((portfolio) => portfolio.position === "Infrastructure").length === 0 ?
                                        <div style={{ marginBottom: '50px' }}>
                                            We have no any portfolio in Infrastructure position
                                </div>
                                        :

                                        <>
                                            <div className="home-content-cards">
                                                <div className="home-content-cards-grid">
                                                    {portfolio.filter((portfolio) => portfolio.position === "Infrastructure").slice(0, 3).map((portfolio) => {
                                                        return <div className="home-content-card-item">
                                                            <CardItem key={portfolio._id} portfolio={portfolio} />
                                                        </div>
                                                    })}

                                                </div>
                                            </div>
                                            <div className="home-content-viewall">
                                                <Link to='/all-portfolio/Infrastructure'>
                                                    <button type="button" className="btn btn-outline-primary">View All</button>
                                                </Link>
                                            </div>
                                        </>

                                }

                            </div>
                        </div>

                        <div className="home-section">
                            <div className="container">
                                {/* Home Card Heading */}

                                <div className="home-content-card-heading">
                                    <h2>Other</h2>
                                </div>

                                {
                                    portfolio.filter((portfolio) => portfolio.position === "Other").length === 0 ?
                                        <div style={{ marginBottom: '50px' }}>
                                            We have no any portfolio in Other position
                        </div>
                                        :

                                        <>
                                            <div className="home-content-cards">
                                                <div className="home-content-cards-grid">
                                                    {portfolio.filter((portfolio) => portfolio.position === "Other").slice(0, 3).map((portfolio) => {
                                                        return <div className="home-content-card-item">
                                                            <CardItem key={portfolio._id} portfolio={portfolio} />
                                                        </div>
                                                    })}

                                                </div>
                                            </div>
                                            <div className="home-content-viewall">
                                                <Link to='/all-portfolio/Other'>
                                                    <button type="button" className="btn btn-outline-primary">View All</button>
                                                </Link>
                                            </div>
                                        </>

                                }

                            </div>
                        </div>


                        <footer>
                            <div className="footer-grid">

                                <div className="footer-item">
                                    <h4>Contact Me</h4>
                                    <div className="footer-item-detail">
                                        <p> <i><RiFacebookCircleFill /></i>Watunyu Panmun</p>
                                        <p> <i><RiInstagramLine /></i>Watunyu Panmun</p>
                                        <p><i><RiMailLine /></i>watunyu101041@gmail.com</p>
                                        <p><i><RiGithubFill /></i>WTYxNEY</p>
                                        <p><i><RiPhoneFill /></i>098-528-3239</p>
                                    </div>
                                </div>

                                <div className="footer-item">
                                    <h4>About Me</h4>
                                    <p>สวัสดีครับ ผมชื่อนายวทัญญู ปานหมั่น ชื่อเล่น เนย์ เว็บไซต์นี้จัดทำขึ้นเพื่อเป็นการฝึกทำ frontend developer และ backend developer
                                    ในขณะที่ผมกำลังศึกษาอยู่ชั้นปีที่ 4 คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี และเป็นผลงานในการนำเสนอแก่ผู้ที่ได้เข้ามารับชม
                                    ขอบคุณสำหรับท่านที่เสียสละเวลาอันมีค่าเข้ามารับชมเว็บไซต์นี้ครับ
</p>
                                </div>

                                <div className="footer-item">
                                    <h4>Address</h4>

<p>ที่อยู่ปัจจุบัน <br/> 237/113 ซอยเอกชัย26 ถนนเอกชัย ตำบลมหาชัย อำเภอเมืองสมุทรสาคร จังหวัดสมุทรสาคร 74000</p>
                                </div>

                            </div>
                        </footer>
                        <div class="copyright">
                            <div class="copyright-grid">
                                <div>
                                    <p>Copyright © 2020 Watunyu Panmun - All Rights Reserved</p>
                                </div>
                                <div>
                                    <p>Portfolio Application by Watunyu Panmun</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


        </div>
    )
}

export default Home
