const shipbuildingResources = [
    { title: 'History of Shipbuilding in Bangladesh', url: 'https://www.sciencedirect.com/science/article/pii/S1877705817332897/pdf?crasolve=1&r=86c2527d891827e2&ts=1711741127321&rtype=https&vrr=UKN&redir=UKN&redir_fr=UKN&redir_arc=UKN&vhash=UKN&host=d3d3LnNjaWVuY2VkaXJlY3QuY29t&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&re=X2JsYW5rXw%3D%3D&ns_h=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ns_e=X2JsYW5rXw%3D%3D&rh_fd=rrr)n%5Ed%60i%5E%60_dm%60%5Eo)%5Ejh&tsoh_fd=rrr)n%5Ed%60i%5E%60_dm%60%5Eo)%5Ejh&iv=09df434167afde798156015d521120fc&token=63343663616162626162653134386639356638373163636331663931346565633738613063396362363736636234306233663531396463646664353633333961653532343030343763323161636361316365366437346363326334616362333739373431363635393663623839636132336533333966346231646535396430643a356433326363636532386130366136326361666661346230&text=b7cc9cec8a870231fea4d56d80fc39407c4cce3baf28aeec4456d2ce40809e4742467c87e1993bbe3998d7d1ddcfb5ea47f85a5b8579b4f4182d2aa998987f4f8af52ca37632d45c8b8c2db9046016144a5760f00540202a3844e976f47727cc75ddd5a3cf2145050ca5ee8e8e4600d008b1b18f3f650216a50ad1687eb73886daa7173c884d118a9407276ef8c250fd2cd8ab5e90597b90d74a81d619716717bc4e98b4784e680dd1bffb6d60593f0b279dfff3a52294b7da2b08bd45067b29f5d2fe99f2e23d161451d9599573bab3168a8c55259d5967a00a1067d61d002132022125934507f207c29869db25e9017534b506676830d4eb55c3ab9b809ed3245f8af380084daeecdfd92c28a358aa39afeca43792bff89c1f6d87c97c027c0b0da3382c57ce25f7c7c1d9981e2781&original=3f6d64353d3638643064353163653939343862393036636465376336303762656637313165267069643d312d73322e302d53313837373730353831373333323839372d6d61696e2e706466' },
    { title: 'Shipbuilding Companies in Bangladesh', url: 'https://www.trusteddocks.com/catalog/country/21-bangladesh' },
    { title: 'Future Trends in Shipbuilding', url: 'https://elibrary.worldbank.org/doi/10.1596/978-1-4648-0924-8_ch1#:~:text=A%20moderate%2C%20realistic%20future%20scenario,the%20best%20opportunity%20for%20growth.' },
    { title: 'Challenges Faced by Shipbuilding Industry', url: 'https://thefinancialexpress.com.bd/views/shipbuilding-in-bangladesh-opportunities-challenges-1647444297' }
];

// Function to populate the resource list
function populateResourceList() {
    const resourceList = document.getElementById('resourceList');
    shipbuildingResources.forEach(resource => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = resource.title;
        a.href = resource.url;
        a.target = '_blank'; // Open link in a new tab
        li.appendChild(a);
        resourceList.appendChild(li);
    });
}

// Call the function to populate the resource list
populateResourceList();

document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let index = 0;

    prevBtn.addEventListener('click', function () {
        index = index > 0 ? index - 1 : carouselContainer.children.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', function () {
        index = index < carouselContainer.children.length - 1 ? index + 1 : 0;
        updateCarousel();
    });

    function updateCarousel() {
        const itemWidth = carouselContainer.children[0].offsetWidth;
        carouselContainer.style.transform = `translateX(${-index * itemWidth}px)`;
    }
});

