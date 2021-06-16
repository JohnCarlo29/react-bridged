import { Grid, Paper } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    height: 250,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const LoanType = () => {
  const classes = useStyles();

  return ( 
    <Grid container spacing={3}>
      <Grid item md={4}>
        <Paper className={classes.paper} />
      </Grid>

      <Grid item md={8}>
        <Paper className={classes.paper} />
      </Grid>
    </Grid>
  )
}
   
export default LoanType
  