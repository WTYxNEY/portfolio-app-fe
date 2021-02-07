import React, { useState, useEffect, useRef } from 'react'
import './Edit.css'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import FileBase from 'react-file-base64'

import { getPortfolioByID, updatePortfolio } from '../../../actions/portfolio'
import AlertSuccess from '../../Alert/AlertSuccess'
import AlertError from '../../Alert/AlertError'

const Edit = (props) => {
    let timerID = useRef(null);
    const { portfolio_id } = useParams();
    const location = useLocation();
    const portfolioDetail = useSelector(state => state.portfolioById);
    const [editPortfolio, setEditPortfolio] = useState(portfolioDetail);
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const positionList = [
        {
            id: 1,
            position: "Select Position"
        },
        {
            id: 2,
            position: "Front-End"
        },
        {
            id: 3,
            position: "Back-End"
        },
        {
            id: 4,
            position: "UX/UI"
        },
        {
            id: 5,
            position: "Network"
        },
        {
            id: 6,
            position: "Infrastructure"
        },
        {
            id: 7,
            position: "Other"
        },
    ];

    useEffect(() => {
        dispatch(getPortfolioByID(portfolio_id))
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [dispatch, location])

    useEffect(() => {
        setEditPortfolio(portfolioDetail)
    }, [portfolioDetail])

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const handleOnChange = (e) => {
        setEditPortfolio({ ...editPortfolio, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editPortfolio.title !== '' && editPortfolio.content !== '' && editPortfolio.selectedFile !== '' && editPortfolio.position !== null) {
            dispatch(updatePortfolio(portfolioDetail._id, { ...editPortfolio, name: user?.result?.name }));
            clear()
            AlertSuccess("Edit success")
            timerID = setTimeout(() => {
                props.history.push(`/portfolio/${user?.result._id}`);
            }, 2000)
        } else {
            AlertError("Unsuccesful, Please Checking Your Input")
        }
    };

    const clear = () => {
        setEditPortfolio({
            title: '',
            content: '',
            selectedFile: '',
            position: null
        })
    }



    return (
        <>
            {
                !editPortfolio ?
                    <div>
                        <CircularProgress />
                    </div>
                    :
                    <div className="create">
                        <div className="create-box">
                            <div className="create-box-content">

                                <div className="create-box-content-item">
                                    <h3>Edit Portfolio</h3>

                                    <input type="text" id="Title" value={editPortfolio.title} name="title" placeholder="Enter Title..." required onChange={handleOnChange} />

                                    <textarea type="text" id="content" value={editPortfolio.content} name="content" placeholder="Enter Content..." required onChange={handleOnChange} />

                                    <FileBase type="file" id="selectedFile" name="selectedFile" multiple={false}
                                        onDone={({ base64 }) => setEditPortfolio({ ...editPortfolio, selectedFile: base64 })}
                                    />

                                    <select value={editPortfolio ? editPortfolio.position : "position"} name="position" id="position" onChange={handleOnChange}>
                                        {positionList.map((p) => {
                                            return (
                                                <>
                                                    {p.id === 3 ? <option key={p.id} value={p.id} value={p.position} disabled selected>{p.position}</option>
                                                        :
                                                        <option key={p.id} value={p.id} value={p.position}>{p.position}</option>
                                                    }

                                                </>
                                            )
                                        })}

                                    </select>

                                    <div className="create-box-content-item-btn">
                                        <button name="save" onClick={handleSubmit}>Save</button>
                                        <button name="clear" onClick={() => clear()}>Clear</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
            }
        </>

    )
}

export default Edit
