let urlBase = "https://website-3h.herokuapp.com/api/v1"
const clss = ['col-md-5 slideanim my-left-1','col-md-5 offset-md-2 slideanim my-left-2','col-md-5 slideanim2 my-left-1 mt-4','col-md-5 offset-md-2 slideanim1 my-left-2 mt-4']
const alts = ['alt1', 'alt2', 'alt3', 'alt4']

  
const renderProduct = (cls, src, alt, productName, productPrice) =>{
    $('.show-san-pham').append(`
        <div class="${cls}">
            <div class="grid">
                <figure class="effect">
                    <img src="${src}" alt="${alt}" class="w-100">
                    <figcaption></figcaption>
                </figure>
            </div>
            <h4>
                <a href="chitietsanpham.html" class="ten">${productName}</a>
            </h4>
            <h5> ${productPrice} <span class="badge vnd">₫</span></h5>
            <h6><a href="chitietsanpham.html" class="xem-them">Xem thêm</a></h6>
        </div> 
    `)

}

const renderProducts = () => {
    $.ajax({
        url: `${urlBase}/products`, 
        success: function(result){
            let data = result.content; 
    
            [...data].slice(0,4).forEach((item, i)=>{ 
    
                let {image:src, name: productName, price: productPrice} = item
                let cls = clss[i]
                let alt = alts[i]
    
                console.log(cls) 
    
                // Vì không có hình ảnh trong API trả về, nên dùng hình ảnh có static
                renderProduct(cls, 'Resources/myImages/slide-11.jpg', alt, productName, productPrice)
            })
    
    }});
}

$(window).ready(() => {
    renderProducts()
})


 