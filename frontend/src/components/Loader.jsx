import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] lg:h-[60vh]">
      <RingLoader color="#4F46E5" size={50} />
    </div>
  );
};

export default Loader;
