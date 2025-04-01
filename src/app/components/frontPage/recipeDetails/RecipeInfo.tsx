"use client"
import { useState } from 'react';
import Image from 'next/image';
import { recipeData } from '@/app/dataItems/RecipeInfoData';

export default function RecipeInfo() {
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-lg overflow-hidden my-6 shadow-sm">
      {/* Recipe Header */}
      <div className="relative h-72 w-full">
        <Image
          src="/images/home/detail/detail2.jpg"
          alt={recipeData.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h1 className="text-3xl font-bold text-white p-6">{recipeData.title}</h1>
        </div>
      </div>
      
      {/* Recipe Stats Bar */}
      <div className="flex flex-wrap justify-between bg-blue-50 dark:bg-blue-900/20 p-4 border-b border-blue-100 dark:border-gray-700">
        <div className="flex items-center px-3 py-1">
          <i className="ri-time-line text-blue-600 dark:text-blue-400 text-xl mr-2"></i>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Prep</p>
            <p className="font-medium text-gray-800 dark:text-white">{recipeData.prepTime}</p>
          </div>
        </div>
        <div className="flex items-center px-3 py-1">
          <i className="ri-fire-line text-blue-600 dark:text-blue-400 text-xl mr-2"></i>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Cook</p>
            <p className="font-medium text-gray-800 dark:text-white">{recipeData.cookTime}</p>
          </div>
        </div>
        <div className="flex items-center px-3 py-1">
          <i className="ri-group-line text-blue-600 dark:text-blue-400 text-xl mr-2"></i>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Serves</p>
            <p className="font-medium text-gray-800 dark:text-white">{recipeData.servings}</p>
          </div>
        </div>
        <div className="flex items-center px-3 py-1">
          <i className="ri-award-line text-blue-600 dark:text-blue-400 text-xl mr-2"></i>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Difficulty</p>
            <p className="font-medium text-gray-800 dark:text-white">{recipeData.difficulty}</p>
          </div>
        </div>
      </div>
      
      {/* Interactive Recipe Steps View */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Ingredients Panel - Always Visible */}
          <div className="lg:w-1/3">
            <div className="sticky top-4">
              <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
                <i className="ri-list-check text-blue-600 dark:text-blue-400 mr-2"></i>
                Ingredients
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-gray-700">
                <ul className="space-y-2">
                  {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-baseline text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full mr-2 mt-1.5 shrink-0"></span>
                      <span className={activeStep >= index ? "font-medium" : ""}>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Chef's Notes */}
              {recipeData.notes && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-300 dark:border-blue-500/50 rounded">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                    <i className="ri-lightbulb-line text-blue-600 dark:text-blue-400 mr-2"></i>
                    Mom's Tips
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{recipeData.notes}</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Instructions and Video Panel */}
          <div className="lg:w-2/3">
            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
              <i className="ri-book-open-line text-blue-600 dark:text-blue-400 mr-2"></i>
              Step-by-Step Instructions
            </h2>
            
            {/* Video Player (placeholder) */}
            <div className="mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden relative aspect-video">
              {recipeData ? (
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  className="w-full h-full"
                  title="Recipe video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <i className="ri-video-line text-4xl text-gray-400 dark:text-gray-500 mb-2"></i>
                    <p className="text-gray-500 dark:text-gray-400">Video coming soon</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Steps Navigation */}
            <div className="mb-4 flex justify-between items-center">
              <button 
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-800/40 text-blue-800 dark:text-blue-300 rounded-md disabled:opacity-50"
              >
                <i className="ri-arrow-left-line mr-1"></i>
                Previous
              </button>
              
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Step {activeStep + 1} of {recipeData.instructions.length}
              </span>
              
              <button 
                onClick={() => setActiveStep(prev => Math.min(recipeData.instructions.length - 1, prev + 1))}
                disabled={activeStep === recipeData.instructions.length - 1}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-800/40 text-blue-800 dark:text-blue-300 rounded-md disabled:opacity-50"
              >
                Next
                <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
            
            {/* Current Step Details */}
            <div className="p-5 border border-blue-200 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-start">
                <div className="bg-blue-500 dark:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mr-4 shrink-0 font-bold">
                  {activeStep + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">{recipeData.instructions[activeStep]}</p>
              </div>
            </div>
            
            {/* Steps Timeline */}
            <div className="mt-8">
              <div className="flex items-center mb-2">
                <h3 className="font-medium text-gray-700 dark:text-gray-300">All Steps</h3>
                <div className="ml-auto">
                  <button 
                    onClick={() => setActiveStep(0)} 
                    className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    View All
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800/50"></div>
                <ol className="space-y-4 relative">
                  {recipeData.instructions.map((instruction, index) => (
                    <li 
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`flex text-gray-700 dark:text-gray-300 cursor-pointer p-2 rounded-lg transition-colors ${
                        activeStep === index 
                          ? "bg-blue-100 dark:bg-blue-800/30" 
                          : "hover:bg-blue-50 dark:hover:bg-blue-900/10"
                      }`}
                    >
                      <div className={`
                        rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 shrink-0 -ml-1.5
                        ${activeStep === index 
                          ? "bg-blue-500 dark:bg-blue-600 text-white" 
                          : index < activeStep 
                            ? "bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200" 
                            : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"}
                      `}>
                        {index + 1}
                      </div>
                      <p className={activeStep === index ? "font-medium" : ""}>
                        {instruction.length > 80 ? `${instruction.substring(0, 80)}...` : instruction}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="bg-gray-50 dark:bg-gray-800/60 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-colors">
            <i className="ri-heart-line mr-1.5"></i>
            Save Recipe
          </button>
          <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg transition-colors">
            <i className="ri-printer-line mr-1.5"></i>
            Print
          </button>
          <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg transition-colors">
            <i className="ri-share-line mr-1.5"></i>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}