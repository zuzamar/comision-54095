import "../styles/ItemListContainer.css"

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1 style={{ height:"50%",backgroundColor:"azure",fontFamily: "inherit", fontSize: "4rem", color:"darkcyan", padding:"1rem", textAlign:"center" }}> {greeting} </h1>
    </div>
  );
};
