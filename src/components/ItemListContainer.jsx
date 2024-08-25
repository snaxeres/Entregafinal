import Container from "react-bootstrap/Container"
import { ItemListDetail } from "./ItemListDetail"

export const ItemListContainer = ({ seeds, loading }) => (
	<Container className="d-flex flex-wrap mt-3">
		{loading ? (
			<div>Loading...</div>
		) : (
			seeds.map(seed => {
            return <ItemListDetail key={seed.id} seed={seed}/>
            })
		)}
	</Container>
) 



