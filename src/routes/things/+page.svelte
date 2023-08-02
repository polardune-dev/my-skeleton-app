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

	let pageSourceData = sourceData;

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Symbol', 'Weight'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(pageSourceData, ['name', 'symbol', 'weight']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(pageSourceData, ['position', 'name', 'symbol', 'weight']),
		// Optional: A list of footer labels.
		foot: ['Total', '', '<code class="code">5</code>']
	};

	// PaginatorSettings
	let page = {
		offset: 0,
		limit: 2,
		size: sourceData.length,
		amounts: [1,2,5,10],
	};

	if (page.limit < page.size) {
		//pageSourceData = 
	}

	function onPageChange(e: CustomEvent): void {
		console.log('event:page', e.detail);
		console.log('event:page offset=%d limit=%d', page.offset, page.limit );
	}

	function onAmountChange(e: CustomEvent): void {
		console.log('event:amount', e.detail);
		console.log('event:page offset=%d limit=%d', page.offset, page.limit );
	}
</script>

<div class="container">
	<div class="space-y-5 space-x-5">
		<h1 class="h1">Things</h1>
		<Table source={tableSimple} />
		<Paginator amountText="things" bind:settings={page} on:page={onPageChange} on:amount={onAmountChange}></Paginator>
	</div>
</div>
