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
        mainFilters: ["All", "Más recientes", "Popular", "Mejor valorados", "De temporada", "Aleatorio"],
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
            actions: 'Acciones',
            date: 'Fecha'
        },
        searchRecipes: 'Buscar recetas...',  // Add this line
        viewsLabel: 'Vistas',
        viewButton: 'Ver',
        outOf5: '/5',
        noResults: 'No se encontraron recetas que coincidan con tus criterios',
        tryAdjusting: 'Intenta ajustar tus filtros o seleccionar diferentes opciones',
        resetFilters: 'Restablecer Filtros',
        dateFilter: {
            title: 'Seleccionar Rango de Fechas',
            start: 'Fecha de Inicio',
            end: 'Fecha de Fin',
            apply: 'Aplicar',
            cancel: 'Cancelar',
            last7Days: 'Últimos 7 Días',
            lastMonth: 'Último Mes',
            last6Month: 'Últimos 6 Meses',
            lastYear: 'Último Año',
            allTime: 'Todo el Período'
        },
        dateAdded: 'Fecha Añadida'
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
        created: 'Creado',
        noMyRecipes: 'Aún no has creado recetas',
        createRecipeDescription: 'Comparte tus creaciones culinarias con la comunidad',
        createRecipe: 'Crear Receta',
        myRecipes: 'Mis Recetas',
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
            likedComments: 'Comentarios que Me Gustan',
            myCommentsDescription: 'Comentarios que publicaste en recetas',
            likedCommentsDescription: 'Comentarios de otros que te gustaron',
            profile: 'perfil',
            like: 'Me gusta',
            reply: 'Responder',
            delete: 'Eliminar',
            loadMore: 'Cargar Más Comentarios',
            unliked: "Me gusta eliminado con éxito",
            unlikeError: "Error al eliminar me gusta",
            unlike: "No me gusta",
            deleted: "Comentario eliminado con éxito",
            deleteError: "Error al eliminar comentario",
            notFound: "Comentario no encontrado"
        },
        prepareList: 'Lista de Preparación',
        added: 'Añadido',
        lastMade: 'Última vez preparado',
        noRecipes: 'No se encontraron recetas en la lista de preparación',
        errorFetchingRecipes: 'Error al cargar la lista de preparación. Por favor, intenta más tarde',
        errorFetchingMyRecipes: 'Error al cargar tus recetas. Por favor, intenta más tarde',
        noCollections: 'No se encontraron colecciones',
        errorFetchingCollections: 'Error al cargar colecciones. Por favor, intenta más tarde',
        noBookmarks: 'No se encontraron favoritos',
        errorFetchingBookmarks: 'Error al cargar favoritos. Por favor, intenta más tarde',
        prepareListDescription: 'Añade recetas a tu lista de preparación para hacer seguimiento de lo que quieres cocinar',
        browseRecipes: 'Explorar Recetas',
        collection: 'Colección',
        collections: 'Colecciones',
        recipe: 'Receta',
        createNewCollection: 'Crear Nueva Colección',
        organizeYourFavoriteRecipes: 'Organiza tus recetas favoritas en colecciones temáticas',
        createCollection: 'Crear Colección',
        collectionDeleted: 'Colección eliminada con éxito',
        errorDeletingCollection: 'Error al eliminar la colección',
        noMatchingBookmarks: "Ningún favorito coincide con tu búsqueda",
        tryAnotherSearch: "Prueba con un término de búsqueda diferente o borra la búsqueda",
        clearSearch: "Borrar búsqueda",
        noMatchingRecipes: "Ninguna receta coincide con tu búsqueda",
        noMatchingPrepareRecipes: "Ninguna receta en tu lista de preparación coincide con tu búsqueda",
        recipeDeleted: "Receta eliminada con éxito",
        errorDeletingRecipe: "Error al eliminar la receta. Por favor, inténtalo de nuevo más tarde.",
        recipeRemoved: "Receta eliminada de la lista de preparación",
        errorRemovingRecipe: "Error al eliminar la receta de la lista",
        bookmarkRemoved: "Favorito eliminado con éxito",
        errorRemovingBookmark: "Error al eliminar el favorito",
        bookmarksDescription: "Guarda tus recetas favoritas aquí para acceder rápidamente más tarde",
        findRecipes: "Buscar Recetas",
        noMatchingCollections: "Ninguna colección coincide con tu búsqueda",
        collectionCreated: "Colección creada con éxito",
        errorCreatingCollection: "Error al crear la colección",
        collectionName: "Nombre de la Colección",
        collectionNamePlaceholder: "Ej., Favoritos Italianos, Cenas Rápidas",
        collectionNameHelp: "Dale a tu colección un nombre descriptivo",
        create: "Crear",
        noComments: "Aún no has comentado en ninguna receta",
        noLikedComments: "Aún no has dado me gusta a ningún comentario",
        commentsDescription: "Comparte tus pensamientos sobre las recetas dejando comentarios",
        likedCommentsDescription: "Dale me gusta a los comentarios de otros usuarios para guardarlos aquí",
        exploreComments: "Explorar Comentarios",
        noMatchingComments: "Ningún comentario coincide con tu búsqueda",
        noMatchingLikedComments: "Ningún comentario que te gusta coincide con tu búsqueda",
        noCommentsFound: "No se encontraron recetas comentadas",
        errorFetchingComments: "Error al cargar comentarios. Por favor, inténtalo más tarde",
        noLikedCommentsFound: "No se encontraron comentarios con me gusta",
        errorFetchingLikedComments: "Error al cargar comentarios con me gusta. Por favor, inténtalo más tarde",
        addedToPrepareList: "Añadido a la Lista de Preparación",
        recipeAlreadyInPrepareList: "La receta ya está en la lista de preparación",
        errorAddingToPrepareList: "Error al intentar añadir la receta a la Lista de Preparación",
        addedToBookmarks: "Receta añadida a Favoritos",
        recipeAlreadyBookmarked: "La receta ya está en favoritos",
        errorAddingToBookmarks: "Error al intentar añadir la receta a favoritos",
        addToBookmarks: "Añadir a favoritos",
        addToPrepareList: "Añadir a la lista de preparación",
        viewDetails: "Ver detalles de la receta"
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
        error: {
            notFound: "Receta no encontrada",
            fetchingData: "Error al obtener datos de la receta",
            tryAgain: "Intenta buscar una receta diferente o vuelve para explorar todas las recetas",
            noId: "No se proporcionó ID de receta"
        },
        loading: "Cargando receta...",
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
            viewAll: "Ver Todo",
            description: "Descripción"
        },
        navigation: {
            previous: "Anterior",
            next: "Siguiente",
            step: "Paso {current} de {total}"
        },
        actions: {
            save: "Guardar Receta",
            print: "Imprimir",
            share: "Compartir",
            alreadySaved: "Ya Guardado"
        },
        videoPlaceholder: {
            comingSoon: "Video próximamente"
        }
    },
    errors: {
        networkError: 'Error de red. Por favor, verifica tu conexión',
    }
}

export default translations;
