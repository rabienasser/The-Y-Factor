import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ExerciseTable = () => {
   return (
      <Box>
         <Typography
            variant="h2"
            component="h1"
            sx={{ textAlign: "center", mb: "1rem" }}
         >
            Sample Strength Cycle
         </Typography>
         <TableContainer component={Paper}>
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell
                        sx={{ fontWeight: "bold", color: "darkGrey.main" }}
                     >
                        Week
                     </TableCell>
                     <TableCell
                        sx={{ fontWeight: "bold", color: "darkGrey.main" }}
                     >
                        Monday
                     </TableCell>
                     <TableCell
                        sx={{ fontWeight: "bold", color: "darkGrey.main" }}
                     >
                        Tuesday
                     </TableCell>
                     <TableCell
                        sx={{ fontWeight: "bold", color: "darkGrey.main" }}
                     >
                        Wednesday
                     </TableCell>
                     <TableCell
                        sx={{ fontWeight: "bold", color: "darkGrey.main" }}
                     >
                        Thursday
                     </TableCell>
                     <TableCell
                        sx={{ fontWeight: "bold", color: "darkGrey.main" }}
                     >
                        Friday
                     </TableCell>
                     <TableCell
                        sx={{ fontWeight: "bold", color: "darkGrey.main" }}
                     >
                        Saturday
                     </TableCell>
                     <TableCell
                        sx={{ fontWeight: "bold", color: "darkGrey.main" }}
                     >
                        Sunday
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  <TableRow>
                     <TableCell>1</TableCell>
                     <TableCell>Strength + Light Cardio</TableCell>
                     <TableCell>Trail 2-3 mi</TableCell>
                     <TableCell>Strength + Light Cardio</TableCell>
                     <TableCell>Treadmill Sprint 5x60</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Trail 2-3 mi</TableCell>
                     <TableCell>Trail 3-5 mi</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>2</TableCell>
                     <TableCell>Strength + Light Cardio</TableCell>
                     <TableCell>Trail 2-3 mi</TableCell>
                     <TableCell>Strength + Light Cardio</TableCell>
                     <TableCell>Treadmill Sprint 6x60</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Trail 2-3 mi</TableCell>
                     <TableCell>Trail 3-5 mi</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>3</TableCell>
                     <TableCell>Strength + Light Cardio</TableCell>
                     <TableCell>Trail 2-3 mi</TableCell>
                     <TableCell>Strength + Light Cardio</TableCell>
                     <TableCell>Treadmill Sprint 7x60</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Trail 2-3 mi</TableCell>
                     <TableCell>Trail 3-5 mi</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>4</TableCell>
                     <TableCell>Strength + Light Cardio</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Strength + Trail 2-3 mi</TableCell>
                     <TableCell>Treadmill Sprint 8x60</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Trail 3-4 mi</TableCell>
                     <TableCell>Trail 3-5 mi</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>5</TableCell>
                     <TableCell>Strength + Light Cardio</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Strength + Trail 2-3 mi</TableCell>
                     <TableCell>Treadmill Sprint 5x90</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Trail 3-4 mi</TableCell>
                     <TableCell>Trail 3-5 mi</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>6</TableCell>
                     <TableCell>Strength + Light Cardio</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Strength + Trail 2-3 mi</TableCell>
                     <TableCell>Treadmill Sprint 6x90</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Trail 3-4 mi</TableCell>
                     <TableCell>Trail 3-5 mi</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>7</TableCell>
                     <TableCell>Strength + Light Cardio</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Strength + Trail 2-3 mi</TableCell>
                     <TableCell>Treadmill Sprint 7x90</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Trail 3-4 mi</TableCell>
                     <TableCell>Trail 3-5 mi</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>8</TableCell>
                     <TableCell>Trail 2-3 mi</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Strength + Trail 2-3 mi</TableCell>
                     <TableCell>Treadmill Sprint 8x90</TableCell>
                     <TableCell>Off</TableCell>
                     <TableCell>Trail 4-5 mi</TableCell>
                     <TableCell>Trail 3-5 mi</TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </TableContainer>
      </Box>
   );
};

export default ExerciseTable;
