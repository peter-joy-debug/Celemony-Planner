import React, { useState,useEffect } from 'react';
import { Card, Container, Grid, Paper, RangeSlider, Text, Button, Select } from '@mantine/core';
import ColorFilter from './filters/color.filter';
import BrandFilter from './filters/brand.filter';
import SizeFilter from './filters/size.filter';
import CategoryFilter from './filters/category.filter';
import {TopFilter} from './filters/top.filter';
import { Group, Pagination,Input,TextInput,Accordion,createStyles,rem,Badge,Skeleton,UnstyledButton,Slider,Checkbox} from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import dayjs from 'dayjs';



// Sample data for products and filter categories

const brands = ['Apple', 'Samsung', 'LG', 'Nike', 'Louis Vuitton', 'Gucci', 'Chanel', 'Adidas', 'Hermès','Google','Dell','HP','Sony','Microsoft','Bose','Nitendo','Fitbit','Canon','Nikon','Bluetooth Speaker','Camera','Gaming Console','Smartwatch'];

const colors = ['Black', 'White', 'Silver', 'Gold', 'Red', 'Blue', 'Green', 'Yellow',];

const categories = ['Phone', 'Laptop', 'TV', 'Men Clothing', 'Women Clothing','Nitendo','Fitbit','Canon','Nikon','Bluetooth Speaker','Camera','Gaming Console','Smartwatch'];

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  color: string;
  size: string;
  price: number;
}

interface ProductFilterProps {
  products: Product[];
}


const useStyles = createStyles((theme) => ({
    root: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      borderRadius: theme.radius.sm,
    },
  
    item: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      border: `${rem(1)} solid transparent`,
      position: 'relative',
      zIndex: 0,
      transition: 'transform 150ms ease',
  
      '&[data-active]': {
        transform: 'scale(1.03)',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        boxShadow: theme.shadows.md,
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        borderRadius: theme.radius.md,
        zIndex: 1,
      },
    },
  
    chevron: {
      '&[data-rotate]': {
        transform: 'rotate(-90deg)',
      },
    },
  }));

  

const BookingFilter: React.FC<ProductFilterProps> = ({ products }) => {
const { classes } = useStyles();
const [priceRange, setPriceRange] = useState([0, 2000]);
const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
const [selectedColors, setSelectedColors] = useState<string[]>([]);
const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
const [currentPage, setCurrentPage] = useState<number>(1);
const [itemsPerPage, setItemsPerPage] = useState<number>(6); // Number of items to show per page
const itemsPerPageOptions = [6, 12, 18, 24]; // Options for items per page select
const [searchQuery, setSearchQuery] = useState<string>('');


const filteredProducts = (products: Product[]) => {
    return products.filter((product) => {
      const isPriceInRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      const isSizeMatch = selectedSizes.length === 0 || selectedSizes.includes(product.size);
      const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
      const isBrandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const isSearchMatch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()); // Check if product name, brand, or category includes the search query

    return isPriceInRange && isSizeMatch && isColorMatch && isBrandMatch && isCategoryMatch && isSearchMatch;

    });
  };
  
  const filteredProductsa = filteredProducts(products);
  const filteredProductsArray = filteredProducts(products);
  
  //NEW CODES

  const totalPages = Math.ceil(filteredProductsArray.length / itemsPerPage);

  // Get the products to show on the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredProductsa.slice(indexOfFirstItem, indexOfLastItem);


const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  const handleItemsPerPageChange = (value: number) => {
    setCurrentPage(1); // Reset to the first page when changing items per page
    setItemsPerPage(value);
  };

  const [columns, setColumns] = useState<number>(3); // Number of columns to display
  const [sortOption, setSortOption] = useState<string>('price'); // Sort option: 'price' or 'name'
  const [sortOrder, setSortOrder] = useState<string>('asc'); // Sort order: 'asc' or 'desc'
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const sortProducts = () => {
      const sorted = filteredProductsa.slice().sort((a, b) => {
        if (sortOption === 'price') {
          const priceA = a.price;
          const priceB = b.price;
          return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
        }

        if (sortOption === 'name') {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        }

        return 0;
      });

      setSortedProducts(sorted);
    };

    sortProducts();
  }, [sortOption, sortOrder, filteredProductsa]);

  // Get the products to show on the current page from the sorted list
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const child = <Skeleton height={140} radius="md" animate={false} />;
  const child2 = <Skeleton height={250} radius="md" animate={false} />;
  return (

    <Container size="xl" style={{maxWidth:'85%'}} >
        <br></br>
     <Grid gutter="sm" style={{backgroundColor: '#2a2a72',backgroundImage:'linear-gradient(315deg, #ffffff 0%, #ffffff 3%)',borderRadius:'12px'}}>
          <Grid.Col xs={12} sm={6} lg={12}>
          <Text size="lg" weight={100} style={{ marginBottom: '5px',color:'black' }}>
                All Booking
           </Text>
           {/* <hr style={{width:'80%',color:'white'}}></hr> */}
          </Grid.Col>

      </Grid>
      <br></br>
      <Grid gutter="lg">

        <Grid.Col xs={12} sm={6} lg={3}>
          <Paper padding="sm">

            <TextInput
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
            radius="xl"
            size="md"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
            placeholder="Search Bookings"
            rightSectionWidth={42}
            />
          <Grid gutter="sm" style={{backgroundColor: '#2a2a72',backgroundImage:'linear-gradient(315deg, #2a2a72 0%, #009ffd 2%)',borderRadius:'30px',padding:'2px 0px',width:'50%'}}>
          <Grid.Col xs={12} sm={6} lg={12}>
          {/* <Text size="lg" weight={100} style={{ marginBottom: '5px',color:'white' }}>
                All Booking
           </Text> */}
           {/* <TopFilter/> */}
          </Grid.Col>

          </Grid>
            <br></br>
            <Text size="lg" weight={500} style={{ marginBottom: '10px' }}>
                Filters
            </Text>

            <Accordion
            maw={420}
            mx="auto"
            variant="filled"
            defaultValue="customization"
            classNames={classes}
            className={classes.root}
            >
             <Accordion.Item value="price">
                <Accordion.Control>
                    All Filters
                </Accordion.Control>
                <Accordion.Panel>
                <Accordion
                maw={420}
                mx="auto"
                variant="filled"
                defaultValue="customization"
                classNames={classes}
                className={classes.root}
                >
             <Accordion.Item value="price">
                <Accordion.Control>
                    Page Filters
                </Accordion.Control>
                <Accordion.Panel>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Select
                        label="Items per page"
                        value={itemsPerPage}
                        onChange={(value) => handleItemsPerPageChange(value)}
                        data={itemsPerPageOptions.map((option) => ({ label: String(option), value: option }))}
                    />
                    </div>

                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Select
                    label="Number of Columns"
                    value={columns}
                    onChange={setColumns}
                    data={[
                        { label: '2', value: 2 },
                        { label: '3', value: 3 },
                        { label: '4', value: 4 },
                        { label: '5', value: 5 },
                    ]}
                    />
                </div>
                </Accordion.Panel>
            </Accordion.Item>
            </Accordion>

            <Accordion
            maw={420}
            mx="auto"
            variant="filled"
            defaultValue="customization"
            classNames={classes}
            className={classes.root}
            >
             <Accordion.Item value="Sorting Filter">
                <Accordion.Control>
                    Sorting Filter
                </Accordion.Control>
                <Accordion.Panel>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Select
                label="Sort by"
                value={sortOption}
                onChange={setSortOption}
                data={[
                    { label: 'Price', value: 'price' },
                    { label: 'Name', value: 'name' },
                ]}
                />
                <Select
                label="Sort order"
                value={sortOrder}
                onChange={setSortOrder}
                data={[
                    { label: 'Ascending', value: 'asc' },
                    { label: 'Descending', value: 'desc' },
                ]}
                />
            </div>
                </Accordion.Panel>
            </Accordion.Item>
            </Accordion>
        
                </Accordion.Panel>
            </Accordion.Item>
            </Accordion>

            <br></br>
            <Text size="lg" weight={500} style={{ marginBottom: '10px' }}>
                Booking Filters
            </Text>
           





            <Accordion
            maw={420}
            mx="auto"
            variant="filled"
            defaultValue="customization"
            classNames={classes}
            className={classes.root}
            >
             <Accordion.Item value="price">
                <Accordion.Control>
                    Price
                </Accordion.Control>
                <Accordion.Panel>
                <Text size="lg" weight={500} style={{ marginBottom: '10px' }}>
                Price Range
                </Text>
                <RangeSlider
                value={priceRange}
                onChange={(value) => setPriceRange(value)}
                min={0}
                max={10000}
                step={10}
                label={(value) => `$${value}`}
                />
                </Accordion.Panel>
            </Accordion.Item>


            <Accordion.Item value="size">
            <Accordion.Control>Size</Accordion.Control>
            <Accordion.Panel>
           
             <SizeFilter
            products={products}
            sizes={['6.1 inch', '6.2 inch', '13 inch', '55 inch']}
            selectedSizes={selectedSizes}
            onChange={setSelectedSizes}
            />
            </Accordion.Panel>
            </Accordion.Item>




            <Accordion.Item value="color">
                <Accordion.Control>
                    Color
                </Accordion.Control>
              
                <Accordion.Panel>
                <ColorFilter
                  products={products}
                  colors={['Black', 'White', 'Silver', 'Gold', 'Red', 'Blue', 'Green', 'Yellow']}
                  selectedColors={selectedColors}
                  onChange={setSelectedColors}
                />
                </Accordion.Panel>

            </Accordion.Item>
            <Accordion.Item value="brand">
                <Accordion.Control>
                    Brand
                </Accordion.Control>
                <Accordion.Panel>
           
                <BrandFilter products={products} brands={brands} selectedBrands={selectedBrands} onChange={setSelectedBrands} />
                </Accordion.Panel>
            </Accordion.Item>
            
            <Accordion.Item value="category">
                <Accordion.Control>
                    Category
                </Accordion.Control>
                <Accordion.Panel>
                <CategoryFilter products={products} categories={categories} selectedCategories={selectedCategories} onChange={setSelectedCategories} />
                </Accordion.Panel>
            </Accordion.Item>

            </Accordion>
            

          </Paper>
          {/* Add more filters (Size, Color, Brand, Category) here */}
        </Grid.Col>






        <Grid.Col xs={12} sm={9} lg={9} >
          {/* <Grid gutter="sm" style={{backgroundColor: '#2a2a72',backgroundImage:'linear-gradient(315deg, #2a2a72 0%, #009ffd 3%)',borderRadius:'12px'}}>
          <Grid.Col xs={12} sm={6} lg={12}>
          {/* <Text size="lg" weight={100} style={{ marginBottom: '5px',color:'white' }}>
                All Booking
           </Text> */}
           {/* <TopFilter/> */}
          {/* </Grid.Col> */}

          {/* </Grid>  */}
    

          <Grid gutter="sm">
          <br></br>
          {currentItems.map((product) => (
              <Grid.Col key={product.id} xs={12} sm={12 / columns} lg={12 / columns}>
                <Card shadow="sm" padding="md">
                  <Text size="lg" weight={500} style={{ marginBottom: '10px' }}>
                    {product.name}
                  </Text>
                  <Text size="sm" style={{ marginBottom: '5px' }}>
                    Category: {product.category}
                  </Text>
                  <Text size="sm" style={{ marginBottom: '5px' }}>
                    Brand: {product.brand}
                  </Text>
                  <Text size="sm" style={{ marginBottom: '5px' }}>
                    Color: {product.color}
                  </Text>
                  <Text size="sm" style={{ marginBottom: '10px' }}>
                    Size: {product.size}
                  </Text>
                  <Text size="lg" weight={500}>
                    ${product.price}
                  </Text>
                </Card>
              </Grid.Col>
            ))}
          </Grid>


          {/* Pagination */}

        <br></br>
        <Group position="center">
        <Pagination.Root
            total={totalPages}
            value={currentPage}
            onChange={handlePageChange}
        >
            <Pagination.First />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last />
        </Pagination.Root>
        </Group>

        {/* Items per page Select */}
      

     

        </Grid.Col>
        {/* <Grid.Col xs={12} sm={2} lg={2}>
        <Text size="lg" weight={500} style={{ marginBottom: '10px' }}>
                Ads Section
        </Text>
        <Grid>
        <Grid.Col xs={12}>{child}</Grid.Col>
        </Grid>

        <Grid>
        <Grid.Col xs={12}>{child2}</Grid.Col>
        </Grid>

        </Grid.Col> */}
      </Grid>
    </Container>
  );
};

export default BookingFilter;
