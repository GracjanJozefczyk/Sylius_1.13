const handleProductOptionsChange = function handleProductOptionsChange() {
  $('[name*="sylius_add_to_cart[cartItem][variant]"]').on('change', () => {
    console.log('executed');
  });
}

const handleProductVariantsChange = function handleProductVariantsChange() {
  $('[name="sylius_add_to_cart[cartItem][variant]"]').on('change', (event) => {
    console.log('executed');
  });
}

$.fn.extend({
  variantPrices() {
    if ($('#sylius-variants-pricing').length > 0) {
      handleProductOptionsChange();
    } else if ($('#sylius-product-variants').length > 0) {
      handleProductVariantsChange();
    }
  },
});
