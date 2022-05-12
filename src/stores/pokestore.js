// Импортируем writable из svelte
import { writable } from "svelte/store";

export const pokemon = writable([]);

// Функция извлечения покемонов
const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    // Ответ по запросу от веб адреса
    const res = await fetch(url);
    // Получаем данные
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
            }.png`
        };
    });
    pokemon.set(loadedPokemon);
};
// Вызываем fetchPokemon
fetchPokemon();

