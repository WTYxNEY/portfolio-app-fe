import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useLocation } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './AllPortfolio.css'
import { CircularProgress } from '@material-ui/core'

import { getPortfolio } from '../../actions/portfolio'
import CardItem from '../CardItem/CardItem'

const AllPortfolio = () => {
    const { position } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const [search, setSearch] = useState('')
    const portfolio = useSelector((state) => {
        if (position === 'all') {
            return state.portfolio;
        }
        if (position === 'UX-UI') {
            return state.portfolio.filter((portfolio) => portfolio.position === 'UX/UI');
        }
        return state.portfolio.filter((portfolio) => portfolio.position === position);
    });


    useEffect(() => {
        dispatch(getPortfolio());
    }, [dispatch, location])

    const searchHandle = portfolio.filter(portfolio => {
        return portfolio.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            {
                !portfolio ?
                    <div>
                        <CircularProgress />
                    </div>
                    :
                    portfolio && (
                        <div className="container">
                            <Form>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="search"
                                        id="search"
                                        value={search}
                                        placeholder="Search to find portfolio... "
                                        onChange={e => setSearch(e.target.value)}
                                        onFocus
                                    />
                                </FormGroup>
                            </Form>

                            <div className="blogs-content-card-heading">
                                <h2>{position === 'all' ? "All Portfolio" :
                                    position === 'UX-UI' ?
                                        "Portfolio for UX/UI position" :
                                        `Portfolio for ${position} position`
                                }</h2>
                            </div>

                            {/* Home Card Content */}
                            <div className="blogs-content-cards">
                                <div className="blogs-content-cards-grid">

                                    {
                                        searchHandle.map((portfolio) => {
                                            return <div className="blogs-content-card-item">
                                                <CardItem key={portfolio._id} portfolio={portfolio} />
                                            </div>
                                        })
                                    }

                                </div>
                            </div>
                            <div className="blogs-content-back">
                                <Link to='/'>
                                    <button type="button" className="btn btn-outline-primary">Back</button>
                                </Link>
                            </div>
                        </div>
                    )

            }
        </div>
    )
}

export default AllPortfolio
