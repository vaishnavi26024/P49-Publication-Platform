import { motion } from "framer-motion";

export default function Logo() {
  return (
    <>
      <motion.h1 
        className="brand-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Word Lane Publication Pvt. Ltd.
      </motion.h1>

      <motion.p 
        className="brand-tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Publish. Promote. Prosper.
      </motion.p>
    </>
  );
}
