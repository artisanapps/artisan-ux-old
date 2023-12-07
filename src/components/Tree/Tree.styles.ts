import {createStyles, makeStyles, Theme} from '@mui/material';

const useTreeStyles = makeStyles((theme: Theme) =>
  createStyles({
    treeItem: {
      padding: theme.spacing(1),
      display: "flex",
      alignItems: "center"
    },
    itemGroup: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px solid #CCC`,
    },
    clickable: {
      color: theme.palette.primary.main,
      "&:hover": {
        textDecoration: "underline"
      }
    },
    secondaryText: {
      color: "rgba(0, 0, 0, 0.54)"
    }
  })
)

export { useTreeStyles };
