import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import api from "../../api";
import React, {useState} from "react";


export default function RegularPopUp() {
    const [show, setShow] = useState(false);


    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        let data = {
            username: "test test",
            password: "thisispassword"
        }
        api.user.createUser(data.username , data.password).then(result => {
            console.log(result);
        })

        setShow(true);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create Account
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="enter something secure"
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="conf_password"
                                        name="conf_password"
                                        placeholder="Confirm Password"
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


//
// export default function RegularPopUp() {
//     const [show, setShow] = useState(false);
//     const data = {
//         username: "",
//         password: ""
//     }
//
//     const handleClose = () => {
//         setShow(false)
//     }
//     const handleShow = () => {
//
//         api.user.createUser(data).then(result => {
//             console.log(result);
//         })
//
//         setShow(true);
//     }
//     function handleClick(e){
//         data.username = e
//         console.log("TETSETSt" , e)
//     }
//
//     return (
//         <>
//             <Button variant="primary" onClick={handleShow}>
//                 Create Account
//             </Button>
//
//             <Modal show={show} onHide={handleClose} animation={false}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Create Account</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Row>
//                             <Col>
//                                 <Form.Group>
//                                     <Form.Label>Username</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         id="username"
//                                         name="username"
//                                         placeholder="Username"
//                                         onChange={handleClick(data.username)}
//                                         // value={data.username}
//                                     />
//                                     {/*error handling*/}
//                                     {/* <Form.Text className="text-muted">
//                                         {errors.email && <InlineError text={errors.email} />}
//                                     </Form.Text> */}
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col>
//                                 <Form.Group>
//                                     <Form.Label>Password</Form.Label>
//                                     <Form.Control
//                                         type="password"
//                                         id="password"
//                                         name="password"
//                                         placeholder="enter something secure"
//
//                                     />
//                                     {/*error handling*/}
//                                     {/* <Form.Text className="text-muted">
//                                         {errors.email && <InlineError text={errors.email} />}
//                                     </Form.Text> */}
//                                 </Form.Group>
//                             </Col>
//                             <Col>
//                                 <Form.Group>
//                                     <Form.Label>Confirm Password</Form.Label>
//                                     <Form.Control
//                                         type="password"
//                                         id="conf_password"
//                                         name="conf_password"
//                                         placeholder="Confirm Password"
//                                     />
//                                     {/*error handling*/}
//                                     {/* <Form.Text className="text-muted">
//                                         {errors.email && <InlineError text={errors.email} />}
//                                     </Form.Text> */}
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                     </Form>
//
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }
//
//
