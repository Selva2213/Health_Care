import { ClipLoader, PulseLoader } from "react-spinners";
const Loader = ({ pulse, clip }) => {
  return (
    <>
      {pulse && <PulseLoader color="white" size={"0.8rem"} />}
      {clip && <ClipLoader color="white" size={"1.2rem"} />}
    </>
  );
};

export default Loader;
