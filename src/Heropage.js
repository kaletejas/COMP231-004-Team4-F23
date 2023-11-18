import React from "react";
import { ReactComponent as HeroImage2 } from "./dog_walking.svg";
import { ReactComponent as HeroImage3 } from "./good_dog.svg";
import { ReactComponent as HeroImage4 } from "./dog_walking3.svg";
import { ReactComponent as HeroImage5 } from "./pet_calendar.svg";
import { ReactComponent as HeroImage6 } from "./pets_med.svg";
const Heropage = () => {
  // const title = "Pet Parenting made cool..";
  return (
    <>
      <div className="heropage-50">
        <div className="flex-50">
          <h1>Pet parenting made cool.. </h1>
          <p>Pet Portfolio to manage all their needs</p>
          <p> Veterinary,Food, Adoption, Pet day care and more </p>
        </div>
        <HeroImage3 className="heroimage-50" />
      </div>
      <div className="heropage-33">
        <HeroImage4 className="heroimage-33" />
        <div className="flex-33">
          <p>Ofcourse we LOVE our Pet</p>
          <p>
            But are we doing enough for them ? Remembering every single detail
            about their Health, Diet etc is so difficult isn't it ..
          </p>

          <p>
            Start with your Petfolio here and be rest assured about all their
            needs !
          </p>
        </div>
        <HeroImage5 className="heroimage-33" />
        <a href="/Profile">
          <button>Petfolio</button>
        </a>
      </div>

      <div className="heropage-50">
        <HeroImage6 className="heroimage-50" />
        <div className="flex-50">
          <p>Veterinarians are most trusted by Pet Parents</p>
          <p>Login here as a Doctor and guides the Pets to Healthy Lifestyle</p>
          <a href="/Doctor">
            <button>Doc's Clinic</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Heropage;
