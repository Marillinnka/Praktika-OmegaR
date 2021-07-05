import layer2 from "../images/Layer 2.png"
import layer3 from "../images/Layer 3.png"
import layer4 from "../images/Layer 4.png"
import layer5 from "../images/Layer 5.png"
import layer6 from "../images/Layer 6.png"
import layer8 from "../images/Layer 8.png"
import layer9 from "../images/Layer 9.png"

import {Navbar} from "./Navbar";
import {Card} from "./Card";
import {Foother} from "./Foother";
function App() {
  return (
    <>
      <Navbar />
      <div className="block-information">
        <p className="block-information__text">
          Hello, we are ZEST. We help our clients to stand out, enable<br />
          them reach their communication goals and make them like the digital world.
        </p>
      </div>
      <div className="block-cards">
        <Card src={layer2} text="WOMEN IN CHANEL \ COLLECTOR´S EDITION" />
        <Card src={layer3} text="BERLUTI \ AT THEIR FEET" />
        <Card src={layer4} text="SURF ODYSSEY \ THE CULTURE OF WAVE RIDING" />
        <Card src={layer5} text="ISSEY MIYAKE \ THE ULTIMATE ISSEY MIYAKE MONOGRAPH" />
        <Card src={layer6} text="A SMILE IN THE MIND \ WITTY THINKING IN GRAPHIC DESIGN" />
        <Card src={layer8} text="CROSSING EUROPE \ POIKE STOMPS" />
        <Card src={layer9} text="OTHERWORLDLY \ AVANT-GARDE FASHION AND STYLE" />
      </div>
      <Foother />
    </>
  );
}
export default App;






