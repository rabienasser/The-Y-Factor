import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";
import ExerciseTable from "../../components/Workouts/ExerciseTable";
import ExerciseAccordion from "../../components/Workouts/Accordion";

const SampleWorkouts = () => {
   return (
      <div>
         <Navbar />
         <Box
            sx={{
               px: {
                  xs: "0",
                  sm: "2rem",
                  md: "5rem",
                  lg: "10rem",
               },
            }}
         >
            <ExerciseTable />
            <ExerciseAccordion />
         </Box>
         <Footer />
      </div>
   );
};

export default SampleWorkouts;
