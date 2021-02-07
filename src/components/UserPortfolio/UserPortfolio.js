import React, { useState, useEffect } from 'react'
import './UserPortfolio.css'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import CardItem from '../CardItem/CardItem'
import { fetchUserPortfolio } from '../../actions/portfolio'

const UserPortfolio = () => {
    const [myBlog, setMyBlog] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const portfolio = useSelector(state => state.portfolio)
    const location = useLocation();
    const dispatch = useDispatch();

    console.log(user)
    useEffect(() => {
        if (user?.result._id) {
            dispatch(fetchUserPortfolio(user?.result._id))
        } else {
            dispatch(fetchUserPortfolio(user?.result.googleId))
        }

    }, [dispatch, location])



    return (
        <div className="blog-container">

            <header className="blog-heading">
                <p>My Portfolio</p>
            </header>

            <div className="container">


                <div className="blog-content-create-btn">
                    <Link to="/create">
                        <button>Create Portfolio</button>
                    </Link>
                </div>

                {portfolio.length === 0 ?
                    <div className="no-content">
                        <p>You have no any portfolio, just create one</p>
                    </div>
                    :
                    < div className="blog-content-cards">
                        <div className="blog-content-cards-grid">

                            {portfolio.map(portfolio => {
                                return (
                                    <div key={portfolio._id} className="blog-content-card-item">
                                        <CardItem key={portfolio._id} portfolio={portfolio} myBlog={!myBlog} />
                                    </div>
                                )
                            })}

                        </div>
                    </div>}

            </div>
        </div>

    )
}

export default UserPortfolio
