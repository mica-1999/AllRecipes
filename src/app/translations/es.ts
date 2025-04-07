const translations = {
    navBar: {
        categories: 'Categorías',
        popularRecipes: 'Recetas Más Populares Ahora',
        trendingRecipes: 'Recetas Tendencia Esta Semana',
        seasonal: 'Favoritas de Temporada',
        featuredChefs: 'Colecciones de Chefs Destacados',
        browseCategories: 'Explorar Todas las Categorías',
        advanced: 'Avanzado',
        myList: 'Mi Lista',
        myProfile: 'Tu Perfil',
        settings: 'Configuración',
        signOut: 'Cerrar Sesión',
        signIn: 'Iniciar Sesión',
        signUp: 'Registrarse',
        home: 'Inicio',
        search: 'Buscar',
        profile: 'Perfil',
        dashboard: 'Panel'
    },
    footer: {
        aboutUs: 'Sobre Nosotros',
        aboutDescription: 'RecipeHub es tu plataforma ideal para descubrir, guardar y compartir deliciosas recetas. Organiza tus favoritos, explora nuevos platos y conéctate con una comunidad de amantes de la comida. ¡Comienza hoy tu viaje culinario con nosotros!',
        contactInfo: 'Información de Contacto',
        address: 'Canhas, Funchal, Madeira',
        quickLinks: 'Enlaces Rápidos',
        home: 'Inicio',
        recipes: 'Recetas',
        about: 'Sobre Nosotros',
        faq: 'Preguntas Frecuentes',
        privacyPolicy: 'Política de Privacidad',
        copyright: '© {year} · Micael Ribeiro · Diseño y Desarrollo Web · Madeira - Portugal'
    },
    basicFilter: {
        cuisines: 'Cocinas',
        whatCrave: '¿Qué te apetece?',
        filterBy: 'Filtrar por',
        addIngredient: 'Añadir Ingrediente',
        difficulty: 'Dificultad',
        selectLevel: 'Seleccionar nivel',
        filters: 'Filtros',
        customize: 'Personalizar'
    },
    imageContainer: {
        title: 'Descubre Nuevas Recetas',
        description: 'Explora una amplia variedad de cocinas e ingredientes para crear tu próxima obra maestra.',
        filterRecipes: 'Filtrar Recetas',
        imageAlt: 'Fondo de comida deliciosa'
    },
    recipeOfDay: {
        title: 'Receta del Día',
        todaysPick: 'Selección de Hoy',
        time: '{minutes} min',
        servings: '{count} porciones',
        difficulty: {
            easy: 'Fácil',
            medium: 'Media',
            hard: 'Difícil'
        },
        viewRecipe: 'Ver Receta'
    },
    trending: {
        title: 'Recetas en Tendencia',
        imageAlt: 'Comida deliciosa'
    },
    topRated: {
        title: 'Recetas Mejor Valoradas',
        rating: '{rating}',
        imageAlt: 'Comida deliciosa',
        recipeTitle: 'Título de la Receta',
        category: 'Categoría',
        description: 'Descripción Aleatoria'
    },
    seasonal: {
        title: 'Recetas de Temporada',
        viewAll: 'Ver Todas',
        seasons: {
            spring: 'Primavera',
            summer: 'Verano',
            autumn: 'Otoño',
            winter: 'Invierno'
        }
    },
    subscribe: {
        title: 'Mantente Actualizado con RecipeHub',
        description: 'Suscríbete a nuestro boletín y recibe actualizaciones semanales sobre nuevas recetas, consejos de cocina y ofertas exclusivas.',
        placeholder: 'Tu dirección de correo electrónico',
        button: 'Suscribirse'
    },
    featuredChefs: {
        title: 'Chefs Destacados',
        viewAll: 'Ver Todos',
        recipes: '{count} Recetas',
        followers: '{count} Seguidores',
        viewProfile: 'Ver Perfil'
    },
    advancedFilters: {
        title: 'Elige tu preferencia de filtro para ver recetas coincidentes a continuación',
        mainFilters: ["Más recientes", "Popular", "Mejor valorados", "De temporada", "Aleatorio"],
        seasons: {
            spring: 'Primavera',
            summer: 'Verano',
            autumn: 'Otoño',
            winter: 'Invierno'
        },
        filterSections: {
            mealOptions: 'Tipo de Cocina',
            mealType: 'Tipo de Comida',
            cookingTime: 'Tiempo de Cocción',
            dietaryRestrictions: 'Restricciones Dietéticas',
            ingredients: 'Ingredientes',
            difficultyLevel: 'Nivel de Dificultad',
            caloriesRange: 'Rango de Calorías',
            cookingMethod: 'Método de Cocción',
            occasion: 'Ocasión'
        },
        difficulty: {
            easy: 'Fácil',
            medium: 'Media',
            hard: 'Difícil'
        },
        minutes: 'minutos',
        calories: 'cal',
        upTo: 'Hasta',
        minimumCalories: 'Calorías mínimas',
        maximumCalories: 'Calorías máximas',
        addIngredientsEnter: 'Añade ingredientes y pulsa Enter',
        search: 'Buscar cocinas...',
        noCuisinesFound: 'No se encontraron cocinas',
        add: 'Añadir',
        clear: 'Limpiar',
        cuisinePlaceholder: 'Italiana, China, Mexicana...',
        cuisineOptions: [
            "Italiana", "China", "Mexicana", "India", "Japonesa", 
            "Tailandesa", "Francesa", "Griega", "Española", "Mediterránea", 
            "Americana", "Coreana", "Vietnamita", "Medio Oriente", "Brasileña"
        ],
        mealTypes: ["Desayuno", "Almuerzo", "Cena", "Brunch", "Merienda", "Postre"],
        restrictions: ["Vegetariano", "Vegano", "Sin Gluten", "Sin Lactosa", "Sin Frutos Secos", "Bajo en Carbohidratos"],
        cookingMethods: {
            baking: "Hornear",
            frying: "Freír",
            grilling: "Asar a la parrilla",
            steaming: "Cocer al vapor",
            boiling: "Hervir",
            roasting: "Asar",
            sauteing: "Saltear",
            slowCooking: "Cocción lenta"
        },
        occasions: [
            "Cumpleaños", "Vacaciones", "Casual", "Cita Romántica", 
            "Acción de Gracias", "Navidad", "Boda", "Barbacoa", 
            "Día de Partido", "Picnic", "Brunch", "Comida Compartida"
        ],
        filtersReset: 'Los filtros han sido restablecidos',
        all: 'TODOS',
        any: 'CUALQUIERA',
        matchAllIngredients: 'Coincidir con todos los ingredientes (Y)',
        matchAnyIngredient: 'Coincidir con cualquier ingrediente (O)',
        showingAllIngredients: 'Mostrando recetas con todos estos ingredientes',
        showingAnyIngredient: 'Mostrando recetas con cualquiera de estos ingredientes',
        matchAllRestrictions: 'Coincidir con todas las restricciones (Y)',
        matchAnyRestriction: 'Coincidir con cualquier restricción (O)',
        showingAllRestrictions: 'Mostrando recetas con todas las restricciones seleccionadas',
        showingAnyRestriction: 'Mostrando recetas con cualquier restricción seleccionada',
        matchAllOccasions: 'Coincidir con todas las ocasiones (Y)',
        matchAnyOccasion: 'Coincidir con cualquier ocasión (O)',
        showingAllOccasions: 'Mostrando recetas para todas las ocasiones seleccionadas',
        showingAnyOccasion: 'Mostrando recetas para cualquier ocasión seleccionada'
    },
    tableFiltered: {
        title: 'Resultados Filtrados',
        description: 'Recetas que coinciden con tus criterios de filtro avanzados',
        headers: {
            recipeName: 'Nombre de la Receta',
            views: 'Vistas',
            rating: 'Calificación',
            actions: 'Acciones'
        },
        viewsLabel: 'Vistas',
        viewButton: 'Ver',
        outOf5: '/5',
        noResults: 'No se encontraron recetas que coincidan con tus criterios',
        tryAdjusting: 'Intenta ajustar tus filtros o seleccionar diferentes opciones',
        resetFilters: 'Restablecer Filtros'
    },
    themeSettings: {
        title: 'Preferencias de Diseño',
        subtitle: 'Personaliza y previsualiza en tiempo real',
        theming: 'Tema',
        styleMode: 'Estilo (Modo)',
        language: 'Idioma',
        chooseLanguage: 'Elegir Idioma',
        cancel: 'Cancelar',
        applyChanges: 'Aplicar Cambios',
        changesSaved: '¡Cambios guardados correctamente!',
        errorSaving: 'Error al guardar preferencias',
        settingsReset: 'Configuración restablecida a valores guardados',
        sessionNote: 'Los cambios se aplicarán a tu sesión actual',
        modes: {
            light: 'Claro',
            dark: 'Oscuro',
            auto: 'Auto'
        },
        languages: {
            english: 'Inglés',
            portuguese: 'Portugués',
            spanish: 'Español'
        }
    },
    preferences: {
        title: 'Tus Preferencias',
        subtitle: 'Personaliza tus recomendaciones de recetas y ajustes visuales',
        save: 'Guardar Preferencias',
        saved: '¡Guardado!',
        backToHome: 'Volver al Inicio',
        tabs: {
            recipePreferences: 'Preferencias de Recetas',
            visualSettings: 'Ajustes Visuales'
        },
        dietPreferences: {
            title: 'Preferencias de Dieta',
            subtitle: 'Selecciona preferencias dietéticas para personalizar tus sugerencias de recetas'
        },
        cuisinePreferences: {
            title: 'Preferencias de Cocina',
            subtitle: 'Selecciona las cocinas que disfrutas para mejores recomendaciones de recetas'
        },
        mealPreferences: {
            title: 'Preferencias de Tipo de Comida',
            subtitle: '¿Qué tipos de comidas te interesan más?'
        },
        cookingPreferences: {
            title: 'Preferencias de Cocina',
            subtitle: '¿Cómo prefieres que se preparen tus comidas?'
        },
        colorSettings: {
            title: 'Ajustes de Color',
            subtitle: 'Personaliza el esquema de colores para diferentes etiquetas de preferencia',
            reset: 'Restablecer',
            color: 'Color',
            preview: 'Vista previa'
        },
        summary: {
            title: 'Resumen de Tus Preferencias',
            diet: 'Preferencias de Dieta:',
            cuisine: 'Preferencias de Cocina:',
            mealType: 'Preferencias de Tipo de Comida:',
            cooking: 'Preferencias de Cocina:',
            noneSelected: 'Ninguna seleccionada'
        }
    },
    search: {
        placeholder: 'Buscar recetas...',
        cancel: 'Cancelar'
    },
    myList: {
        search: 'Buscar en',
        filter: 'Filtrar',
        export: 'Exportar',
        import: 'Importar',
        prepareButton: 'Preparar',
        showing: 'Mostrando',
        of: 'de',
        recipes: 'recetas',
        bookmarks: 'Tus Favoritos',
        bookmarked: 'Guardado',  
        tabs: {
            list: 'Lista',
            myRecipes: 'Mis Recetas',
            collections: 'Colecciones',
            bookmarked: 'Guardadas',
            commented: 'Comentadas'
        },
        mylistHeaders: [
            "Nombre de Receta",
            "Categoría",
            "Dificultad",
            "Tiempo de Cocción",
            "Calificación",
            "Último Uso",
            "Fecha Añadida",
            "Acciones"
        ],
        comments: {
            recentTitle: 'Comentarios Recientes',
            myComments: 'Mis Comentarios',
            likedComments: 'Comentarios que me Gustaron',
            myCommentsDescription: 'Comentarios que publicaste en recetas',
            likedCommentsDescription: 'Comentarios de otros que te gustaron',
            profile: 'perfil',
            like: 'Me gusta',
            reply: 'Responder',
            delete: 'Eliminar',
            loadMore: 'Cargar Más Comentarios'
        }
    },
    profile: {
        bannerAlt: "Banner de perfil",
        avatarAlt: "Foto de perfil",
        recipeCount: "{count} recetas",
        buttons: {
            editProfile: "Editar Perfil",
            settings: "Configuración",
            follow: "Seguir",
            message: "Mensaje"
        },
        tabs: {
            about: "Sobre",
            recipes: "Recetas",
            followers: "Seguidores",
            following: "Siguiendo"
        },
        gallery: {
            title: "Galería de Recetas",
            imageAlt: "Imagen de receta",
            viewAll: "Ver Todas las Fotos"
        },
        aboutSection: {
            title: "Sobre {name}",
            bio: "Cocinero apasionado con amor por experimentar con sabores de todo el mundo. Creo que cocinar es una expresión creativa que une a las personas. Mi especialidad es tomar recetas tradicionales y darles un giro moderno.",
            location: "Ubicación",
            joined: "Se unió",
            favoriteCuisine: "Cocina Favorita",
            achievements: "Logros"
        },
        achievements: {
            topChef: "Chef Principal",
            recipeCreator: "Creador de Recetas",
            trendsetter: "Innovador"
        },
        emptyStates: {
            recipes: "Las recetas del usuario se mostrarán aquí",
            followers: "Los seguidores del usuario se mostrarán aquí",
            following: "Las cuentas que sigue este usuario se mostrarán aquí"
        }
    },
    recipeInfo: {
        stats: {
            prep: "Preparación",
            cook: "Cocción",
            serves: "Porciones",
            difficulty: "Dificultad"
        },
        sections: {
            ingredients: "Ingredientes",
            instructions: "Instrucciones Paso a Paso",
            tips: "Consejos de Mamá",
            allSteps: "Todos los Pasos",
            viewAll: "Ver Todo"
        },
        navigation: {
            previous: "Anterior",
            next: "Siguiente",
            step: "Paso {current} de {total}"
        },
        actions: {
            save: "Guardar Receta",
            print: "Imprimir",
            share: "Compartir"
        },
        videoPlaceholder: {
            comingSoon: "Video próximamente"
        }
    }
}

export default translations;
