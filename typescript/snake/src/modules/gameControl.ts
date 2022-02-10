// 引入其他类
import Food from "./food";
import Snake from "./snake";
import ScorePanel from "./scorePanel";

// 控制器，控制其他所有类
class GameControl{
    // 定义三个属性
    snake:Snake;
    food:Food;
    scorepanel:ScorePanel;


    // 创建一个属性来存储蛇的移动方向（按键的方向）
    direction:string = '';

    // 创建一个属性记录游戏是否结束
    isLive = true;


    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorepanel = new ScorePanel();
        this.init();
    }

    // 游戏初始化
    init(){
        // 绑定键盘开始事件
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
        this.run();
    }

    // 键盘按下的响应函数
    keyDownHandler(event:KeyboardEvent){
        //检查event.key的值是否合法（用户是否按了正确的按键） 

        // 修改direction的值
        this.direction = event.key;
        

    }

    // 移动
    run(){
        // 根据方向this.direction改变位置


        // 获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch(this.direction){
            case "ArrowUp": Y= Y-10;
            break;
            case "ArrowDown": Y+=10;
            break;
            case "ArrowLeft": X-=10;
            break;
            case "ArrowRight": X+=10
            break;
        }

        // 是否吃到食物
        this.eatFood(X,Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error:any) {
            alert(error.message);
            // 游戏结束
            this.isLive = false;
            // 分数清零
            this.scorepanel.clcScore();
            // 等级重置
            this.scorepanel.clcLevel();

        }

        
        this.isLive && setTimeout(this.run.bind(this),300-((this.scorepanel.level-1)*100));
    }

    // 吃食物
    eatFood(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            // 食物位置改变
            this.food.change();
            // 分数增加
            this.scorepanel.addScore();
            // 增长
            this.snake.addBody();
            return true;
        }
    }
}

export default GameControl;