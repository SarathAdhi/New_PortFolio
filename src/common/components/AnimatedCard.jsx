import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { H4 } from "./elements/Text";

export default function AnimatedCard({
  selectedTab,
  setSelectedTab,
  tabs,
  dark,
  className,
  children,
}) {
  return (
    <div className="flex flex-col">
      <div className="w-full justify-center items-center flex gap-1 md:gap-5">
        {tabs.map((item) => (
          <div
            key={item.label}
            className={clsx(
              "cursor-pointer flex items-center z-50 gap-1",
              item === selectedTab
                ? "bg-indigo-400 px-1 sm:px-2 py-1 rounded-lg"
                : "px-1 sm:px-2 py-1"
            )}
            onClick={() => setSelectedTab(item)}
          >
            {item.icon && item.icon}
            {item.img && (
              <img className="w-4 md:w-6" src={item.img} alt={item.label} />
            )}
            <H4
              className={clsx(
                "!text-xs md:!text-lg md:font-medium",
                item === selectedTab
                  ? "!text-white"
                  : dark
                  ? "!text-gray-500"
                  : "!text-indigo-200"
              )}
            >
              {item.label}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </H4>
          </div>
        ))}
      </div>
      <div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={className}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
