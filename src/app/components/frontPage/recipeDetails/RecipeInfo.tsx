import Image from 'next/image';
import { recipeData } from '@/app/dataItems/RecipeInfoData';

interface RecipeInfoProps {
  recipe?: {
    title: string;
    imageUrl: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    difficulty: string;
    ingredients: string[];
    instructions: string[];
    notes?: string;
  };
}

export default function RecipeInfo({ recipe }: RecipeInfoProps = {}) {
  return (
    <div className="max-w-4xl mx-auto bg-white border border-amber-100 rounded-lg overflow-hidden my-6">
      {/* Recipe Header */}
      <div className="relative h-80 w-full">
        <Image
          src={recipeData.imageUrl}
          alt={recipeData.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h1 className="text-3xl font-bold text-white p-6">{recipeData.title}</h1>
        </div>
      </div>
      
      {/* Recipe Details */}
      <div className="p-6">
        {/* Recipe Stats */}
        <div className="flex flex-wrap justify-between border-b border-amber-200 pb-4 mb-6">
          <div className="flex items-center mb-2 mr-6">
            <i className="ri-time-line text-amber-600 text-lg mr-2"></i>
            <div>
              <p className="text-xs text-gray-500">Prep</p>
              <p className="font-medium">{recipeData.prepTime}</p>
            </div>
          </div>
          <div className="flex items-center mb-2 mr-6">
            <i className="ri-fire-line text-amber-600 text-lg mr-2"></i>
            <div>
              <p className="text-xs text-gray-500">Cook</p>
              <p className="font-medium">{recipeData.cookTime}</p>
            </div>
          </div>
          <div className="flex items-center mb-2 mr-6">
            <i className="ri-group-line text-amber-600 text-lg mr-2"></i>
            <div>
              <p className="text-xs text-gray-500">Serves</p>
              <p className="font-medium">{recipeData.servings}</p>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <i className="ri-award-line text-amber-600 text-lg mr-2"></i>
            <div>
              <p className="text-xs text-gray-500">Difficulty</p>
              <p className="font-medium">{recipeData.difficulty}</p>
            </div>
          </div>
        </div>
        
        {/* Two Column Layout for Ingredients and Instructions */}
        <div className="md:flex gap-8">
          {/* Ingredients Column */}
          <div className="md:w-2/5 mb-6">
            <h2 className="text-xl font-bold text-amber-800 mb-4">
              <i className="ri-list-check text-amber-600 mr-2"></i>
              Ingredients
            </h2>
            <ul className="space-y-2">
              {recipeData.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-baseline text-gray-700">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-1.5 shrink-0"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Instructions Column */}
          <div className="md:w-3/5">
            <h2 className="text-xl font-bold text-amber-800 mb-4">
              <i className="ri-book-open-line text-amber-600 mr-2"></i>
              Instructions
            </h2>
            <ol className="space-y-4">
              {recipeData.instructions.map((instruction, index) => (
                <li key={index} className="flex text-gray-700">
                  <div className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 shrink-0 mt-0.5 font-bold">
                    {index + 1}
                  </div>
                  <p>{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        {/* Chef's Notes */}
        {recipeData.notes && (
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-300 rounded">
            <h2 className="font-bold text-amber-800 mb-2">
              <i className="ri-lightbulb-line text-amber-600 mr-2"></i>
              Mom's Tips
            </h2>
            <p className="text-gray-700">{recipeData.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}