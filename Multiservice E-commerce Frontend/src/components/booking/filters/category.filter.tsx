
// import React from 'react';
// import { Text, Checkbox } from '@mantine/core';

// interface CategoryFilterProps {
//   categories: string[];
//   selectedCategories: string[];
//   onChange: (selectedCategories: string[]) => void;
// }

// const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategories, onChange }) => {
//   return (
//     <div>
//       <Text size="lg" weight={500} style={{ marginBottom: '10px' }}>
//         Category
//       </Text>
//       {categories.map((category) => (
//         <Checkbox
//           key={category}
//           checked={selectedCategories.includes(category)}
//           onChange={() =>
//             onChange(selectedCategories.includes(category) ? selectedCategories.filter((c) => c !== category) : [...selectedCategories, category])
//           }
//           label={category}
//         />
//       ))}
//     </div>
//   );
// };

// export default CategoryFilter;
import React, { useState, useEffect } from 'react';
import { Text, Checkbox, Badge } from '@mantine/core';

interface CategoryFilterProps {
  products: Product[];
  categories: string[];
  selectedCategories: string[];
  onChange: (selectedCategories: string[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ products, categories, selectedCategories, onChange }) => {
  const calculateItemCount = (items: string[]) => {
    const itemCounts: { [category: string]: number } = {};

    items.forEach((item) => {
      products.forEach((product) => {
        const trimmedCategory = product.category.trim().toLowerCase();
        const trimmedItem = item.trim().toLowerCase();

        if (trimmedCategory === trimmedItem) {
          itemCounts[item] = (itemCounts[item] || 0) + 1;
        }
      });
    });

    return itemCounts;
  };

  const categoryCounts = calculateItemCount(categories);

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <Checkbox
            label={
              <div>
                {category} <Badge color="teal" style={{ marginLeft: '5px' }}>{`(${categoryCounts[category] || 0})`}</Badge>
              </div>
            }
            checked={selectedCategories.includes(category)}
            onChange={(event) => {
              if (event.currentTarget.checked) {
                onChange([...selectedCategories, category]);
              } else {
                onChange(selectedCategories.filter((selectedCategory) => selectedCategory !== category));
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
