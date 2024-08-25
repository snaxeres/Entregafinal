import { useContext, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { ItemContext } from "../contexts/ItemsContexts";
import {
    getFirestore,
    collection,
    addDoc
} from "firebase/firestore";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const initialValues = {
    phone: "",
    email: "",
    name: "",
}

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues)
    const { items, reset } = useContext(ItemContext)
    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0)
    const handleChange = (ev) => {
        setBuyer(prev => {
            return { ...prev, [ev.target.name]: ev.target.value }
        })
    }
    const handleOrder = () => {
        const order = {
            buyer,
            items,
            total,
        }

        const database = getFirestore();
        const orderCollection = collection(database, "orders");
        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su orden: " + id + "Ha sido Completada!")
                reset()
                setBuyer(initialValues)
            }
        })
    }
    if (!items.length) return (
        <Container>
            <h1>Su carrito de compras esta vacio!</h1>
        </Container>
    )

    return (
        <>
            <Container className="d-flex flex-row mt-3 container">
                {items?.map((i =>

                    <Row>
                        <Col key={i.id} mb-3 xs="auto">
                            <Card style={{ width: "18rem", padding: "1rem" }}>
                                <Card.Img
                                    variant="top"
                                    src={i.pictureUrl}
                                />
                                <Card.Body>
                                    <Card.Text>Cantidad: {i.quantity}</Card.Text>
                                    <Card.Title>
                                        {i.title}
                                    </Card.Title>
                                    <Card.Text>Genetica: {i.category}</Card.Text>
                                    <Card.Text>Precio: {i.price}</Card.Text>
                                    <Card.Text>Descripcion: {i.detail}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))
                }
            </Container>

            <Container>
                <Button className="btn-fijo" variant="primary" type="button" onClick={reset} >
                    Vaciar Carrito
                </Button>
            </Container>


            {!!items.length && (
                <Container>
                    <Form>
                        <Row className="mb-3 mt-4">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label >Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={buyer.email} onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3 mt-4" controlId="formGridAddress1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control placeholder="Ingrese su nombre" name="name" value={buyer.name} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3 mt-4" controlId="formGridAddress2">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control placeholder="Ingrese su numero de telefono" name="phone" value={buyer.phone} onChange={handleChange} />
                        </Form.Group>
                        <Container>
                            <h2>
                                <Card.Text>Total: ${total}</Card.Text>
                            </h2>
                        </Container>
                        <Button variant="primary" type="button" onClick={handleOrder} >
                            Comprar
                        </Button>
                    </Form>
                </Container>
            )}
        </>
    )
}
