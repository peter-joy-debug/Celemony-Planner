
import React, { useState,useEffect } from 'react';
import { Text, Checkbox,Badge, Grid } from '@mantine/core';

interface SizeFilterProps {
  products: Product[];
  sizes: string[];
  selectedSizes: string[];
  onChange: (selectedSizes: string[]) => void;
}

const SizeFilter: React.FC<SizeFilterProps> = ({ products, sizes, selectedSizes, onChange }) => {
  const calculateItemCount = (items: string[]) => {
    const itemCounts: { [size: string]: number } = {};
  
    items.forEach((item) => {
      products.forEach((product) => {
        const trimmedSize = product.size.trim().toLowerCase();
        const trimmedItem = item.trim().toLowerCase();
  
        if (trimmedSize === trimmedItem) {
          itemCounts[item] = (itemCounts[item] || 0) + 1;
        }
      });
    });
  
    return itemCounts;
  };

  const sizeCounts = calculateItemCount(sizes);

  return (
    <div>
      {sizes.map((size) => (
        <div key={size}>
          <Checkbox
            label={
              <div>
                <Grid>
                <Grid.Col xs={12}>{size}
                <Badge color="teal" style={{ marginLeft: '5px' }}>
                  {`(${sizeCounts[size] || 0})`}
                </Badge>
                </Grid.Col>
                </Grid>
              </div>
            }
            checked={selectedSizes.includes(size)}
            onChange={(event) => {
              if (event.currentTarget.checked) {
                onChange([...selectedSizes, size]);
              } else {
                onChange(selectedSizes.filter((selectedSize) => selectedSize !== size));
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SizeFilter;