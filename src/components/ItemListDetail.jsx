import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

export const ItemListDetail = ({ seed }) => (
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
			<Link to={`/item/${seed.id}`}>
				<Button className="btn-fijo" variant="primary">Ir a la descripcion</Button>
			</Link>
		</Card.Body>
	</Card>
)