<script lang="ts">
	import { goto } from '$app/navigation';
	import { Table } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';
	import { Paginator } from '@skeletonlabs/skeleton';

	export let data;

	// Sample stuff
	const sourceData = data.products;

	// PaginatorSettings
	$: page = {
		offset: data.skip / data.limit,
		limit: data.limit,
		size: data.total,
		amounts: [3,5,10, 30],
	};
	$: if (!page.amounts.includes(page.limit) ) {
		page.amounts.unshift (page.limit)
	};

	let tableHeaders = ['Name', 'Brand', 'Price'];
	$: pageSourceData = tableMapperValues(
			data.products, ['title', 'brand', 'price']
	);
	$: meta = tableMapperValues(pageSourceData, ['id', 'title', 'brand', 'price']);

	$: tableSimple = {
		head: tableHeaders,
		body: pageSourceData,
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: meta
	};


	function onPageChange(e: CustomEvent): void {
		// console.log('event:page', e.detail);
		goto ('?page='+e.detail+'&limit='+page.limit);
	}

	function onAmountChange(e: CustomEvent): void {
		// console.log('event:amount', e.detail);
		goto ('?page='+page.offset+'&limit='+e.detail);
	}

</script>

<div class="container pl-5 pt-5">
	<div class="space-y-5">
		<h1 class="h1 text-primary-500 ">Things</h1>
		<Paginator amountText="things" showNumerals bind:settings={page} on:page={onPageChange} on:amount={onAmountChange}></Paginator>
		<Table source={tableSimple} />
	</div>
</div>
