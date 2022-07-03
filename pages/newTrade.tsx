import NewTradeForm from "../components/trades/newTradeForm";

export default function newTrade() {
  const addTradeHandler = () => {
    console.log("Add trade pressed");
  };

  return <NewTradeForm onAddTrade={addTradeHandler} />;
}
