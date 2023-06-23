import { useQuery } from "@tanstack/react-query";

interface Items {
  _id: string;
  item: string;
  price: number;
}

const Items = () => {
  const getItems = async (): Promise<Items[]> => {
    const res = await fetch("http://localhost:5000/items");
    const items = await res.json();

    if (!res.ok) {
      throw Error(items.error);
    }
    return items;
  };

  const {
    data: _items,
    isError,
    isLoading,
    error,
  } = useQuery(["itemz"], getItems);

//   console.log(_items);
  return (
    <div>
      {isError && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {_items?.map((item) => (
        <div className="border shadow-lg p-6 my-6" key={item._id}>
          <p>{item.item}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
