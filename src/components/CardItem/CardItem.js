import React, { useEffect, useRef } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import "./CardItem.css"

import ModalComponent from '../ModalComponent/ModalComponent'

function CardItem({ portfolio, myBlog }) {
    let timerID = useRef(null);
    const formatDate = dayjs(portfolio.createAt).format('DD/MM/YYYY')

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    return (
        <>
            {portfolio.content && (

                <Card style={{ zIndex: '1' }}>
                    <CardImg top width="100%" src={portfolio.selectedFile}
                        alt="Card image" />
                    <div>
                        <CardBody >
                            <CardTitle tag="h5">{portfolio.title}</CardTitle>
                            <CardText className="mb-2 text-muted">{portfolio.content.substring(0, 150) + "..."}</CardText>
                            <CardText>Position: {portfolio.position}</CardText>
                            <CardText>Create At: {formatDate}</CardText>
                            <CardText>Author: {portfolio.name}</CardText>
                            <div className="blog-button">
                                <Link to={`/detail/${portfolio._id}`} >
                                    <Button name="detail">See Detail</Button>
                                </Link>
                                {myBlog ? (
                                    <>
                                        <Link to={`/edit/${portfolio._id}`} >
                                            <Button name="edit">Edit</Button>
                                        </Link>
                                        <Link>
                                            <ModalComponent label="Delete" portfolio_id={portfolio._id} portfolio_title={portfolio.title} />
                                        </Link>
                                    </>
                                ) : null}

                            </div>
                        </CardBody>

                    </div>
                </Card>

            )}
        </>
    )
}

export default CardItem
