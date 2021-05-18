export default {
    data: {
        title: "Choose Food",
        subTitle: "sub-title",
        cartStyle: 'cartTitle',
        cartText: "xxxxx",
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

    onInit(){

    },

    onShow() {
        this.canvasList.forEach(element => {
            this.drawCycle(element.id, element.color);
        });
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
    swipeToIndex(index) {
        this.$element("swiperImage").swipeTo({index: index});
    },

    switchStyle() {
        this.isCartEmpty = !this.isCartEmpty;
        console.info("this.isCartEmpty:"+this.isCartEmpty)
        if (this.isCartEmpty) {
            this.cartStyle = 'cartTitle';
            this.cartText =  "xxxxx";
        } else {
            this.cartStyle = 'cartTitle2'
            this.cartText =  "aaaaaaaaaaa";
        }
    }
}