
$(document).ready(function() {
    // Filter images based on category
    $('.filter-button').on('click', function() {
        const category = $(this).data('category');
        if (category === 'all') {
            $('.image-container').fadeIn();
        } else {
            $('.image-container').fadeOut(200);
            $(`.image-container img[data-category="${category}"]`).fadeIn();
        }
    });

    $('#gallery').on('click', 'img', function() {
        const imgSrc = $(this).attr('src');
        $('.lightbox-image').attr('src', imgSrc);
        $('#lightbox').fadeIn();
    });

    $('#lightbox, .close-button').on('click', function() {
        $('#lightbox').fadeOut();
    })
})
