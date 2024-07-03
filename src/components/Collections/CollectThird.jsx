import React from "react";
import { collect3_1, collect3_2 } from "../asstes";
import "../../css/CollectThird.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function CollectThird() {
  return (
    <div className="ourCollectionThird">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="box col-6">
              <div className="img-box">
                <img src={collect3_1} alt="img" />
              </div>
            </div>
            <div className="box col-6">
              <div className="img-box">
                <img src={collect3_2} alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="box col-lg-4">
          <h1>SHOP BEST <br/> SELLERS</h1>
          <a href="/">SHOP NOW <ArrowRightAltIcon/> </a>
        </div>
      </div>
    </div>
  );
}

export default CollectThird;
