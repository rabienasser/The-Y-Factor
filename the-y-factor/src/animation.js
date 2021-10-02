export const homePageAnim = {
   initial: {
      opacity: 1,
   },
   animate: {
      opacity: 0,
      y: "-200%",
      transition: {
         ease: "easeOut",
         delay: 3.3,
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
         delay: 3.4,
      },
   },
};

export const fade = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 1.5,
         delay: 3.8,
      },
   },
};

export const photoAnim = {
   hidden: {
      scale: 1.1,
      opacity: 0,
   },
   show: {
      scale: 1,
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 1,
         delay: 4.2,
      },
   },
};

export const scrollReveal = {
   hidden: { opacity: 0, scale: 1.13, transition: { duration: 0.5 } },
   show: {
      opacity: 1,
      scale: 1,
      transition: {
         duration: 0.5,
      },
   },
};

export const missionPhoto = {
   hidden: {
      scale: 1.05,
      opacity: 0,
   },
   show: {
      scale: 1,
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 1,
      },
   },
};

export const missionFade = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 1.5,
         delay: 0.3,
      },
   },
};

export const testAnim = {
   hidden: {
      opacity: 0,
      duration: 0.3,
      y: 100,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         staggerChildren: 0.4,
         duration: 0.5,
      },
   },
};

export const testBox = {
   hidden: { opacity: 0, y: 100 },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.5,
      },
   },
};

export const socialAnim = {
   hidden: { opacity: 0, y: 30 },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.2,
      },
   },
};
