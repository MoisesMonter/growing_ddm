export const LoadColors = async () => {
    try{
        return await fetch('./colors.json').then(response => response.json());
    } catch(error){
        console.error("erro ao carregar cores",error);
        return{};
    }
}