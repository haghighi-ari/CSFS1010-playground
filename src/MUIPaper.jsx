import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 400,
  padding: theme.spacing(10),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Variants() {
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper variant="elevation">slip of paper</DemoPaper>
      <DemoPaper variant="outlined">other paper</DemoPaper>
      <DemoPaper variant="elevation">paper</DemoPaper>
      <DemoPaper variant="outlined">other paper</DemoPaper>
      <DemoPaper variant="elevation">paper</DemoPaper>
      <DemoPaper variant="outlined">other paper</DemoPaper>
    </Stack>
  );
}