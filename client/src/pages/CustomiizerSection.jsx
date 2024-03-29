import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { fadeAnimation, slideAnimation } from "../config/motion";
import CustomButton from "../components/CustomButton";

const CustomiizerSection = () => {
  const store = useSnapshot(state);

  return (
    <AnimatePresence>
      {!store.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                <button>tab</button>
                <button>tab</button>
                <button>tab</button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            <button>bottom</button>
            <button>bottom</button>
            <button>bottom</button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomiizerSection;
