import  api  from '../api/axios.ts'
import { Pokemon } from '../interfaces/pokemon.ts'// Ajusta la ruta según tu estructura de carpetas

export const PokemonService = {
  // Obtener todos los pokemons
  getAll: async (): Promise<Pokemon[]> => {
    const response = await api.get<Pokemon[]>('/pokemon') // Ajusta tu ruta si es '/pokemons'
    return response.data;
  },

  // Obtener un pokemon por ID
  getById: async (id: number): Promise<Pokemon> => {
    const response = await api.get<Pokemon>(`/pokemon/${id}`)
    return response.data;
  },

  // Opcional: Crear un pokemon (usando Omit para excluir el id autogenerado)
  create: async (pokemonData: Omit<Pokemon, 'id' | 'tipoPrimario' | 'habilidad'>): Promise<Pokemon> => {
    const response = await api.post<Pokemon>('/pokemon', pokemonData)
    return response.data
  }
};