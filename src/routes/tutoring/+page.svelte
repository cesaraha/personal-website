<script>
	import InConstruction from "../../components/InConstruction.svelte";
    import { currentLanguage } from '../../stores/language.js';
    import { getTranslation } from '../../lib/translations.js';

	$: t = getTranslation($currentLanguage).construction;
</script>

<InConstruction
    construction_line1 = {t.line1}
    construction_line2 = {t.line2}
/>