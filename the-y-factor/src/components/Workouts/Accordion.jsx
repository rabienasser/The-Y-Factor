import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExerciseAccordion = () => {
   return (
      <Box sx={{ my: "4rem" }}>
         <Typography
            variant="h2"
            component="h1"
            sx={{ textAlign: "center", mb: "1rem" }}
         >
            Sample Workouts
         </Typography>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography>Strength Workout #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Box sx={{ mb: "2rem" }}>
                  <Typography
                     variant="h6"
                     component="h6"
                     sx={{
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "thirdColor.main",
                     }}
                  >
                     Circuit #1
                  </Typography>
                  <Typography>
                     Dumbbell Bench Chest Press 10lb 15 reps
                  </Typography>
                  <Typography>Dumbbell Squats 15lb 15 reps</Typography>
                  <Typography>Bicycles Single Side 12 reps each</Typography>
               </Box>

               <Box sx={{ mb: "2rem" }}>
                  <Typography
                     variant="h6"
                     component="h6"
                     sx={{
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "thirdColor.main",
                     }}
                  >
                     Circuit #2
                  </Typography>
                  <Typography>
                     Dumbbell Bench Bent Over Single Arm Row 10lb 12 reps each
                  </Typography>
                  <Typography>
                     Dumbbell Single Side Reverse Lunge 10lb 12 reps each
                  </Typography>
                  <Typography>
                     Single Leg Vertical Crunch 15 reps each
                  </Typography>
               </Box>

               <Box sx={{ mb: "2rem" }}>
                  <Typography
                     variant="h6"
                     component="h6"
                     sx={{
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "thirdColor.main",
                     }}
                  >
                     Circuit #3
                  </Typography>
                  <Typography>Dumbbell Split Curls 8lb 12 reps</Typography>
                  <Typography>
                     Dumbbell Standing Overhead Press 8lb 10 reps (on floor)
                  </Typography>
                  <Typography>On Side Single Leg Lifts 15 reps each</Typography>
                  <Typography>Modified Leg Lifts 10 reps</Typography>
               </Box>
               <Typography>2-3 Sets</Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography>Strength Workout #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Box sx={{ mb: "2rem" }}>
                  <Typography
                     variant="h6"
                     component="h6"
                     sx={{
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "thirdColor.main",
                     }}
                  >
                     Circuit #1
                  </Typography>
                  <Typography>
                     Dumbbell Standing Upright Row 15lb 15 reps
                  </Typography>
                  <Typography>Alternating Curtsy Lunge 10 reps each</Typography>
                  <Typography>Bounds Single Side 10 reps each</Typography>
                  <Typography>Inch Worm 1 rep</Typography>
                  <Typography>
                     Plank Straight Arm + Elbow 30 seconds each
                  </Typography>
               </Box>

               <Box sx={{ mb: "2rem" }}>
                  <Typography
                     variant="h6"
                     component="h6"
                     sx={{
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "thirdColor.main",
                     }}
                  >
                     Circuit #2
                  </Typography>
                  <Typography>Dumbbell Pullovers 15lb 12 reps</Typography>
                  <Typography>Side Lunges 10 reps each</Typography>
                  <Typography>Jump Squats 10 reps</Typography>
                  <Typography>V Ups 15 reps each side</Typography>
               </Box>

               <Box sx={{ mb: "2rem" }}>
                  <Typography
                     variant="h6"
                     component="h6"
                     sx={{
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "thirdColor.main",
                     }}
                  >
                     Circuit #3
                  </Typography>
                  <Typography>
                     Dumbbell Standing Halos 10lb 10 reps each direction
                  </Typography>
                  <Typography>
                     Dumbbell Tricep Kickbacks 8lb 12 reps each
                  </Typography>
                  <Typography>Bird Dogs Single Side 10 reps each</Typography>
               </Box>
               <Typography>2-3 Sets</Typography>
            </AccordionDetails>
         </Accordion>
      </Box>
   );
};

export default ExerciseAccordion;
