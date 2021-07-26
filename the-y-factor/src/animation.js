export const pageAnimation = {
   hidden: {
      opacity: 0,
      y: 500,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.75,
         when: "beforeChildren",
         staggerChildren: 0.25,
      },
   },
   exit: {
      opacity: 0,
      y: 500,
      transition: {
         duration: 0.8,
      },
   },
};

export const homePageAnim = {
   initial: {
      opacity: 1,
   },
   animate: {
      opacity: 0,
      y: "-200%",
      transition: {
         ease: "easeOut",
         delay: 5,
         duration: 1.5,
      },
   },
};

export const titleAnim = {
   hidden: {
      x: -200,
   },
   show: {
      x: 0,
      transition: {
         duration: 1,
         ease: "easeOut",
         delay: 4.5,
      },
   },
};

export const fade = {
   hidden: {
      opacity: 0,
      //   scale: 1.2,
   },
   show: {
      //   scale: 1,
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 1.5,
         delay: 4.5,
      },
   },
};

export const photoAnim = {
   hidden: {
      scale: 1.25,
      opacity: 0,
   },
   show: {
      scale: 1,
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 1,
         delay: 4.5,
      },
   },
};
