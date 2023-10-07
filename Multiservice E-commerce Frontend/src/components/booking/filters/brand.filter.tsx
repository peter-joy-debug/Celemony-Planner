// import React from 'react';
// import { Text, Checkbox } from '@mantine/core';

// interface BrandFilterProps {
//   brands: string[];
//   selectedBrands: string[];
//   onChange: (selectedBrands: string[]) => void;
// }

// const BrandFilter: React.FC<BrandFilterProps> = ({ brands, selectedBrands, onChange }) => {
//   return (
//     <div>
//       <Text size="lg" weight={500} style={{ marginBottom: '10px' }}>
//         Brand
//       </Text>
//       {brands.map((brand) => (
//         <Checkbox
//           key={brand}
//           label={brand}
//           checked={selectedBrands.includes(brand)}
//           onChange={(event) => {
//             if (event.currentTarget.checked) {
//               onChange([...selectedBrands, brand]);
//             } else {
//               onChange(selectedBrands.filter((selectedBrand) => selectedBrand !== brand));
//             }
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default BrandFilter;
import React, { useState, useEffect } from 'react';
import { Text, Checkbox, Badge, Grid } from '@mantine/core';

interface BrandFilterProps {
  products: Product[];
  brands: string[];
  selectedBrands: string[];
  onChange: (selectedBrands: string[]) => void;
}

const BrandFilter: React.FC<BrandFilterProps> = ({ products, brands, selectedBrands, onChange }) => {
  const calculateItemCount = (items: string[]) => {
    const itemCounts: { [brand: string]: number } = {};

    items.forEach((item) => {
      products.forEach((product) => {
        const trimmedBrand = product.brand.trim().toLowerCase();
        const trimmedItem = item.trim().toLowerCase();

        if (trimmedBrand === trimmedItem) {
          itemCounts[item] = (itemCounts[item] || 0) + 1;
        }
      });
    });

    return itemCounts;
  };

  const brandCounts = calculateItemCount(brands);

  return (
    <div>
      {brands.map((brand) => (
        <div key={brand}>
          <Checkbox
            label={
              <div>
                <Grid>
                  <Grid.Col xs={12}>{brand}                    
                  <Badge color="teal" style={{ marginLeft: '5px' }}>
                      {`(${brandCounts[brand] || 0})`}
                    </Badge></Grid.Col>
                </Grid>
              </div>
            }
            checked={selectedBrands.includes(brand)}
            onChange={(event) => {
              if (event.currentTarget.checked) {
                onChange([...selectedBrands, brand]);
              } else {
                onChange(selectedBrands.filter((selectedBrand) => selectedBrand !== brand));
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BrandFilter;
