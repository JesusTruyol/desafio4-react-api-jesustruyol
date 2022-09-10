import React, { useState, useEffect, useRef } from "react";
import SliderCardApi from "./SliderCardApi";
import Header from "./Header";
import FormApi from "./FormApi";
import FOG from "vanta/dist/vanta.fog.min";
import CaruselApi from "./CaruselApi";
import Person from "./Person";
import Footer from "./Footer";

const MiApi = () => {
  const [infoApi, setInfoApi] = useState([]);
  const [randon, setRandon] = useState("");
  const [render, setRender] = useState(0);
  const [infoFilter, setInfoFilter] = useState([]);
  const [change, setChange] = useState(false);
  const [person, setPerson] = useState([]);

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    consultApi();
    if (randon === "") {
      setRandon(Math.floor(Math.random() * 12).toString());
      console.log("randon" + randon);
    }
  }, [vantaEffect]);

  const consultApi = async () => {
    const response = await fetch(
      "https://dragon-ball-super-api.herokuapp.com/api/characters"
    );
    const data = await response.json();
    console.log(data);

    setInfoApi(data);

    if (render % 2 === 0) {
      console.log("efecto");
      if (!vantaEffect) {
        setVantaEffect(
          FOG({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0x44bbe6,
            midtoneColor: 0x87d7d7,
            lowlightColor: 0x4396b3,
            baseColor: 0x202220,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  };

  return (
    <div className="MiApi" ref={myRef}>
      <div className="app-background">
        <img
          className="app-background-img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3eb70ccc-e7ad-4e1a-87fa-f97df9ef1c52/db4hyf3-867f3272-6418-40a5-9c17-427c8b6fb262.png/v1/fill/w_1024,h_923,strp/dragon_balls___esferas_del_dragon_by_saodvd_db4hyf3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTIzIiwicGF0aCI6IlwvZlwvM2ViNzBjY2MtZTdhZC00ZTFhLTg3ZmEtZjk3ZGY5ZWYxYzUyXC9kYjRoeWYzLTg2N2YzMjcyLTY0MTgtNDBhNS05YzE3LTQyN2M4YjZmYjI2Mi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RzkGwsXuVa7BNjCOSl9njqkZFRLabPL6xWddWqxG4OQ"
          alt="super esferas"
        />
        <div className="container-main">
          <div className="header">
            <Header />
          </div>

          <div className="container-secondary">
            <div className="container-secondary1 ms-4">
              <div className="form">
                <FormApi
                  infoApi={infoApi}
                  randon={randon}
                  infoFilter={infoFilter}
                  setInfoFilter={setInfoFilter}
                  change={change}
                  setChange={setChange}
                />
              </div>
              <div className="carusel">
                <CaruselApi />
              </div>
            </div>
            <div className="container-secondary2 me-4">
              <div className="section">
                <Person person={person} />
              </div>

              <div className="carusel2">
                <SliderCardApi
                  infoFilter={infoFilter}
                  change={change}
                  setPerson={setPerson}
                />
              </div>
            </div>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiApi;
