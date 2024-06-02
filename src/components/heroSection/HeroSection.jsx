const HeroSection = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <img className="w-full h-44 lg:h-full object-cover" src="../img/hero1.png" alt="Hero" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-5">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4">Welcome to E-PAKISTAN</h1>
                <p className="text-lg lg:text-2xl mb-8">Discover the best products in fashion, electronics, and more.</p>
                <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
