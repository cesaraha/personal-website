<script>
	import ButtonsSelect from "../components/ButtonsSelect.svelte";
	import LangSelection from "../components/LangSelection.svelte";
	import { currentLanguage } from '../stores/language.js';
    import { getTranslation } from '../lib/translations.js';

	$: t = getTranslation($currentLanguage).welcome;
</script>

<svelte:head>
    <title>{t.title}</title>
</svelte:head>

<LangSelection />
<ButtonsSelect />