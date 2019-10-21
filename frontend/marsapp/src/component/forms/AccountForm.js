/**
 * Class: AccountForm
 * Summary:
 *  Contains the contents and functionality of the Account page.
 */

import React from "react";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import api from "../../api"

const Modal = () => (


    <Popup
        trigger={<Button variant="success" onClick={() => this.submit(this.state.data)}>
            Create
        </Button>}
        modal
        closeOnDocumentClick
    >
        <Container className={"text-left"}>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                            />
                            {/*error handling*/}
                            {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="last_name"
                                name="last_name"
                                placeholder="First Name"
                            />
                            {/*error handling*/}
                            {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="last_name"
                                name="last_name"
                                placeholder="Last Name"

                            />
                            {/*error handling*/}
                            {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Addresss"

                            />
                            {/*error handling*/}
                            {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"

                            />
                            {/*error handling*/}
                            {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                        </Form.Group>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                id="role"
                                name="role"
                                placeholder="Role"

                            />
                            {/*error handling*/}
                            {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>At a station number</Form.Label>
                            <Form.Control
                                type="text"
                                id="at_station_number"
                                name="at_station_number"
                                placeholder="At a station number"
                            />
                            {/*error handling*/}
                            {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className={"text-right"}>
                        <Modal/>
                    </Col>
                </Row>
            </Form>

        </Container>

    </Popup>
);

class AccountForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                id: "1",
                at_a_station_no: "1",
                first_name: "potatoe",
                last_name: "Potatata",
                dob: "2019-10-10",
                country: "Uganda",
                phone: "604-440-2037",
                email: "pp@gmail.com",
                role: "admin",
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        api.userInfo.getUserInfoById({userId: 1}).then(res => {
            // get user information
            console.log("user info", res);
        })
    }

    handleChange(event) {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        });
    }

    submit = event => {
        console.log("data to be sent", event)
        if (event) {
            this.props.submit(event)
        }
    };


    render() {
        console.log(this.state.data)
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Account</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        onChange={this.handleChange}

                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        placeholder="First Name"
                                        value={this.state.data.first_name}
                                        onChange={this.handleChange}
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        placeholder="Last Name"
                                        value={this.state.data.last_name}
                                        onChange={this.handleChange}

                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email Addresss"
                                        value={this.state.data.email}
                                        onChange={this.handleChange}

                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={this.state.data.phone}
                                        onChange={this.handleChange}

                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="role"
                                        name="role"
                                        placeholder="Role"
                                        value={this.state.data.role}
                                        onChange={this.handleChange}

                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>At a station number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="at_station_number"
                                        name="at_station_number"
                                        placeholder="At a station number"
                                        value={this.state.data.at_a_station_no}
                                        onChange={this.handleChange}
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"text-right"}>
                                <Modal/>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}

AccountForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default AccountForm;