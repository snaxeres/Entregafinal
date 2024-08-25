import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, where, query } from "firebase/firestore"


export const useCardList = () => {

  const [loading, setLoading] = useState(true)
  const [seeds, setSeeds] = useState([])
  const { id } = useParams()

  useEffect(() => {

    const database = getFirestore();
    
    const refCollection = !id
    ? collection(database, "items") 
    : query(collection(database, "items"), where("category", "==", id));

    getDocs(refCollection).then((snapshot) => {
      setSeeds(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        }))
    }).finally(() => setLoading(false));


  }, [id])

  return { loading, seeds }
}

