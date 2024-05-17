import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList.jsx";
import { useParams  } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../fireBaseConfig.js";
import { addDoc, collection, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = () => {
    
    const { name } = useParams();

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        const productsCollection = collection ( db, "products");
        let consulta = productsCollection
        if(name){
            consulta = query (productsCollection, where ( "category", "==", name ));
        }

        getDocs(consulta).then ((res)=> {
            let newArray = res.docs.map((doc)=>{
                return {id: doc.id, ...doc.data()};
            });
            setItems (newArray);
        });

        }, [name]);

    if (items.length === 0) {
    return (
        <div style={{ display: "flex", gap: "40px"}}>
            <div>
            <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
            />
            <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" , textAlign:"center"}}
            height={40}
            width={300}
            />
            <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={100}
            width={300}
            />
            <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem",  }}
            height={20}
            width={300}
            />
        </div>
        <div>
            <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
            />
            <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" , textAlign:"center"}}
            height={40}
            width={300}
            />
            <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={100}
            width={300}
            />
            <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem",  }}
            height={20}
            width={300}
            />
        </div>
        <div>
            <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
            />
            <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" , textAlign:"center"}}
            height={40}
            width={300}
            />
            <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={100}
            width={300}
            />
            <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem",  }}
            height={20}
            width={300}
            />
        </div>
        <div>
            <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
            />
            <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" , textAlign:"center"}}
            height={40}
            width={300}
            />
            <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={100}
            width={300}
            />
            <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem",  }}
            height={20}
            width={300}
            />
        </div>
        </div>
    );
    }

    return (
    <>
        <h1 style={{ display: "flex", gap: "40px", fontFamily: "Arial, sans-serif", color: "#73284d", fontSize: "32px" }}> Bienvenidos</h1>
        {items.length > 0 ? (
        <ItemList items={items} error={error} />
        ) : (
        <h1 style={{ display: "flex", gap: "40px", fontFamily: "Arial, sans-serif", color: "#73284d", fontSize: "32px" }}> cargando...</h1>
        )}
        
    </>
    );
};

export default ItemListContainer;
    
