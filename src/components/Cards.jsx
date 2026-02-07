import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {

  const data = useLoaderData();
  const {categoryName} = useParams();
  const [devices , SetDevices] = useState([]);


    useEffect(() => {
    if (categoryName?.trim() === "All Product") {
      SetDevices(data);
    } else if (categoryName) {
      const categoryNameTrim = categoryName.trim();
      const newData = [...data].filter(
        (item) => item.category === categoryNameTrim
      );
      SetDevices(newData);
    } else {
      SetDevices([...data].slice(0,6));
    }
  }, [categoryName, data]);


    return (
       <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
  
       {devices.length > 0 ? (
        devices.map((product) => (
          <Card key={product.product_id} product={product} ></Card>
        ))
      ) : (
        <p className="mt-10 text-3xl font-bold">No Data found</p>
      )}
    </div>
    );
};

export default Cards;