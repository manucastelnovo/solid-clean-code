(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, toDeleted: false },
        { id: 2, toDeleted: false },
        { id: 3, toDeleted: true },
        { id: 4, toDeleted: false },
        { id: 5, toDeleted: false },
        { id: 7, toDeleted: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filestoDelete = filesToEvaluate.map( files => files.toDeleted );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const currentDay = new Date();
    
    // días transcurridos - elapsed time in days
    const daysPassed: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const filesIncurrentDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassPerStudent = 6;


})();
