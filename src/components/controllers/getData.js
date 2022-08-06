// Creo una función para obtener datos desde un servidor/archivo JSON y procesa los datos cuando los recibe y muestra un modal con un error en caso de que haya un error de comunicación

const getData = async (API) => {
    try {
        const response = await fetch(API);
        const data = await response.json();        
        return data;    

    } catch (error) {
        Swal.fire ({
            title: `¡Error!`,
            text: "Ocurrió un error al obtener los datos del servidor",
            icon: "error",
            showClass: {
                popup: "animate__animated animate__tada",
              }
        }), error
    };
};

export default getData