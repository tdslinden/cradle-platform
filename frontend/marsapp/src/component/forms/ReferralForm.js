/**
 * Class: ReferralForm
 * Summary:
 *  Contains the contents and functionality of the List of Referrals page.
 */

import React from "react";
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core";
import MenuTabularOnLeft from "../pages/MainMenu";
import {
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    List,
    Image,
    Dropdown,
    Grid
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Table,
    Button
} from 'react-bootstrap';

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('111555666', 'Alex', 'thomas', new Date().toDateString()),
    createData('222555444', 'Bob', 'theo', new Date().toDateString()),
    createData('111222333', 'fanny', 'theresha', new Date().toDateString()),
    createData('111222888', 'hanny', 'Brian', new Date().toDateString()),
    createData('444555666', 'janny', 'Katy', new Date().toDateString()),
];

class ReferralForm extends React.Component {
    state = {activeItem: 'bio'}

    constructor() {
        super();

        this.state = {
            toggled: false
        }
    }

    toggleMenu() {
        this.setState({toggled: !this.state.toggled});
    }

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    }
    useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(2),

        },
        table: {
            minWidth: 650,
        },
        tableWrapper: {
            overflowX: 'auto',
        },
        uiHeader: {
            textAlign: 'center',
        }

    }));

    render() {
        const {activeItem} = this.state
        const useStyles = this.useStyles
        const friendOptions = [
            {
                key: 'Jenny Hess',
                text: 'Jenny Hess',
                value: 'Jenny Hess',
            },
            {
                key: 'Elliot Fu',
                text: 'Elliot Fu',
                value: 'Elliot Fu',
            },
            {
                key: 'Stevie Feliciano',
                text: 'Stevie Feliciano',
                value: 'Stevie Feliciano',
            },
            {
                key: 'Christian',
                text: 'Christian',
                value: 'Christian',
            },
            {
                key: 'Matt',
                text: 'Matt',
                value: 'Matt',
            },
            {
                key: 'Justen Kitsune',
                text: 'Justen Kitsune',
                value: 'Justen Kitsune',
            },
        ]


        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h1>Referrals</h1>
                                </Col>
                                <Col className="text-right">
                                    <Button variant="primary" size="sm" as={Link} to="createReferral">
                                        Create New Referral
                                    </Button>
                                </Col>
                            </Row>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Patient ID</th>
                                        <th>Patient Name</th>
                                        <th>Referred By</th>
                                        <th>Referral Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map(row => (
                                        <tr key={row.name} component={Link} to={"/followUpDetail"}>
                                            <th scope="row">
                                                <Link to="followUpDetail">
                                                    {row.name}
                                                </Link>
                                            </th>
                                            <td>{row.calories}</td>
                                            <td>{row.fat}</td>
                                            <td>{row.carbs}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form size={'small'}>
                                <Form.Group grouped width={'equal'}>
                                    <Form.Field>
                                        <label>Assign To:</label>
                                        <Dropdown
                                            placeholder='Select Assignee'
                                            fluid
                                            selection
                                            options={friendOptions}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Status:</label>
                                        <Dropdown
                                            placeholder='Select Status'
                                            fluid
                                            selection
                                            options={friendOptions}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Sort By:</label>
                                        <Dropdown
                                            placeholder='Select Sort By'
                                            fluid
                                            selection
                                            options={friendOptions}
                                        />
                                    </Form.Field>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default connect(null,)(ReferralForm);