import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import "./css/Products.css";
import MenShoes from "./categories/MenShoes";
import WomenDress from "./categories/WomenDress";
import Mendress from "./categories/Mendress";
import Menwatch from "./categories/Menwatch";
import Grocercies from "./categories/Grocercies";
import Laptops from "./categories/Laptops";
import SmartPhones from "./categories/SmartPhones";
import SunGlasses from "./categories/SunGlasses";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function Products(props) {
  const navigate = useNavigate();
  const { addToCart } = props;
  const [value, setValue] = React.useState("1");
  console.log(props);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "20px 10px",
            width: "100%",

            backgroundColor: "rgb(88,61,125)",
          }}
        >
          <button>
            {" "}
            <ArrowBackIcon style={{ hover: "cursor" }} onClick={handleBack} />
          </button>
          <span>
            <b>
              {props.name === "Nothing" ? "Hey,Please Sign In" : props.name}
            </b>
          </span>
          <button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <ShoppingCartIcon
                onClick={() => {
                  navigate("/shopping");
                }}
              />
              <span>{props.cart.length}</span>
            </div>
          </button>
        </div>
        <div className="tabs">
          <center>
            <TabContext className="tabsContent" value={value}>
              <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Womens-Dressess" value="1" />
                  <Tab label="Men-Dressers" value="2" />
                  <Tab label="Men-Shoes" value="3" />
                  <Tab label="Men-Watches" value="4" />
                  <Tab label="Smartphones" value="5" />
                  <Tab label="Laptops" value="6" />
                  <Tab label="Groceries" value="7" />
                  <Tab label="Sunglasses" value="8" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <WomenDress addToCart={addToCart} />
              </TabPanel>
              <TabPanel value="2">
                <Mendress addToCart={addToCart} />
              </TabPanel>
              <TabPanel value="3">
                <MenShoes addToCart={addToCart} />
              </TabPanel>
              <TabPanel value="4">
                <Menwatch addToCart={addToCart} />
              </TabPanel>
              <TabPanel value="5">
                <SmartPhones addToCart={addToCart} />
              </TabPanel>
              <TabPanel value="6">
                <Laptops addToCart={addToCart} />
              </TabPanel>
              <TabPanel value="7">
                <Grocercies addToCart={addToCart} />
              </TabPanel>
              <TabPanel value="8">
                <SunGlasses addToCart={addToCart} />
              </TabPanel>
            </TabContext>
          </center>
        </div>
      </>
    </div>
  );
}

export default Products;
