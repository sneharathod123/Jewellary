import React from "react";
import { Container } from "react-bootstrap";
import "../css/featureProduct.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// import Typography from '@mui/material/Typography';

function FeatureProduct() {
  const [value, setValue] = React.useState(2);
  return (
    <div className="featureProductSection">
      <Container>
        <div className="row ">
          <div className="col-12 col-lg-6">
            <div className="img-section">
              <img src={require("../assets/Featured-img.jpg")} alt="img" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="text-section">
              <h3>Featured Product</h3>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin.
              </p>
              <h5>High Designer Jewellery</h5>
              <p>Availability: In stock</p>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                {/* <Typography component="legend">Controlled</Typography> */}
                <Rating
                  style={{ color: "#b3873d" }}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                {/* <Typography component="legend">Read only</Typography> */}
                {/* <Rating name="read-only" value={value} readOnly /> */}
                {/* <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} /> */}
              </Box>
              <p>101.00$</p>
              <button type="button">Purchase Now</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FeatureProduct;
