import React, { useCallback, useMemo } from "react";
import "./Categories.css";

const Categories = ({ chooseCategory }) => {
  const categories = useMemo(
    () => [
      {
        key: "all",
        name: "Все товары",
      },
      {
        key: "food",
        name: "Сухой корм",
      },
      {
        key: "vitamins",
        name: "Витамины и добавки",
      },
      {
        key: "toys",
        name: "Игрушки",
      },
      {
        key: "clothes",
        name: "Одежда",
      },
      {
        key: "muzzle",
        name: "Намордник",
      },
    ],
    []
  );

  const handleCategoryClick = useCallback(
    (categoryKey) => {
      chooseCategory(categoryKey);
    },
    [chooseCategory]
  );

  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => handleCategoryClick(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
