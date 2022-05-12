<!-- Меню показывается сразу на нескольких страницах без подгрузки -->
<script>
    import Nav from "../components/nav.svelte";
    import "../app.css"
</script>

<div class="p-8 max-w-6xl mx-auto">
    <!-- Вызов навигации -->
    <Nav/>
    <!-- Для создания навигации по всем страницам -->
    <slot></slot>
</div>