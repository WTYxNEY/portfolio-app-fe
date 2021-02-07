import React, { useState, useRef, useEffect, } from 'react'
import './Create.css'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'

import { createPortfolio } from '../../../actions/portfolio'
import AlertSuccess from '../../Alert/AlertSuccess'
import AlertError from '../../Alert/AlertError'

const Create = (props) => {
    let timerID = useRef(null);
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [newPortfolio, setNewPortfolio] = useState({
        title: '',
        content: '',
        selectedFile: '',
        position: null
    });

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
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const handleOnChange = (e) => {
        setNewPortfolio({ ...newPortfolio, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPortfolio.title !== '' && newPortfolio.content !== '' && newPortfolio.selectedFile !== '' && newPortfolio.position !== null) {
            dispatch(createPortfolio({ ...newPortfolio, name: user?.result?.name }));
            clear()
            AlertSuccess("Create success")
            timerID = setTimeout(() => {
                props.history.push(`/portfolio/${user?.result._id}`);
            }, 2000)
        } else {
            AlertError("Unsuccesful, Please Checking Your Input")
        }
    };

    const clear = () => {
        setNewPortfolio({
            title: '',
            content: '',
            selectedFile: '',
            position: null
        })
    }


    return (
        <div className="create">
            <div className="create-box">
                <div className="create-box-content">

                    <div className="create-box-content-item">
                        <h3>Create A New Portfolio</h3>

                        <input type="text" id="Title" value={newPortfolio.title} name="title" placeholder="Enter Title..." required onChange={handleOnChange} />

                        <textarea type="text" id="content" value={newPortfolio.content} name="content" placeholder="Enter Content..." required onChange={handleOnChange} />

                        <FileBase type="file" id="selectedFile" value={newPortfolio.selectedFile} name="selectedFile" multiple={false}
                            onDone={({ base64 }) => setNewPortfolio({ ...newPortfolio, selectedFile: base64 })}
                        />

                        <select value={newPortfolio ? newPortfolio.position : "position"} name="position" id="position" value={newPortfolio.position} onChange={handleOnChange}>
                            {positionList.map((p) => {
                                return (
                                    <>
                                        {p.id === 1 ? <option key={p.id} value={p.id} value={p.position} disabled selected>{p.position}</option>
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
    )
}

export default Create
