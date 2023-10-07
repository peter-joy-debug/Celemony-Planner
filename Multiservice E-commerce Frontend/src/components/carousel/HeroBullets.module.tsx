import { createStyles,rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.sm} * 3)`,
    paddingBottom: `calc(${theme.spacing.sm} * 4)`,
  },

  content: {
    maxWidth: rem(480), // Equivalent to rem(480px)
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.breakpoints.xl]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[8],
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: `calc(${theme.spacing.sm} * 2)`, // Equivalent to rem(44px)
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.breakpoints.xs]: {
      fontSize: `calc(${theme.spacing.xl} * 1)`, // Equivalent to rem(28px)
    },
  },

  control: {
    [theme.breakpoints.xs]: {
      flex: 1,
    },
  },

  image: {
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.colors.blue[6],
    borderRadius: theme.radius.sm,
    color:'white',
    padding: '35px 4px', // Equivalent to rem(4px) rem(12px),

  },
}));

export default useStyles;
