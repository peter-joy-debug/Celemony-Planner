import { forwardRef } from 'react';
import {
  MultiSelect,
  Box,
  CloseButton,
  SelectItemProps,
  MultiSelectValueProps,
  rem,
  Flex,
} from '@mantine/core';

const countriesData = [
  { label: 'United States', value: 'US' },
  { label: 'Great Britain', value: 'GB' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'Russia', value: 'RU' },
];

const flags = { /* Record with flag icon components */ };

function Value({
  value,
  label,
  onRemove,
  classNames,
  ...others
}: MultiSelectValueProps & { value: string }) {
  const Flag = flags[value];
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
          }`,
          paddingLeft: theme.spacing.xs,
          borderRadius: theme.radius.sm,
        })}
      >
        <Box mr={10}>
          {/* <Flag /> */}
        </Box>
        <Box sx={{ lineHeight: 1, fontSize: rem(12) }}>{label}</Box>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  );
}

const Item = forwardRef<HTMLDivElement, SelectItemProps>(({ label, value, ...others }, ref) => {
  const Flag = flags[value];
  return (
    <div ref={ref} {...others}>
      <Flex align="center">
        <Box mr={10}>
          {/* <Flag /> */}
        </Box>
        <div>{label}</div>
      </Flex>
    </div>
  );
});

export const CelemonyPicker = () => {
  return (
    <MultiSelect
      data={countriesData}
      limit={20}
      valueComponent={Value}
      itemComponent={Item}
      searchable
      // defaultValue={['US', 'FI']}
      placeholder="Pick countries"
      label="Which countries did you visit last year?"
    />
  );
}
// import { createStyles, rem, Select, TextInput } from '@mantine/core';
// import { DatePickerInput } from '@mantine/dates';

// const useStyles = createStyles((theme) => ({
//   root: {
//     position: 'relative',
//   },

//   input: {
//     height: rem(54),
//     paddingTop: rem(18),
//   },

//   label: {
//     position: 'absolute',
//     pointerEvents: 'none',
//     fontSize: theme.fontSizes.xs,
//     paddingLeft: theme.spacing.sm,
//     paddingTop: `calc(${theme.spacing.sm} / 2)`,
//     zIndex: 1,
//   },
// }));

// export const CelemonyPicker = () => {
//   // You can add these classes as classNames to any Mantine input, it will work the same
//   const { classes } = useStyles();

//   return (
//     <div>
//       {/* <TextInput label="Shipping address" placeholder="15329 Huston 21st" classNames={classes} /> */}

//       <Select
//         mt="md"
//         withinPortal
//         data={['React', 'Angular', 'Svelte', 'Vue']}
//         placeholder="Pick one"
//         label="Your favorite library/framework"
//         classNames={classes}
//       />

//       <DatePickerInput
//         mt="md"
//         popoverProps={{ withinPortal: true }}
//         label="Departure date"
//         placeholder="When will you leave?"
//         classNames={classes}
//         clearable={false}
//       />
//     </div>
//   );
// }