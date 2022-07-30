const getData = async (API) => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        
        return data;    
    } catch (error) {
        Swal.fire ({
            title: `¡Error!`,
            text: "Ocurrió un error al obtener los datos del servidor",
            icon: "error"}), error
    }
    
};

export default getData