// import React from 'react';
// import { Text, Checkbox } from '@mantine/core';

// interface ColorFilterProps {
//   colors: string[];
//   selectedColors: string[];
//   onChange: (selectedColors: string[]) => void;
// }

// const ColorFilter: React.FC<ColorFilterProps> = ({ colors, selectedColors, onChange }) => {
//   return (
//     <div>
//       <Text size="lg" weight={500} style={{ marginBottom: '10px' }}>
//         Color
//       </Text>
//       {colors.map((color) => (
//         <Checkbox
//           key={color}
//           checked={selectedColors.includes(color)}
//           onChange={() =>
//             onChange(selectedColors.includes(color) ? selectedColors.filter((c) => c !== color) : [...selectedColors, color])
//           }
//           label={color}
//         />
//       ))}
//     </div>
//   );
// };

// export default ColorFilter;

import React, { useState, useEffect } from 'react';
import { Text, Checkbox, Badge, Grid } from '@mantine/core';

interface ColorFilterProps {
  products: Product[];
  colors: string[];
  selectedColors: string[];
  onChange: (selectedColors: string[]) => void;
}

const ColorFilter: React.FC<ColorFilterProps> = ({ products, colors, selectedColors, onChange }) => {
  const calculateItemCount = (items: string[]) => {
    const itemCounts: { [color: string]: number } = {};

    items.forEach((item) => {
      products.forEach((product) => {
        const trimmedColor = product.color.trim().toLowerCase();
        const trimmedItem = item.trim().toLowerCase();

        if (trimmedColor === trimmedItem) {
          itemCounts[item] = (itemCounts[item] || 0) + 1;
        }
      });
    });

    return itemCounts;
  };

  const colorCounts = calculateItemCount(colors);

  return (
    <div>
      <Text size="lg" weight={500} style={{ marginBottom: '10px' }}>
        Color
      </Text>
      {colors.map((color) => (
        <div key={color}>
          <Checkbox
            label={
              <div>
                <Grid>
                  <Grid.Col xs={12}>{color}
                  <Badge color="teal" style={{ marginLeft: '5px' }}>
                      {`(${colorCounts[color] || 0})`}
                  </Badge>
                  </Grid.Col>
                </Grid>
              </div>
            }
            checked={selectedColors.includes(color)}
            onChange={(event) => {
              if (event.currentTarget.checked) {
                onChange([...selectedColors, color]);
              } else {
                onChange(selectedColors.filter((selectedColor) => selectedColor !== color));
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorFilter;

