import React from "react";
import Slider from "./Slider/Slider";
import SectionOne from "./SectionOne/SectionOne";

function Home() {
  // const [data, setData] = React.useState();

  // React.useEffect(() => {
  //   fetch("http://sql11.freesqldatabase.com/companies")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data)
  //     });
  // }, []);
  return (
    <div>
      {/* {data?.map((i, index) => (
        <div key={index}>
          <p>{i.name}</p>
          <p>{i.address}</p>
        </div>
      ))} */}
      <Slider />
      <SectionOne />
    </div>
  );
}

export default Home;
