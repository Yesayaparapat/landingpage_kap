import Navbar from "../components/Navbar";
import GambarBG from "../assets/gambar bg.png";
import { motion } from "framer-motion";

function Beranda() {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${GambarBG})`, // Gunakan gambar lokal yang diimpor
        }}
      ></div>
      
      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Import Navbar Component with custom props */}
        <Navbar 
          bgColor="transparent" 
          textColor="white" 
          mobileColor="white"  // Set navbar background to white on mobile
        />
        
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge/Label */}
            <motion.div 
              className="inline-block mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className=" text-white px-6 py-2 rounded-full text-3xl font-medium tracking-wider uppercase shadow-lg">
                Kantor Akuntan Publik
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              <motion.span
                className="text-blue-600 block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                JAMASTER
              </motion.span>
              <motion.span 
                className="text-blue-600 block"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                SIMANULLANG
              </motion.span>
            </h1>

            {/* Tagline */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <p className="text-xl md:text-2xl text-yellow-400 font-light tracking-wide">
                Integrity • Independent • Competent
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
