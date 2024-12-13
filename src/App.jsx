import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="justify-center text-green-500 flex flex-col gap-2 items-center">
        <h1 className="mt-12 text-4xl  text-center font-extrabold ">
          Create Template With React Router,<br></br>TailwindCSS And DaisyUI
        </h1>

        <p className="read-the-docs  ">
          Click on the Vite and React logos to learn more
        </p>
        <div className="hero bg-base-200 w-[80%] py-5 mt-3">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="justify-center mt-2">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi.<br/> In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn mt-2 text-green-500 font-bold text-lg bg-[#e3e3e3]">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
