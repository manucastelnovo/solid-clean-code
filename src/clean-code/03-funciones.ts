(() => {
    interface Movie{
        title: string, 
        description: string, 
        rating: number, 
        cast: string[]
    }

    // función para obtener información de una película por Id
    function getMovieInformationById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getActorsInformationByMovieId( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }
    
    // Crear una película
    function createMovie(movie:Movie ) {
        console.log(movie);
    }

    function verifyIfActorExist(fullName:string) {
        if ( fullName === 'fernando' ) return false;
    }
    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        verifyIfActorExist(fullName)
        

        console.log('Crear actor',birthdate);
        return true;        

    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
        
        
            if(isDead) return  1500;
       
            if (isSeparated ) return 2500;
            
            return isRetired  ? 3000 : 4000
                    
            
        
        
    }


    


})();