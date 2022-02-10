// 定义食物类                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
class Food {
    // 定义属性表示食物所对应的元素
    element:HTMLElement;

    constructor(){
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    // 获取食物X轴坐标方法
    get X(){
        return this.element.offsetLeft;
    }

    // 获取食物Y轴坐标
    get Y(){
        return this.element.offsetTop;
    }

    // 修改食物位置
    change(){
        // 生成随机位置
        // 食物left最小值是0，最大值是294，
        // 移动一次一格就是10px，食物出现的位置是整十的
        let top =  Math.round(Math.random()*29)*10;
        let left = Math.round(Math.random()*29)*10;

        this.element.style.left = left+'px';
        this.element.style.top = top+'px'


    }
}
export default Food;