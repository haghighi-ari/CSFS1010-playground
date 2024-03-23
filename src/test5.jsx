import Alert from '@mui/material/Alert';

function test5() {
    return (<>
        <Alert severity="success">This is a success Alert.</Alert>
        <Alert severity="info">This is an info Alert.</Alert>
        <Alert severity="warning">This is a warning Alert.</Alert>
        <Alert severity="error">This is an error Alert.</Alert>
</>)
}

export default test5

/*Try {
    alert('Start of try runs');  
    alert('End of try runs'); 
  } catch (err) {
    alert('Catch is ignored, because there are no errors');
  })}*/