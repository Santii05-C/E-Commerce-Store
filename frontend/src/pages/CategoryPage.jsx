import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
const CategoryPage = () => {
  const { fetchProductsByCategory, products } = useProductStore();

  const { category } = useParams();
  //5:06
  useEffect(() => {
    fetchProductsByCategory("shoes");
  }, [fetchProductsByCategory]);

  console.log("products:", products);
  return <div className="">CategoryPage</div>;
};
export default CategoryPage;
