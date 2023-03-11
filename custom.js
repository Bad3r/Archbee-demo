$(document).ready(function() {

  // Open external links in new tab
  $('a[href^="http"]').attr('target', '_blank');

  // Smooth scrolling for internal links
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 50
        }, 1000);
    }
  });

  // Collapse navbar on click
  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });

  // Toggle mobile menu icon
  $('.navbar-toggler').click(function(){
      $(this).find('i').toggleClass('fa-bars fa-times');
  });

  // Add active class to current link in navbar
  var url = window.location.pathname;
  $('.navbar-nav .nav-item a[href="'+url+'"]').addClass('active');

  // Example testing function
  function testCustomJS() {
    console.log('Custom.js executed successfully.');
  }

  // Call testing function
  testCustomJS();

});

