"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/app/context/ThemeContext';
import { useSearchParams } from 'next/navigation';
import { showToast } from '../../reusable/Toasters';
import { Recipe } from '@/app/types/recipe';

export default function RecipeInfo() {

  // Get the recipe ID from the URL
  const searchParams = useSearchParams();
  const recipeId = searchParams.get('id');

  // State variables & Hooks
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [saved, setSaved] = useState(false);
  const { t, savedTheme } = useTheme();

  useEffect(() => {
    const fetchRecipeData = async () => {
      if (!recipeId) {
        showToast("error", t('recipeInfo.error.noId'), savedTheme);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`/api/recipes/simplefetch?id=${recipeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          showToast("error", t('recipeInfo.error.notFound'), savedTheme);
          setLoading(false);
          return;
        }

        const data = await response.json();
        if (data) {
          setRecipe(data);
        } else {
          showToast("error", t('recipeInfo.error.notFound'), savedTheme);
        }
      } catch (error) {
        console.error("Error fetching recipe data:", error);
        showToast("error", t('recipeInfo.error.fetchingData'), savedTheme);
      } finally {
        setLoading(false);
      }
    }

    const fetchSavedRecipes = async () => {
      try {
        const response = await fetch(`/api/myList/prepareList?recipeid=${recipeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          setSaved(false);
          return;
        }
        else {
          console.log("Recipe is saved in the list");
          setSaved(true);
        }

      } catch (error) {
        console.error("Error fetching saved recipes:", error);
        showToast("error", t('recipeInfo.error.fetchingSaved'), savedTheme);
      }
    }

    fetchRecipeData();
    fetchSavedRecipes();
  }, [recipeId, savedTheme, t]);

  const handleSaveRecipe = async () => {
    try {
      const response = await fetch('/api/myList/prepareList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipeId: recipeId })
      });

      if (!response) {
        showToast("error", t('recipeInfo.error.saving'), savedTheme);
        return;
      }
      else {
        setSaved(true);
        showToast("success", t('recipeInfo.success.saved'), savedTheme);
      }
    } catch (error) {
      console.error("Error saving recipe:", error);
      showToast("error", t('recipeInfo.error.saving'), savedTheme);
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6 text-center">
        <div className="animate-pulse">
          <div className="h-72 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-4">{t('recipeInfo.loading')}</p>
      </div>
    );
  }

  // Error state - no recipe found
  if (!recipe) {
    return (
      <div className="max-w-5xl mx-auto p-6 text-center">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <i className="ri-error-warning-line text-5xl text-red-500 mb-4"></i>
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">{t('recipeInfo.error.notFound')}</h2>
          <p className="text-gray-600 dark:text-gray-300">{t('recipeInfo.error.tryAgain')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-lg overflow-hidden mt-6 shadow-sm">
      {/* Recipe Header */}
      <div className="relative h-72 w-full">
        <Image
          src={recipe.image || "/images/home/detail/detail2.jpg"}
          alt={recipe.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h1 className="text-3xl font-bold text-white p-6">{recipe.title}</h1>
        </div>
      </div>

      {/* Recipe Stats Bar */}
      <div className="flex flex-wrap justify-between bg-blue-50 dark:bg-blue-900/20 p-4 border-b border-blue-100 dark:border-gray-700">
        <div className="flex items-center px-3 py-1">
          <i className="ri-time-line text-blue-600 dark:text-blue-400 text-xl mr-2"></i>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('recipeInfo.stats.prep')}</p>
            <p className="font-medium text-gray-800 dark:text-white">{recipe.preptime ? `${recipe.preptime} min` : 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center px-3 py-1">
          <i className="ri-fire-line text-blue-600 dark:text-blue-400 text-xl mr-2"></i>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('recipeInfo.stats.cook')}</p>
            <p className="font-medium text-gray-800 dark:text-white">{recipe.cooktime ? `${recipe.cooktime} min` : 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center px-3 py-1">
          <i className="ri-group-line text-blue-600 dark:text-blue-400 text-xl mr-2"></i>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('recipeInfo.stats.serves')}</p>
            <p className="font-medium text-gray-800 dark:text-white">{recipe.servings || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center px-3 py-1">
          <i className="ri-award-line text-blue-600 dark:text-blue-400 text-xl mr-2"></i>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('recipeInfo.stats.difficulty')}</p>
            <p className="font-medium text-gray-800 dark:text-white">{recipe.difficulty}</p>
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
                {t('recipeInfo.sections.ingredients')}
              </h2>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-gray-700">
                <ul className="space-y-2">
                  {recipe.Ingredients && recipe.Ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-baseline text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full mr-2 mt-1.5 shrink-0"></span>
                      <span>{ingredient.ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chef's Notes */}
              {recipe.description && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-300 dark:border-blue-500/50 rounded">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                    <i className="ri-lightbulb-line text-blue-600 dark:text-blue-400 mr-2"></i>
                    {t('recipeInfo.sections.description')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{recipe.description}</p>
                </div>
              )}
            </div>
          </div>

          {/* Instructions and Video Panel */}
          <div className="lg:w-2/3">
            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
              <i className="ri-book-open-line text-blue-600 dark:text-blue-400 mr-2"></i>
              {t('recipeInfo.sections.instructions')}
            </h2>

            {/* Video Player */}
            <div className="mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden relative aspect-video">
              {recipe.video ? (
                <iframe
                  src={recipe.video}
                  className="w-full h-full"
                  title={`${recipe.title} video`}
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <i className="ri-video-line text-4xl text-gray-400 dark:text-gray-500 mb-2"></i>
                    <p className="text-gray-500 dark:text-gray-400">{t('recipeInfo.videoPlaceholder.comingSoon')}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Steps Navigation */}
            {recipe.instructions && recipe.instructions.length > 0 && (
              <>
                <div className="mb-4 flex justify-between items-center">
                  <button
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className={`px-3 py-1 bg-blue-100 dark:bg-blue-800/40 text-blue-800 dark:text-blue-300 rounded-md disabled:opacity-50  ${activeStep === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <i className="ri-arrow-left-line mr-1"></i>
                    {t('recipeInfo.navigation.previous')}
                  </button>

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {t('recipeInfo.navigation.step').replace('{current}', String(activeStep + 1)).replace('{total}', String(recipe.instructions.length))}
                  </span>

                  <button
                    onClick={() => setActiveStep(prev => Math.min(recipe.instructions.length - 1, prev + 1))}
                    disabled={activeStep === recipe.instructions.length - 1}
                    className={`px-3 py-1 bg-blue-100 dark:bg-blue-800/40 text-blue-800 dark:text-blue-300 rounded-md disabled:opacity-50 ${activeStep === recipe.instructions.length - 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {t('recipeInfo.navigation.next')}
                    <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>

                {/* Current Step Details */}
                <div className="p-5 border border-blue-200 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-blue-500 dark:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mr-4 shrink-0 font-bold">
                      {activeStep + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">{recipe.instructions[activeStep]}</p>
                  </div>
                </div>

                {/* Steps Timeline */}
                <div className="mt-8">
                  <div className="flex items-center mb-2">
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">{t('recipeInfo.sections.allSteps')}</h3>
                    <div className="ml-auto">
                      <button
                        onClick={() => setActiveStep(0)}
                        className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
                      >
                        {t('recipeInfo.sections.viewAll')}
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800/50"></div>
                    <ol className="space-y-4 relative">
                      {recipe.instructions.map((instruction, index) => (
                        <li
                          key={index}
                          onClick={() => setActiveStep(index)}
                          className={`flex text-gray-700 dark:text-gray-300 cursor-pointer p-2 rounded-lg transition-colors ${activeStep === index
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
              </>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-gray-50 dark:bg-gray-800/60 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap items-center gap-3">

          {saved ? (
            <button className="flex items-center px-4 py-2 bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700 text-white rounded-lg transition-colors cursor-not-allowed">
              <i className="ri-check-line mr-1.5"></i>
              {t('recipeInfo.actions.alreadySaved')}
            </button>

          ) : (
            <button
              className="flex items-center px-4 py-2 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer"
              onClick={() => handleSaveRecipe()}
            >
              <i className="ri-heart-line mr-1.5"></i>
              {t('recipeInfo.actions.save')}
            </button>
          )}



          <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg transition-colors cursor-pointer">
            <i className="ri-printer-line mr-1.5"></i>
            {t('recipeInfo.actions.print')}
          </button>
          <button
            onClick={() => setShowShareOptions(!showShareOptions)}
            className={`flex items-center px-4 py-2 border text-gray-700 dark:text-gray-300 rounded-lg transition-colors cursor-pointer ${showShareOptions
              ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800'
              : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
          >
            <i className="ri-share-line mr-1.5"></i>
            {t('recipeInfo.actions.share')}
          </button>

          <div className={`
            flex items-center space-x-2 ml-2 pl-3 pr-4 py-2 bg-white dark:bg-gray-800 
            border border-gray-200 dark:border-gray-700 rounded-full shadow-md
            transition-all duration-300 ease-in-out origin-left
            ${showShareOptions
              ? 'opacity-100 scale-x-100 w-auto'
              : 'opacity-0 scale-x-0 w-0 overflow-hidden pointer-events-none'}
          `}>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:bg-[#1877F2]/80 transition-colors shrink-0">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/80 transition-colors shrink-0">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#fd5949] to-[#d6249f] text-white hover:opacity-80 transition-opacity shrink-0">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#25D366]/80 transition-colors shrink-0">
              <i className="ri-whatsapp-line"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:bg-[#0A66C2]/80 transition-colors shrink-0">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shrink-0">
              <i className="ri-links-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}