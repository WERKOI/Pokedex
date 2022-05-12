<script context="module">
    export async function load(page) {
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
    return{props: { pokemon:loadedPokemon}}
    }
</script>
<script>
    // Импортируем  покемонов
    import PokemanCard from "../components/pokemanCard.svelte";

    export let pokemon;

    // Поиск покемонов
    let searchTerm = "";
    let filteredPokemon = [];
    
    // Вывод покемонов в консоль
    $: {
        if(searchTerm) {
            filteredPokemon = pokemon.filter(pokeman => pokeman.
            name.toLowerCase().includes(searchTerm.toLowerCase()));
        }else{
            filteredPokemon = [ ... pokemon]
        }
    }
</script>

<!-- Шапка страницы -->
<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>

<!-- Заголовок -->
<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<!-- Поисковик покемонов -->
<input class="w-full rounded-md text-lg p-4 border-2 
border-gray-200" type="text" bind:value={searchTerm} 
placeholder="Search Pokemon">

<!-- Обращаемся к списку с покемонами -->
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
{#each filteredPokemon as pokeman}
    <PokemanCard pokeman={pokeman}/>
{/each}
</div>