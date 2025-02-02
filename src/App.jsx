import { motion } from "framer-motion";
import { FaReact, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
function App() {
  return (
    <div className="h-screen overflow-y-scroll bg-red-300 flex flex-col justify-center items-center">
      <motion.div
        className="card bg-base-100 w-96 shadow-2xl "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <figure>
          <img src="/sucdiv.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h1 className="font-bold text-3xl text-blue-600">SucDiv Onome</h1>
          <details className="collapse bg-base-100 border border-base-300">
            <summary className="collapse-title font-semibold">
              About me?
            </summary>
            <div className="collapse-content text-sm">
              Suc-Div is a passionate and driven learner, eager to master web
              development and software engineering. With a problem-solving
              mindset and a love for innovation, he continuously explores new
              technologies to build impactful projects.
            </div>
          </details>
          <details className="collapse bg-base-100 border border-base-300">
            <summary className="collapse-title font-semibold">
              My skills?
            </summary>
            <div className="collapse-content text-sm">
              Suc-Div is skilled in HTML, CSS, JavaScript, and React, building
              responsive and interactive web applications. He is constantly
              improving his expertise to create seamless user experiences.
              <div className="card-actions mt-6 justify-start">
                <button className="hover:text-red-500 transition-all duration-500 cursor-pointer">
                  <FaHtml5 fontSize={20} />
                </button>
                <button className="hover:text-blue-500 transition-all duration-500 cursor-pointer">
                  <FaCss3 fontSize={20} />
                </button>
                <button className="hover:text-yellow-400 transition-all duration-500 cursor-pointer">
                  <FaJs fontSize={20} />
                </button>
                <button className="hover:text-blue-400 transition-all duration-500 cursor-pointer">
                  <FaReact fontSize={20} />
                </button>
              </div>
            </div>
          </details>
          <details className="collapse bg-base-100 border border-base-300">
            <summary className="collapse-title font-semibold">
              My Experience?
            </summary>
            <div className="collapse-content text-sm">
              Suc-Div has hands-on experience in web development, working with
              HTML, CSS, JavaScript, and React to build responsive and dynamic
              applications. He continuously hones his skills through projects
              and real-world challenges.
            </div>
          </details>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
