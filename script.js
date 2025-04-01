document.addEventListener('DOMContentLoaded', () => {
   
    const elements = {
        colorInput: document.getElementById('color'),
        applyColor: document.getElementById('applyColor'),
        resetColor: document.getElementById('resetColor'),
        sneaker: document.getElementById('sneaker'),
        darkModeToggle: document.getElementById('darkModeToggle'),
        shopNow: document.getElementById('shopNow'),
        searchInput: document.getElementById('searchInput'),
        products: document.querySelectorAll('.product'),
        body: document.body,
        navbar: document.querySelector('.navbar'),
        header: document.querySelector('.header'),
        container: document.querySelector('.container'),
        productList: document.querySelector('.product-list'),
        searchContainer: document.querySelector('.search-container')
    };

    
    elements.applyColor.addEventListener('click', () => {
        const colorEffects = [
            'saturate(10) brightness(0.9) hue-rotate(50deg)',  
            'saturate(10) brightness(0.9) hue-rotate(350deg)', 
            'saturate(10) brightness(0.9) hue-rotate(180deg)', 
            'saturate(10) brightness(0.9) hue-rotate(90deg)'   
        ];

      
        const randomEffect = colorEffects[Math.floor(Math.random() * colorEffects.length)];

       
        elements.sneaker.style.filter = randomEffect;
    });

   
    elements.resetColor.addEventListener('click', () => {
        elements.sneaker.style.filter = 'none';
        elements.colorInput.value = '#ff6f61';
    });

    
    elements.shopNow.addEventListener('click', () => {
        alert('Je wordt doorgestuurd naar de winkel!');
    });

    
    elements.darkModeToggle.addEventListener('click', () => {
        
        elements.body.classList.toggle('dark-mode');
        elements.navbar.classList.toggle('dark-mode');
        elements.header.classList.toggle('dark-mode');
        elements.container.classList.toggle('dark-mode');
        elements.productList.classList.toggle('dark-mode');
        elements.searchContainer.classList.toggle('dark-mode');
        
       
        elements.products.forEach(product => {
            product.classList.toggle('dark-mode');
        });
        
     
        elements.darkModeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            elements.darkModeToggle.textContent = elements.body.classList.contains('dark-mode') 
                ? '☀️ Light Mode' 
                : '🌙 Dark Mode';
            elements.darkModeToggle.style.transform = 'scale(1)';
        }, 150);
    });

    
    elements.searchInput.addEventListener('input', () => {
        const query = elements.searchInput.value.toLowerCase().trim();
        
        elements.products.forEach(product => {
            const productName = product.querySelector('p').textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
                setTimeout(() => {
                    product.style.opacity = '1';
                    product.style.transform = 'translateY(0)';
                }, 50);
            } else {
                product.style.opacity = '0';
                product.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    product.style.display = 'none';
                }, 300);
            }
        });
    });

  
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div class='loader-spinner'></div>
        <div class='loader-text'>Atlas' Sneaker World</div>
    `;
    document.body.prepend(loader);
    
    document.body.prepend(loader);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1200);
    });

   
    elements.products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            product.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        product.addEventListener('mouseleave', () => {
            product.querySelector('img').style.transform = 'scale(1)';
        });
    });
});