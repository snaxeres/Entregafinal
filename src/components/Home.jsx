
import { useCardList } from "../hooks/useCardList"
import { ItemListContainer } from "./ItemListContainer"


export const Home = ()=> {
    const { loading, seeds } = useCardList()    
    return <><ItemListContainer seeds={seeds} loading={loading} />
    </>
}