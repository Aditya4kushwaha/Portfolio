import { motion } from "framer-motion";
import { FaTwitter, FaEnvelope } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="py-8 w-full"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.h3 variants={itemVariants} className="text-xl font-medium text-white text-center">
          Connect With Me
        </motion.h3>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="https://x.com/adityakush_04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-3 bg-transparent border border-gray-600 rounded-full hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTwitter size={20} className="text-white" />
          </motion.a>

          <motion.a
            href="mailto:adityakushwahaindia@gmail.com"
            aria-label="Email"
            className="p-3 bg-transparent border border-gray-600 rounded-full hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaEnvelope size={20} className="text-white" />
          </motion.a>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 mt-2 text-sm text-center"
        >
          © 2025 . Made with <span className="text-red-500">❤️</span> by AdityaXdev
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
