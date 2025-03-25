import React from "react";
import carData from "../../CarData.js";
import { useParams } from "react-router";
import "./ShowCpn.css";
import call from "../../assets/call.png";
import email from "../../assets/email.png";
import FootCpn from "../../FootCpn/FootCpn";
import HeaderProps from "../HeaderProps";

const ShowCpn = (props) => {
  const param = useParams();

  const [dataCard, setDataCard] = React.useState({});

  React.useEffect(() => {
    const handleApi = carData.find((e) => e.id == param.idTab);

    setDataCard(handleApi);
  }, []);
  return (
    <div className="conntainer">
      <HeaderProps />

      <div className="headItem">
        <h1>{dataCard?.name}</h1>
        <div className="imgHead">
          <img src={dataCard?.image} alt="" />
        </div>
      </div>
      <div className="midContainer">
        <div className="midContaiLeft">
          <div className="content">
            <h2>Description</h2>
            <p>{dataCard?.description}</p>
          </div>
          <div className="checkbox">
            <h2>Feature</h2>
            <div className="controlBox">
              <div className="insiteBox">
                <input type="checkbox" />
                <p>Autopilot</p>
              </div>
              <div className="insiteBox">
                <input type="checkbox" />
                <p>Summon</p>
              </div>
              <div className="insiteBox">
                <input type="checkbox" />
                <p>Autopark</p>
              </div>
              <div className="insiteBox">
                <input type="checkbox" />
                <p>Auto Lane Change</p>
              </div>
              <div className="insiteBox">
                <input type="checkbox" />
                <p>15 inch Touchscreen Display</p>
              </div>
              <div className="insiteBox">
                <input type="checkbox" />
                <p>360° Camera</p>
              </div>
              <div className="insiteBox">
                <input type="checkbox" />
                <p>12 Ultrasonic Sensor</p>
              </div>
            </div>
          </div>
          <div className="infoPerson">
            <div className="info">
              <h2>Dealer Info</h2>
              <div className="user">
                <div className="imgAndPersoncontent">
                  <img src="https://s3-alpha-sig.figma.com/img/d9fc/f5b3/c5acf04733ffc68e7de3a690050c684c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R6ySniiEchcRh1ILwb15A4~mAisz-h6HADZBrJVzP1HtsfE6qz3rTfSsRQPZCxkzYUYcBT2yg09ezWKeYDMvVan-a2cptUdJPVNStz0DtQjDBcQP7g4zHgVD5VLngOoETCR4ModVajXCWLDeC8oEJ5DDhCdJM4w1xZli-Fa72FJHROa6LGLxhz6aOwM8FfwNOX05TIx00NnSSaO8gkFJDAxqgiWHyHGUClU7le2ee9FRuUFMCJOoN147wwxPpEvq4t0wR8fAIQ3eKy6zcuymvMgpTjrYGd~8~f6hIFkvNbXW7ymPXzr7-1w-XsYDs1wC2vuf2IJdta~aR4y7dtT9LA__" />
                  <div className="writting">
                    <p>Alfredo Gouse</p>
                    <p>Dealer</p>
                  </div>
                </div>
                <div className="imgAndcontent">
                  <img src={call} />
                  <div className="writting">
                    <p>240-865-3730</p>
                    {/* <p>Dealer</p> */}
                  </div>
                </div>
                <div className="imgAndcontent">
                  <img src={email} />
                  <div className="writting">
                    <p>alfred.g@mail.com</p>
                    {/* <p>Dealer</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contactControl">
            <h2>Contact</h2>
            <div className="writtingHere">
              <div className="write">
                <p>Name</p>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="write">
                <p>Email</p>
                <input type="email" placeholder="email@mail.com" />
              </div>
            </div>
            <div className="writtingHere">
              <div className="writee">
                <p>Phone (Optional)</p>
                <input type="phone" placeholder="(000) 000-0000" />
              </div>
            </div>
            <div className="writtingHere">
              <div className="writeen">
                <p>Comment</p>
                <input type="text" placeholder="Leave a message here" />
              </div>
            </div>
            <button>Contact Dealer</button>
          </div>
          <div className="place">
            <div className="locationNmap">
              <h2>Location</h2>
              <p>
                9500 E Tsala Apopka Dr, Floral City, FL, 34436, Florida, USA
              </p>
              <img src="https://s3-alpha-sig.figma.com/img/ec65/5592/3618bb009e9b5d6c61f876da2608c643?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ez2XUHyXUtC1F5jpHHee64SQmooO0W2VcLLLhL1jDOk--MI~r2JHNJYcKSzK87SEthmSLTJxArGzP2k37D4~7aiAnn06uZP0ei7E6PF4zQDmuSCy010vFEvKzM2UYW4Na2PgbsJpU6WtSXsPGyKM0B-S4IxZB-Aw-GA4RCPqbzTN2VtyokZE1p-7aNQKSY67gH~~ovPzp1HciQ3~ct8nWWaPjkB2ygoLMFflN0CUEAAo0d7P29PFQdIeRaNR4NikkWYN49z6~tX699u-2-ZWaowsfKagwBays2G3742Z~LpxSXJLEZstPZ2iNaDC2RvhQyCvfLjDItKtP2CEbGjpiw__" />
            </div>
          </div>
        </div>
        <div className="midContainerRight">
          <div className="price">
            <button>${dataCard?.price}</button>
          </div>
          <div className="detailItem">
            <h2>Car Details</h2>
            <div className="itemWritting">
              <div className="itemWrittingContent">
                <span>brand</span>
                <span>{dataCard?.Brand}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Model</span>
                <span>{dataCard?.model}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Condition</span>
                <span>{dataCard?.Condition}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Year</span>
                <span>{dataCard?.year}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Body Type</span>
                <span>{dataCard?.body}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Seats</span>
                <span>{dataCard?.seat}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Exterior Color</span>
                <span>{dataCard?.color}</span>
              </div>
            </div>
          </div>
          <div className="detailItem">
            <h2>Engine</h2>
            <div className="itemWritting">
              <div className="itemWrittingContent">
                <span>Fuel Type</span>
                <span>{dataCard?.fuel}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Mileage</span>
                <span>{dataCard?.milage}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Transmission</span>
                <span>{dataCard?.tramisson}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Drivetrain</span>
                <span>{dataCard?.Drivetrain}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Power</span>
                <span>{dataCard?.power}</span>
              </div>
            </div>
          </div>
          <div className="detailItem">
            <h2>Battery and Charging</h2>
            <div className="itemWritting">
              <div className="itemWrittingContent">
                <span>Battery Capacity</span>
                <span>{dataCard?.Battery}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Charge Speed</span>
                <span>{dataCard?.Charge}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Charge Port</span>
                <span>{dataCard?.port}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Charge Time (0-Full)</span>
                <span>{dataCard?.Drivetrain}</span>
              </div>
            </div>
          </div>
          <div className="detailItem">
            <h2>Dimension</h2>
            <div className="itemWritting">
              <div className="itemWrittingContent">
                <span>Length</span>
                <span>{dataCard?.Length}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Width</span>
                <span>{dataCard?.Width}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Height</span>
                <span>{dataCard?.Height}</span>
              </div>
              <div className="itemWrittingContent">
                <span>Cargo Volume</span>
                <span>{dataCard?.Cargo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FootCpn />
    </div>
  );
};

export default ShowCpn;
