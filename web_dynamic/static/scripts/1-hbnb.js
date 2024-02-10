document.ready(function() {
  const amenities = {}
  $('input[type="checkbox"]').click(function() {
    if (this.checked) {
      amenities[$(this).data('id')] = $(this).data('name')
    } else {
      delete amenities[$(this).data('id')]
    }
    $('.amenities h4').text(Object.values(amenities).join(', '))
  })
})
