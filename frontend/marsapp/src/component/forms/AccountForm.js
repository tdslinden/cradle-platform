import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {Checkbox, Form, Input, Select, Grid, List, TextArea} from "semantic-ui-react";

class AccountForm extends React.Component {
    render() {

        return (
            <div className="ui-toolbar">
                <Grid>
                    <Grid.Column width={2}>
                        <MenuTabularOnLeft/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <div>
                            <p><b>Username:</b> jsmith </p>
                            <p><b>First Name:</b> John</p>
                            <p><b>Last Name:</b> Smith</p>
                            <p><b>Role:</b> Healthworker</p>
                            <p><b>at_a_station_no:</b> 5</p>
                            <p><b>Email:</b> jsmith@email.com</p>
                            <p><b>Phone Number:</b> 123-456-7890</p>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default AccountForm;