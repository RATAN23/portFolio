import React from "react";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import XIcon from "@mui/icons-material/X";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MessageIcon from "@mui/icons-material/Message";
import { motion, AnimatePresence } from "framer-motion";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#eeeee",
      dark: "#002884",
      contrastText: "#000",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const Navbar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" color="primary">
          <AnimatePresence>
            <motion.div
              layout
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ ease: "linear", duration: 0.5 }}
              exit={{ x: 300 }}
            >
              <Box
                width="100vw"
                height={70}
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-around",
                }}
              >
                <Box
                  height={70}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <a href="/">
                    <HomeIcon />
                  </a>
                  <a href="https://x.com/ratan_23">
                    <XIcon fontSize="medium" />
                  </a>
                  <a href="https://github.com/RATAN23">
                    <GitHubIcon fontSize="medium" />
                  </a>
                  <a href="https://linkedin.com/in/ratan-ghasti">
                    <LinkedInIcon fontSize="medium" />
                  </a>
                  <a href="https://leetcode.com/u/rnghasti42/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="1.3em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="m21.469 23.907l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485c0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052c.708-.713.735-1.848.047-2.536l-3.473-3.511a6.793 6.793 0 0 0-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052L4.553 13.968c-1.307 1.312-1.989 3.113-1.989 5.113c0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937c1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558H14.218c-.932 0-1.692.801-1.692 1.791c0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797c0-.989-.76-1.791-1.693-1.791z"
                      ></path>
                    </svg>
                  </a>
                </Box>

                <div className="flex justify-center items-center gap-3  ">
                  <a href="/">
                    <MessageIcon fontSize="medium" />
                  </a>
                  <p className="hidden lg:block text-nowrap">Get in touch</p>
                </div>
              </Box>
            </motion.div>
          </AnimatePresence>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
