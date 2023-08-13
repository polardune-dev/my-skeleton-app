<script lang="ts">
	import { Table } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';
	import { Paginator } from '@skeletonlabs/skeleton';

	// Sample stuff
	const sourceData = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
	];

	// PaginatorSettings
	$: page = {
		offset: 0,
		limit: 3,
		size: sourceData.length,
		amounts: [3,5,10],
	};

	let tableHeaders = ['Name', 'Symbol', 'Weight'];
	$: pageSourceData = tableMapperValues(
			sourceData.slice (
			page.offset * page.limit,
			page.offset * page.limit + page.limit
		), ['name', 'symbol', 'weight']
	);
	$: meta = tableMapperValues(pageSourceData, ['position', 'name', 'symbol', 'weight']);

	$: tableSimple = {
		head: tableHeaders,
		body: pageSourceData,
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: meta
	};
</script>

<div class="container pl-5 pt-5">
	<div class="space-y-5">
		<h1 class="h1">Things</h1>
		<Table source={tableSimple} />
		<Paginator amountText="things" bind:settings={page}></Paginator>
	</div>
</div>
