<!-- Берем id покемона и возвращаем его страницу -->
<script context="module">
    export async function load(page) {
        const id = page.params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokeman = await res.json();
        return {props: {pokeman}};
    }
</script>

<!-- Возвращается тип покемона -->
<script>
    export let pokeman;
    const type = pokeman.types[0].type.name
</script>

<!-- Контейнер, где находится заголовок, изображение и характристики покемона -->
<div class="flex flex-col items-center">

<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
<p>Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
    | Weight: <strong>{pokeman.weight}</strong>
</p>
<img class="card-image" src={pokeman.sprites['front_default']} 
alt={pokeman.name}/>
</div>