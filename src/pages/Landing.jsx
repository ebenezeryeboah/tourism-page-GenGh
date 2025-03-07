import Navbar from "../assets/components/navbar"
import sliderImage from "./slider.jpg";


function Landing() {


    return <div>
        <Navbar />


        <section
            className="h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${sliderImage})` }}>
            <div className="bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-white text-center p-6">
                <h1 className="text-6xl font-bold mb-2">Discover great places in New York</h1>
                <p className="text-lg font-bold mb-6 text-gray-600">
                    Let's uncover the best places to eat, drink, and shop nearest to you
                </p>

                <form className="w-full max-w-2xl flex flex-col md:flex-row">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="p-4 w-full flex-1 border border-gray-300 text-black bg-amber-50 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        className="p-4 w-full flex-1 border border-gray-300 text-black bg-amber-50 rounded-md"
                    />
                    <button className="bg-[#ff3a6d] hover:bg-[#ff0999] text-white px-8 py-4 rounded-md">
                        Search
                    </button>
                </form>
            </div>


        </section>

    </div>
}

export default Landing