export default {
    data: {
        cartText: 'Add To Cart',
        cartStyle: 'cart-text',
        isCartEmpty: true,
        descriptionFirstParagraph: 'This is the food page including fresh fruit, meat, snack and etc. You can pick whatever you like and add it to your Cart. Your order will arrive within 48 hours. We gurantee that our food is organic and healthy. Feel free to ask our 24h online service to explore more about our platform and products.',
        imageList: ['/common/food_000.jpg', '/common/food_001.jpg', '/common/food_002.jpg', '/common/food_003.jpg'],
        canvasList: [{
                         id: 'cycle0',
                         index: 0,
                         color: '#f0b400',
                     }, {
                            id: 'cycle1',
                            index: 1,
                            color: '#e86063',
                        }, {
                               id: 'cycle2',
                               index: 2,
                               color: '#597a43',
                           }, {
                                  id: 'cycle3',
                                  index: 3,
                                  color: '#e97d4c',
                              }],
    },

    /* 这是在哪里调用的,需要些这个函数canvas画圆才能出来 */
    onShow() {
        console.info("开始画了")
        this.canvasList.forEach(element => {
            this.drawCycle(element.id, element.color);
        });
    },


    swipeToIndex(index) {
        console.info("开始画了xxxx");
        let swiperImage = this.$element('swiperImage');
        swiperImage.swipeTo({index: index});
    },


    drawCycle(id, color) {
        var greenCycle = this.$element(id);
        var ctx = greenCycle.getContext("2d");
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(15, 25, 10, 0, 2 * 3.14);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    },


    addCart() {
        if (this.isCartEmpty) {
            this.cartText = 'Cart + 1';
            this.cartStyle = 'add-cart-text';
            this.isCartEmpty = false;
        }
    },


    getFocus() {
        if (this.isCartEmpty) {
            this.cartStyle = 'cart-text-focus';
        }
    },


    lostFocus() {
        if (this.isCartEmpty) {
            this.cartStyle = 'cart-text';
        }
    },
}