import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import logo from "../../public/logo.png";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store/index";
import CustomButton from "../components/CustomButton";

const HomePage = () => {
  const store = useSnapshot(state);
  return (
    <AnimatePresence className="overflow-hidden">
      {store.intro && (
        <motion.section {...slideAnimation("left")} className="home">
          <motion.header {...slideAnimation("down")} className="w-full ">
            <img
              src={logo}
              alt="logo"
              className="object-contain"
              style={{ width: "6rem", height: "4rem" }}
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5 items-center"
            >
              <p className="max-w-md font-normal text-gray-600 text-base md:text-center sm:text-start">
                Create your unique and exclusive Shoe with our brand-new 3D
                customization tool. <strong>Define your own style</strong>.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default HomePage;
