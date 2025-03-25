export default function Subscribe() {
    return (
        <>
            <div className="flex items-center justify-between w-full py-6 px-8 bg-[#D3D3D3] rounded-[8px] border border-[#E0E0E0] shadow-sm mb-20">
                {/* Left side - Content */}
                <div className="flex flex-col gap-2 max-w-[60%]">
                    <h3 className="text-xl font-semibold text-gray-800">Stay Updated with RecipeHub</h3>
                    <p className="text-sm text-gray-600">
                        Subscribe to our newsletter and get weekly updates on new recipes, cooking tips, and exclusive offers.
                    </p>
                </div>
                
                {/* Form - Works for both mobile and desktop */}
                <div className="flex flex-col min-[885px]:flex-row items-center gap-3 w-full min-[885px]:w-auto">
                    <div className="relative w-full min-[885px]:w-64">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="w-full h-[42px] px-4 py-2 
                                rounded-[5px] 
                                border border-[#d3d3d3]
                                bg-white
                                focus:outline-none focus:border-[#747474] focus:ring-1 focus:ring-[#747474]
                                transition-all duration-200"
                        />
                    </div>
                    <button 
                        className="w-full min-[885px]:w-auto h-[42px] px-5 py-2 
                            bg-[#FF6B35] 
                            text-white text-sm font-medium
                            rounded-[5px] 
                            hover:bg-[#e55a29] 
                            transition-colors duration-200
                            flex items-center justify-center gap-2"
                    >
                        <span>Subscribe</span>
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </>
    );
}