        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            const galleryItems = document.querySelectorAll('.gallery-item');
            const noResults = document.getElementById('noResults');

            // Initialize gallery items animation
            setTimeout(() => {
                galleryItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 100);
                });
            }, 300);

            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    
                    // Update active tab
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Filter gallery items
                    let visibleCount = 0;
                    
                    galleryItems.forEach((item, index) => {
                        const itemCategory = item.getAttribute('data-category');
                        
                        if (category === 'all' || itemCategory === category) {
                            setTimeout(() => {
                                item.style.display = 'block';
                                item.classList.remove('show');
                                setTimeout(() => {
                                    item.classList.add('show');
                                }, 50);
                            }, index * 50);
                            visibleCount++;
                        } else {
                            item.classList.remove('show');
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    });
                    
                    // Show/hide no results message
                    if (visibleCount === 0) {
                        setTimeout(() => {
                            noResults.style.display = 'block';
                        }, 400);
                    } else {
                        noResults.style.display = 'none';
                    }
                });
            });

            // Add smooth scroll behavior
            document.documentElement.style.scrollBehavior = 'smooth';

            // Get the modal
            const modal = document.getElementById("myModal");

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            const modalImg = document.getElementById("img01");

            galleryItems.forEach(item => {
                const img = item.querySelector('img');
                if (img) {
                    img.addEventListener('click', function() {
                        modal.style.display = "flex"; // display as flex to center content
                        modalImg.src = this.src;
                    });
                }
            });

            // Get the <span> element that closes the modal
            const span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal content, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });
