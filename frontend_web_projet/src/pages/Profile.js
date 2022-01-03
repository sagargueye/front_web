import React, {useState} from 'react';
import {Card, ListGroup} from "react-bootstrap";
import {isEmpty} from "../Utils/project_lib";
import {getItem} from "../services/LocaleStorage";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import '../styles/profile.css'

const Profile = () => {
    const [userId, setUserId] = useState("")
    const [userLogin, setUserLogin] = useState("")
    const [userAccount, setUserAccount] = useState("")
    const [userEmail, setUserEmail] = useState("")
/*
    const GetInfoUser = () => {
        if (!isEmpty(getItem('userId'))) {
            const url_api = "https://asi2.aiveo.fr/api/user/user/"+ getItem("userId")
            axios.get(url_api).then((response) => {
                setUserId(response.data.id)
                setUserLogin(response.data.login)
                setUserAccount(response.data.account)
                setUserEmail(response.data.email)})

            return <Card style={{ width: '18rem', padding : '20px'}}>
                <Card.Header>Account information</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>UserId: {userId}</ListGroup.Item>
                    <ListGroup.Item>Login: {userLogin}</ListGroup.Item>
                    <ListGroup.Item>email: {userEmail}</ListGroup.Item>
                    <ListGroup.Item>Money: {userAccount}</ListGroup.Item>
                </ListGroup>
            </Card>
        }
    }
*/
    return (
        <div>
            <Navigation/>
            {/*<GetInfoUser/>*/}




            <div className="container profile" >
                <div className="row">
                    <div className="copyright py-4 text-center text-white" style={{backgroundColor: "#1abc9c", marginBottom: "10px"}}>
                        <div className="container"><b>Mon profil</b></div>
                    </div>
                    <div className="col-lg-3 left">
                        <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid"
                                 alt="Responsive image"/>
                            <div className="p-3 border-bottom">
                                <h6 className="font-weight-bold text-dark">Nom prenom</h6>
                            </div>
                            <div className="p-3">
                                <button type="button" className="btn btn-danger btn-sm pl-4 pr-4">Deconnexion
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 right">
                        <div className="box shadow-sm rounded bg-white mb-3">
                            <div className="box-title border-bottom p-3">
                                <h6 className="m-0">Informations du compte</h6>
                            </div>
                            <div className="box-body p-0">
                                <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                                    <div className="font-weight-bold mr-3">
                                        <div className="text-truncate">Nom</div>
                                        <div className="text-truncate">Prénom</div>
                                        <div className="text-truncate">Pseudo</div>
                                        <div className="text-truncate">Mail</div>

                                    </div>

                                </div>
                                <div className="p-3 d-flex align-items-center osahan-post-header">
                                    <div className="font-weight-bold mr-3">
                                        <button type="button" className="btn btn-outline-success btn-sm">
                                            Modifier
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Profile;
