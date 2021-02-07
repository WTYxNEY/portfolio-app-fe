import React, {  useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

import { getPortfolioByID } from '../../../actions/portfolio'
import './Detail.css'

const Detail = () => {
    const { portfolio_id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const portfolioDetail = useSelector((state) => state.portfolioById);

    useEffect(() => {
        dispatch(getPortfolioByID(portfolio_id));
    }, [location]);

    return (
        <div>
            {!portfolioDetail._id ?
                <div className="circular-progresss">
                    <CircularProgress />
                </div>
                :
                <div className="container">
                    <div className="bd-content">
                        <h1>{portfolioDetail.title}</h1>
                        <div className="img-detail">
                            <img src={portfolioDetail.selectedFile} alt="Blog Image" />
                        </div>
                        <h3>&emsp;{portfolioDetail.content}</h3>
                        <p>Position: {portfolioDetail.position}</p>
                        <p>Create At: {dayjs(portfolioDetail.createDate).format('DD/MM/YYYY')}</p>
                        <>
                            <Link to='/'>
                                <div className="bd-content-button">
                                    <button >Back</button>
                                </div>
                            </Link>
                        </>
                    </div>
                </div>
            }
        </div>
    )
}

export default Detail
