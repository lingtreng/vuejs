const app = Vue.createApp({
    data(){
        return{
            url:"https://www.coolmate.me/product/ao-so-mi-nam-dai-tay-nano-tech-easycare-mau-trang?utm_medium=cpc&utm_source=ggads&utm_campaign=sominam_search&utm_content=somidaitaynano&utm_term=aosominam&gclid=Cj0KCQjwgYSTBhDKARIsAB8Kuku-EbS3I4tQrX4FNScdr2O0EbQKpgL0uzYo4BQHOe-Kmd2HjqhIYLAaAroiEALw_wcB",
            target:"_blank",
            message:"Sản phẩm tốt nhất thị trường  ",
            image:"images/image1.jpg",
            title:"Áo si đa rẻ nhất thế giới",
            brand:"No brand",
            price:20000,
            discount:0.5,
            selectedProduct:0,
            cartNumber:0,
            listProductDetail:[
                {
                    image:"images/image1.jpg",
                    quantity:2,
                    textColor:"Màu đỏ"
                },
                {
                    image:"images/image2.jpg",
                    quantity:8,
                    textColor:"Màu đen"
                },
                {
                    image:"images/image3.jpg",
                    quantity:0,
                    textColor:"Màu trắng"
                },
            ]
        }
    },
    methods: {
        handleClickeColor(e,index){
           this.selectedProduct = index;
        },
        classActive(index){
            return{
                active: this.selectedProduct === index
            }
        },
        handleAddToCart(e){
           if(this.cartNumber+1 > this.getProduct.quantity){
               alert("het hang roi mua it thoi")
           }else{
               this.cartNumber +=1;
           }
        }
    },
    computed:{
        formatPrice(){
            var number = this.price;
            console.log(number)
            return new Intl.NumberFormat('de-DE',{style:'currency',currency:'VND'}).format(number);
        },
        formatPriceDiscount(){
          var number = this.price - this.discount * this.price;
          return new Intl.NumberFormat('de-DE',{style:'currency',currency:'VND'}).format(number);
        },
        formatDiscountPersent(){
            var number = this.discount * 100
            return "-" + number + "% "
        },
        getProduct(){
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
      
    }
}).mount("#app")