import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    List,
    Image,
    Grid,
} from 'semantic-ui-react'
class AddPatientFrom extends  React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <div className="ui-toolbar">
                <Grid>
                    <Grid.Column width={2}>
                        <MenuTabularOnLeft></MenuTabularOnLeft>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Grid.Column>
                            <Form size={'small'} >
                                <Form.Group grouped>
                                    <Form.Field
                                        control={Input}
                                        label='Patient ID'
                                        placeholder='Patient ID'
                                    />
                                    <Form.Field
                                        control={Input}
                                        label='Initials'
                                        placeholder='Initials'
                                    />
                                    <Form.Field
                                        control={Input}
                                        label='Age'
                                        placeholder='Age'
                                    />
                                    <Form.Field
                                        control={Checkbox}
                                        label='Pregnant'
                                        placeholder='Pregnant'
                                    />
                                    <Form.Field
                                        control={Input}
                                        label='Gestational Age'
                                        placeholder='Gestational Age'
                                    />
                                    <input type="submit" value="Submit"/>
                                </Form.Group>
                            </Form>

                        </Grid.Column>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default AddPatientFrom;