import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Avatar, Button, Container, Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ResetLogin } from "../../redux/actions/LoginAction";

export default function Navbar() {
  const { data } = useSelector((state) => state?.LoginReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const pages = ["Home", "About Us"];
  const settings = !!data ? ["Profile", "Logout"] : ["Login"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSetting = (action) => {
    console.log(action);
    switch (action) {
      case "Login": {
        navigate("/login");
        break;
      }

      case "Profile": {
        break;
      }

      case "Logout": {
        localStorage.removeItem("token");
        dispatch(ResetLogin());
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop View */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          {/* <svg width="24" height="24" viewBox="-8 4 85 85" class="css-1j8o68f">
            <g
              id="SvgjsG1672"
              featurekey="HKaMnE-0"
              transform="matrix(22.70284014632492,0,0,22.70284014632492,-22.705511055777183,-9.056164404170456)"
              fill="white"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M3.814,2.209c-0.077,0.05-0.167,0.096-0.266,0.136C3.45,2.384,3.341,2.417,3.228,2.444S2.994,2.489,2.872,2.5   C2.811,2.506,2.749,2.51,2.687,2.512C2.655,2.513,2.625,2.513,2.594,2.514l-0.096,0C2.376,2.509,2.25,2.499,2.13,2.481   C2.01,2.464,1.892,2.44,1.782,2.408c-0.111-0.032-0.215-0.07-0.309-0.113S1.294,2.204,1.224,2.153   c-0.07-0.052-0.126-0.105-0.167-0.156C1.017,1.946,0.993,1.898,0.979,1.859c-0.003-0.01-0.006-0.02-0.009-0.028   C0.968,1.823,0.967,1.815,0.965,1.809c0.057-0.131,0.132-0.256,0.224-0.371c0,0,0,0,0,0C1.203,1.497,1.236,1.58,1.302,1.655   C1.366,1.73,1.457,1.798,1.566,1.853c0.108,0.056,0.235,0.098,0.375,0.125c0.07,0.015,0.143,0.025,0.218,0.032   c0.076,0.006,0.154,0.009,0.233,0.008c0.04,0,0.08-0.002,0.122-0.004c0.02-0.001,0.039-0.002,0.06-0.004s0.042-0.004,0.063-0.006   C2.72,1.994,2.804,1.979,2.889,1.961C2.973,1.943,3.058,1.92,3.142,1.89C3.183,1.875,3.225,1.858,3.266,1.84   c0.041-0.019,0.082-0.039,0.122-0.062c0.079-0.045,0.156-0.099,0.219-0.17c0.031-0.036,0.059-0.075,0.08-0.12   s0.032-0.094,0.032-0.144c0-0.005,0-0.01,0-0.014C3.887,1.51,4.009,1.717,4.085,1.937c-0.02,0.036-0.046,0.075-0.081,0.113   C3.956,2.104,3.892,2.159,3.814,2.209z"></path>
                <path d="M3.937,2.97C3.85,3.019,3.75,3.064,3.641,3.102C3.531,3.14,3.413,3.171,3.289,3.196S3.035,3.239,2.903,3.25   C2.836,3.255,2.77,3.259,2.702,3.261c-0.034,0.001-0.066,0.001-0.1,0.001L2.499,3.261C2.366,3.258,2.23,3.248,2.099,3.231   C1.968,3.214,1.84,3.19,1.719,3.16c-0.122-0.03-0.236-0.066-0.341-0.109c-0.104-0.042-0.199-0.09-0.279-0.14   c-0.041-0.025-0.077-0.052-0.11-0.078C0.957,2.806,0.928,2.78,0.904,2.753c-0.03-0.032-0.053-0.063-0.07-0.092   C0.815,2.492,0.823,2.319,0.857,2.15c0.002,0.003,0.005,0.006,0.008,0.009C0.925,2.228,1,2.292,1.088,2.35s0.188,0.108,0.296,0.152   C1.492,2.545,1.608,2.581,1.73,2.609c0.122,0.028,0.249,0.048,0.378,0.06s0.26,0.017,0.393,0.014L2.597,2.68   C2.63,2.677,2.664,2.676,2.696,2.673C2.761,2.667,2.826,2.661,2.89,2.651C3.018,2.632,3.142,2.607,3.26,2.574   C3.379,2.54,3.491,2.5,3.594,2.453c0.103-0.048,0.197-0.101,0.278-0.159c0.081-0.059,0.148-0.123,0.2-0.187   c0.017-0.021,0.032-0.042,0.045-0.062c0.069,0.255,0.077,0.522,0.023,0.78C4.116,2.848,4.087,2.871,4.057,2.894   C4.02,2.919,3.98,2.946,3.937,2.97z"></path>
                <path d="M3.652,1.345c0,0.08-0.04,0.157-0.098,0.217c-0.028,0.03-0.061,0.057-0.095,0.082C3.424,1.667,3.387,1.688,3.35,1.708   c-0.153,0.075-0.32,0.112-0.481,0.13c-0.081,0.01-0.161,0.013-0.24,0.012c-0.019,0-0.038,0-0.057-0.001   c-0.019,0-0.04-0.001-0.059-0.002C2.476,1.845,2.437,1.842,2.4,1.838C2.327,1.831,2.256,1.819,2.188,1.806   C2.121,1.792,2.056,1.776,1.996,1.758C1.875,1.721,1.77,1.676,1.687,1.628C1.604,1.58,1.542,1.528,1.507,1.483   C1.471,1.438,1.458,1.403,1.454,1.38c-0.001-0.005,0-0.007-0.001-0.01L1.451,1.369c0,0,0-0.003,0-0.005c0-0.003,0-0.006,0-0.009   c0-0.004,0-0.008,0-0.011c0-0.001,0-0.003,0-0.008c0-0.006,0.001-0.014,0.003-0.025c0.005-0.023,0.017-0.058,0.053-0.103   c0.036-0.045,0.097-0.097,0.18-0.145c0.044-0.026,0.096-0.051,0.152-0.074C1.835,1.001,1.833,1.013,1.831,1.023   C1.827,1.057,1.827,1.076,1.827,1.076l0,0.011c0,0,0.001,0.011,0.002,0.031c0.002,0.015,0.008,0.044,0.017,0.069   c0.009,0.021,0.02,0.047,0.036,0.07c0.031,0.048,0.078,0.094,0.134,0.13S2.14,1.45,2.213,1.466s0.151,0.022,0.233,0.018   c0.01,0,0.021-0.001,0.03-0.002L2.491,1.48l0.008,0c-0.002,0,0.004,0,0.003,0h0.001l0.002-0.001h0.003   c0.02-0.003,0.037-0.005,0.058-0.009c0.044-0.008,0.085-0.019,0.126-0.032c0.083-0.026,0.166-0.063,0.239-0.12   c0.01-0.006,0.018-0.015,0.026-0.022l0.013-0.012l0.012-0.013c0.017-0.016,0.032-0.036,0.045-0.056   c0.026-0.041,0.044-0.09,0.044-0.141L3.07,1.041c-0.002-0.013-0.006-0.026-0.009-0.04C3.057,0.989,3.052,0.978,3.047,0.966   C3.042,0.956,3.035,0.945,3.029,0.935c-0.014-0.02-0.028-0.04-0.045-0.056L2.982,0.877c0.235,0.071,0.458,0.194,0.65,0.37   C3.645,1.279,3.652,1.312,3.652,1.345z"></path>
                <path d="M2.141,3.976c0.119,0.008,0.238,0.011,0.36,0.008L2.589,3.98c0.03-0.002,0.061-0.003,0.09-0.006   c0.06-0.004,0.119-0.01,0.177-0.018c0.117-0.015,0.232-0.035,0.341-0.061C3.307,3.872,3.412,3.84,3.509,3.804   C3.524,3.798,3.54,3.792,3.555,3.786C2.987,4.247,2.188,4.281,1.586,3.888c0.067,0.018,0.137,0.033,0.208,0.046   C1.907,3.954,2.023,3.968,2.141,3.976z"></path>
                <path d="M2.1,1.096C2.1,1.096,2.1,1.097,2.1,1.096l0-0.001c0-0.009-0.001-0.016-0.001-0.021c0-0.001,0-0.003,0-0.008   C2.099,1.063,2.1,1.06,2.101,1.055c0.003-0.005,0.003-0.011,0.008-0.02C2.118,1.02,2.135,0.998,2.164,0.974   c0.028-0.023,0.069-0.049,0.118-0.071c0.013-0.005,0.026-0.01,0.039-0.016c0.013-0.005,0.027-0.01,0.042-0.015   c0.014-0.004,0.03-0.009,0.045-0.013c0.015-0.003,0.028-0.007,0.045-0.011c0.004,0,0.009-0.001,0.013-0.002   c0.075-0.005,0.152-0.008,0.231-0.006c0.027,0.004,0.053,0.01,0.08,0.017c0.01,0.003,0.018,0.006,0.027,0.009   c0.009,0.003,0.018,0.006,0.027,0.01l0.026,0.012l0.025,0.014c0.065,0.038,0.12,0.101,0.119,0.172c0,0.035-0.013,0.069-0.035,0.098   c-0.022,0.03-0.052,0.054-0.084,0.074L2.858,1.262L2.832,1.273c-0.009,0.004-0.018,0.007-0.027,0.01S2.788,1.291,2.778,1.292   c-0.037,0.01-0.074,0.018-0.111,0.02C2.63,1.317,2.593,1.316,2.56,1.314C2.543,1.313,2.522,1.311,2.504,1.31   C2.488,1.307,2.472,1.304,2.456,1.302C2.39,1.29,2.331,1.27,2.282,1.248s-0.09-0.047-0.118-0.071   C2.135,1.153,2.118,1.131,2.109,1.115C2.104,1.108,2.104,1.102,2.1,1.096L2.1,1.096L2.1,1.096C2.102,1.096,2.101,1.095,2.1,1.096   L2.1,1.096L2.1,1.096z"></path>
                <path d="M3.473,3.698C3.379,3.727,3.278,3.751,3.172,3.77s-0.217,0.032-0.33,0.04c-0.056,0.004-0.113,0.006-0.17,0.007   c-0.029,0.001-0.057,0-0.085,0.001L2.499,3.816c-0.113-0.003-0.229-0.012-0.34-0.026c-0.111-0.014-0.22-0.034-0.324-0.058   c-0.103-0.024-0.201-0.054-0.29-0.087c-0.09-0.034-0.171-0.071-0.24-0.112C1.236,3.494,1.178,3.451,1.136,3.41   C1.094,3.368,1.067,3.329,1.053,3.298c-0.015-0.03-0.019-0.058-0.02-0.064c0,0,0-0.01-0.001-0.014c0-0.005,0-0.009,0-0.013   c0-0.007-0.001-0.01-0.001-0.01c0-0.021-0.006-0.041-0.015-0.059C1.103,3.184,1.198,3.226,1.299,3.26   c0.117,0.041,0.243,0.075,0.374,0.102S1.94,3.407,2.08,3.418C2.218,3.43,2.358,3.434,2.501,3.431l0.104-0.004   C2.64,3.425,2.676,3.423,2.71,3.42C2.78,3.416,2.85,3.409,2.918,3.399c0.137-0.018,0.271-0.042,0.4-0.074   c0.128-0.032,0.25-0.071,0.363-0.116c0.113-0.044,0.216-0.097,0.307-0.154c0.041-0.025,0.079-0.052,0.114-0.079   c-0.066,0.214-0.176,0.417-0.33,0.596C3.759,3.581,3.744,3.589,3.729,3.597C3.653,3.635,3.566,3.669,3.473,3.698z"></path>
              </g>
            </g>
          </svg> */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={"/"}
            sx={{
              ml: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Globifier
          </Typography>

          {/* Mobile View */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    to={"/"}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to={"/"}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Globifier
          </Typography>

          {/* Desktop View */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={"/"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Desktop and Mobile View */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={data?.name} src="/" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => handleSetting(setting)}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
