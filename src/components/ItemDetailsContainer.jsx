import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, Container } from "react-bootstrap"
import { ItemContext } from "../contexts/ItemsContexts"
import { getDoc, getFirestore, doc } from "firebase/firestore"
import { ItemCount } from "./ItemCount"


export const ItemDetailsContainer = () => {
    const [seed, setSeed] = useState([])
    const { addItem } = useContext(ItemContext);
    const { id } = useParams()

    useEffect(() => {

        const database = getFirestore();
        const refDoc = doc(database, "items", id)

        getDoc(refDoc).then((snapshot) => {
            setSeed({ id: snapshot.id, ...snapshot.data() })
        });
    }, [id])

    const onAdd = (count) => {
        addItem({ ...seed, quantity: count })
    }

    return (
        <>
            <Container>
                <h1>Producto</h1>
                <Card style={{ width: "18rem", padding: "1rem" }}>
                    <Card.Img
                        variant="top"
                        src={seed.pictureUrl}
                    />
                    <Card.Body>
                        <Card.Title>
                            {seed.title}
                        </Card.Title>
                        <Card.Text>Genetica: {seed.category}</Card.Text>
                        <Card.Text>Precio: {seed.price}</Card.Text>
                        <Card.Text>Descripcion: {seed.detail}</Card.Text>
                        <ItemCount stock={seed.stock} onAdd={onAdd} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}