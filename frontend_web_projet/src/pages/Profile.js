import React, {useState} from 'react';
import {Card, ListGroup} from "react-bootstrap";
import {isEmpty} from "../Utils/project_lib";
import {getItem} from "../services/LocaleStorage";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Profile = () => {
    const [userId, setUserId] = useState("")
    const [userLogin, setUserLogin] = useState("")
    const [userAccount, setUserAccount] = useState("")
    const [userEmail, setUserEmail] = useState("")

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

    return (
        <div>
            <Navigation/>
            <GetInfoUser/>
            <Footer/>
        </div>
    );
};

export default Profile;
