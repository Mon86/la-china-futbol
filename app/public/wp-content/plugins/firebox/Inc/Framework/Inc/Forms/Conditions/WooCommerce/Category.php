<?php

defined('ABSPATH') or die;

return [
	[
		'name' => 'operator',
		'type' => 'Comparator'
	],
	[
		'type' => 'SearchDropdown',
		'name' => 'value',
		'path' => '\FPFramework\Helpers\WooCommerceCategoryHelper',
		'placeholder' => 'FPF_SELECT_WOOCOMMERCE_CATEGORIES',
		'label' => 'FPF_CATEGORY',
		'control_inner_class' => [],
		'items' => fpframework()->helper->woocommercecategory->getItems(),
		'lazyload' => true
	],
	[
		'name' => 'params.inc_children',
		'type' => 'Toggle',
		'label' => 'FPF_MENU_INCLUDE_CHILD',
		'default' => 0,
		'choices' => [
			0 => 'FPF_NO',
			1 => 'FPF_YES',
			2 => 'FPF_ONLY'
		]
	]
];