import { Link } from "react-router";
const frutas=["manzana", "pera", "mango"]
export default function Hijo(){
    return(
        <>
         <Link to="/">Padre</Link>
        <h1>Hijo</h1>
        {frutas.map((item, index)=>(
            <p>{item} - {index}</p>
        ))}
        </>
    )
}