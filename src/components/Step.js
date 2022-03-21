
const Step = ({percent, name, description}) => {
  return (
    <Grid item xs={3}>
    <Typography
      component="div"
      className="welcome"
      fontSize={56}
      color={'#00A6F1'}
    >
      {percent}%
    </Typography>
    <Box display={'flex'} alignItems={'center'} marginBottom={3}>
        <img src={complete} alt="Status of work" />
        <hr className="horizontal-line dotted"/>
    </Box>
    <Typography
      component="div"
      fontSize={18}
      fontWeight={'700'}
      lineHeight={'24px'}
      marginBottom={1}
    >
      {name}
    </Typography>
    <Typography
      component="div"
      fontSize={16}
      lineHeight={'24px'}
    >
      {description}
    </Typography>
  </Grid>
  )
}
export default Step