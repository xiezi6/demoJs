window.addEventListener('load', function () {

    //1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;

    //2.鼠标经过focus时，左右按钮显示;离开时，左右按钮隐藏；
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })

    //3.ul中有几个li图片，ol中就有几个li;并且点击小圆圈时
    var ul_focus = focus.querySelector('ul');
    var ol_focus = focus.querySelector('ol');
    //获取ul中li的个数，用for循环来添加ol中的li
    for (var i = 0; i < ul_focus.children.length; i++) {
        var li = document.createElement('li');
        ol_focus.appendChild(li);
        //创建自定义属性，做索引
        li.setAttribute('index', i);
        //给每个li绑定事件
        li.addEventListener('click', function () {
            //用for循环把其他的类名都清空
            for (var i = 0; i < ol_focus.children.length; i++) {
                ol_focus.children[i].className = '';
            }
            //把被点击的li类名改为current;
            this.className = 'current';

            //4.小圆圈被点击时执行事件：图片位置变换
            //图片的位置等于：ol中li的索引值 乘以 图片的宽，创造li时给li设置自定义属性，当成索引值。
            var index = this.getAttribute('index');
            ulX = index * focusWidth;
            animate(ul_focus, -ulX);
            num = index;
            circle = index;
        })
    }
    //第一个默认current类
    ol_focus.children[0].className = 'current';

    //4.点击按钮时，图片跟随滚动
    //给ul中新增一个li，克隆第一个li
    var li_first = ul_focus.children[0].cloneNode(true);
    ul_focus.appendChild(li_first);
    //设置变量num，作为索引值,默认从第一个图片开始
    var num = 0;
    //设置变量circle，给小圆圈作参考值,默认第一个
    var circle = 0;
    arrow_r.addEventListener('click', function () {

        if (num == ul_focus.children.length - 1) {
            ul_focus.style.left = 0;
            num = 0;
        }
        //右按钮被点击时，num++;
        num++;
        //ul的位置跟随做动画变动
        animate(ul_focus, -num * focusWidth)

        //5.绑定执行事件：小圆圈类名跟随点击时变化
        //当小圆圈最后一个被选中时，按钮再点击白色小圆圈应该回到第一个
        if (circle == ol_focus.children.length - 1) {
            circle = -1;
        }
        //每点击一次circle加1
        circle++;
        //排它
        for (var i = 0; i < ol_focus.children.length; i++) {
            ol_focus.children[i].className = '';
        }
        ol_focus.children[circle].className = 'current';
    })

    arrow_l.addEventListener('click', function () {
        console.log(num);

        if (num == 0) {
            ul_focus.style.left = -(ul_focus.children.length - 1) * focusWidth + 'px';
            num = ul_focus.children.length - 1;
        }
        num--;
        animate(ul_focus, -num * focusWidth);

        //5.绑定执行事件：小圆圈类名跟随点击时变化
        //当小圆圈第一个被选中时，按钮再点击白色小圆圈应该回到最后一个
        if (circle == 0) {
            circle = ol_focus.children.length;
        }
        //每点击一次circle加1
        circle--;
        //排它，改变类名
        for (var i = 0; i < ol_focus.children.length; i++) {
            ol_focus.children[i].className = '';
        }
        ol_focus.children[circle].className = 'current';
    })
})