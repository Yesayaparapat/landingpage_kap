import React from "react";
import { motion } from "framer-motion";

function Legal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-6 px-4 pt-16 md:pt-20 lg:pt-25 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8 md:mb-12 px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-4"
          >
            Informasi Legal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Informasi legal dan sertifikasi resmi Kantor Akuntan Publik Jamaster Simanullang
          </motion.p>
        </motion.div>

        {/* Main Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto px-4 md:px-6">
          {/* Detail Perusahaan Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative flex justify-center w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-md md:max-w-full flex flex-col"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mb-6 md:mb-8"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 md:mb-3">Detail Perusahaan</h2>
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="w-32 md:w-40 lg:w-48 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                ></motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="space-y-4 md:space-y-5"
              >
                {[
                  {
                    label: "Nama Badan",
                    value: "Kantor Akuntan Publik Jamaster Simanullang",
                  },
                  { label: "Izin Menteri", value: "KEP 1147/KM.1/2017" },
                  { label: "NPWP", value: "59.963.311.2-413.001", mono: true },
                  { label: "NITKU", value: "3275112601740003000001", mono: true },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25 + index * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(59, 130, 246, 0.05)",
                    }}
                    className="flex flex-col space-y-1 md:space-y-2 p-2 md:p-3 rounded-lg transition-colors duration-200"
                  >
                    <span className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide">
                      {item.label}
                    </span>
                    <span
                      className={`text-gray-800 font-medium text-base md:text-lg ${
                        item.mono ? "font-mono" : ""
                      } break-all md:break-normal`}
                    >
                      {item.value}
                    </span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    x: 5,
                    backgroundColor: "rgba(59, 130, 246, 0.05)",
                  }}
                  className="flex flex-col space-y-1 md:space-y-2 p-2 md:p-3 rounded-lg transition-colors duration-200"
                >
                  <span className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Alamat
                  </span>
                  <div className="text-gray-800 font-medium leading-relaxed text-base md:text-lg">
                    <div>JL. Raya Cibarusah KM. 10</div>
                    <div>Ruko Cikarang Central City Blok E NO. 8</div>
                    <div>Cikarang Selatan - Kab. BEKASI 17530</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    x: 5,
                    backgroundColor: "rgba(59, 130, 246, 0.05)",
                  }}
                  className="flex flex-col space-y-1 md:space-y-2 p-2 md:p-3 rounded-lg transition-colors duration-200"
                >
                  <span className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Kontak
                  </span>
                  <div className="space-y-1">
                    <div className="text-gray-800 font-medium font-mono text-base md:text-lg">
                      021 - 8977 4253
                    </div>
                    <div className="text-gray-800 font-medium font-mono text-base md:text-lg">
                      021 - 8977 4251
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Our Difference Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative flex justify-center w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-md md:max-w-full flex flex-col"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mb-6 md:mb-8"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 md:mb-3">
                  Our Difference
                </h2>
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="w-24 md:w-30 lg:w-36 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                ></motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="space-y-4 md:space-y-6"
              >
                {[
                  {
                    title: "KOLABORASI YANG LEBIH EFEKTIF",
                    content:
                      "Struktur budaya global dan regional memungkinkan kita untuk memberikan keterampilan lebih pada organisasi anda. Pendekatan serta kedisiplinan dalam memberikan pelayanan kepada klien.",
                  },
                  {
                    title: "MEMBERIKAN SOLUSI SECARA MENYELURUH",
                    content:
                      "Kami membantu anda dalam melihat implikasi pada setiap pengambilan keputusan. Sehingga memperoleh kepercayaan dari stakeholder dengan penuh keyakinan.",
                  },
                  {
                    title: "MEMAHAMI KEBUTUHAN ANDA",
                    content:
                      "Kami memberikan input dalam memahami tentang peluang dan tantangan yang akan dihadapi dalam bisnis anda.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25 + index * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{
                      x: -5,
                      backgroundColor: "rgba(59, 130, 246, 0.05)",
                    }}
                    className="flex flex-col space-y-1 md:space-y-2 p-2 md:p-3 rounded-lg transition-colors duration-200"
                  >
                    <motion.span className="text-sm md:text-base font-bold text-blue-600 uppercase tracking-wide">
                      {item.title}
                    </motion.span>
                    <motion.p
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false, amount: 0.3, margin: "-50px" }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + index * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="text-gray-700 font-medium leading-relaxed text-base md:text-lg"
                    >
                      {item.content}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Legal;