import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


function David() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    console.log(name, 'name')

    function handleClickOpen() {
        setOpen(true);  
        setName('David')
    }

    useEffect(() => {
        if(name) localStorage.setItem('name', name)
    }, [name])

    useEffect(() => {
        const savedName = localStorage.getItem('name')
        if(savedName) setName(savedName)
    },[])

    return (
        <>
                <div>
                    <button onClick={handleClickOpen}>Dave
                    </button>
                </div>
                <Dialog
                open={open}
                // onClose={}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Hello"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    My name is David
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                {/* <Button onClick={()=>setOpen(true)}>Disagree</Button> */}
                <Button onClick={()=>setOpen(false)} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default David;