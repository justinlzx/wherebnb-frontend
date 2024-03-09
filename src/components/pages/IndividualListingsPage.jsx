import { useParams } from 'react-router-dom'

export const IndividualListingsPage = () => {

    const { id } = useParams()



    return ( 
        <div>
            indiv listings page {id}
        </div>
    )
};