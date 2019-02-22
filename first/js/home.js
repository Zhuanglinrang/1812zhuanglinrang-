
        var mySwiper = new Swiper('.swiper-container', {
            noSwiping: true,
            noSwipingClass: 'stop-swiping',
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 分页器------------------------
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    switch (index) {
                        case 0: text = '壹'; break;
                        case 1: text = '贰'; break;
                        case 2: text = '叁'; break;
                    }
                    return '<span class="' + className + '">' + '</span>';
                }
            },
        })
        //鼠标移出隐藏按钮，移入显示按钮
        mySwiper.el.onmouseover = function () {
            mySwiper.navigation.$nextEl.removeClass('hide');
            mySwiper.navigation.$prevEl.removeClass('hide');
        }
        mySwiper.el.onmouseout = function () {
            mySwiper.navigation.$nextEl.addClass('hide');
            mySwiper.navigation.$prevEl.addClass('hide');
        }
