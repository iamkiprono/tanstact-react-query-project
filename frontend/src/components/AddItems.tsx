import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";


interface Items {
    _id: string;
    item: string;
    price: number;
  }
  

const AddItems = () => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState<number | string>(0);

  const handleClick = async () => {
    const res = await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item, price }),
    });

    const newItem = await res.json();
    if (!res.ok) {
      console.log(newItem);
      throw Error(newItem.error);
    }

    return newItem;
  };

  const queryClient = useQueryClient();

  const { mutate, error, isError, isLoading } = useMutation(handleClick, {
    onSuccess: (data) => {
      queryClient.setQueryData(["itemz"], (old )  => {
        return [...old, data];
      });
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          mutate({ item, price });
        }}
      >
        Item
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="border"
          type="text"
        />
        Price
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="border"
          type="number"
        />
        <button type="submit">{isLoading ? "Loading" : "Add"}</button>
        {isError && <p className="text-red-700">{error.message}</p>}
      </form>
    </div>
  );
};

export default AddItems;
