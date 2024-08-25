import { useState } from "react"
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };

    const handleDecrease = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
        }
    }

    const handleAdd = () => {
        onAdd(count)
        setCount(1)
    }
    return (

        <Container>
            <Button className="btn-fijo" variant="primary" type="button" onClick={handleIncrease} >
                +
            </Button>
            <Container>
                {count}
            </Container>
            <Button className="btn-fijo" variant="primary" type="button" onClick={handleDecrease} >
                -
            </Button>
            <hr />
            <Button className="btn-fijo" variant="primary" type="button" onClick={handleAdd} >
                Agregar al carrito
            </Button>
        </Container>
    )
}