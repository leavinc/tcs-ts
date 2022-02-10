// 记分牌
class ScorePanel{
    // 记录分数和等级
    score = 0;
    level = 1;

    // 分数和等级所在的函数，在构造函数中初始化
    ScoreEle:HTMLElement;
    LevelEle:HTMLElement;

    // 设置一个变量限制等级
    maxLevel:number;
    upScore:number;

    constructor(maxLevel:number = 10,upScore:number = 10){
        this.ScoreEle = document.getElementById('score')!;
        this.LevelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 设置加分的方法
    addScore(){
        // 使分数自增
        this.score++;
        this.ScoreEle.innerHTML = this.score+'';
        // 判断分数
        if(this.score % this.upScore === 0 ){
            this.levelUp();
        }
    }
    // 分数清零
    clcScore(){
        this.ScoreEle.innerHTML = 0+'';
    }

    // 设置升级的方法
    levelUp(){
        if(this.level<this.maxLevel){
            this.LevelEle.innerHTML = ++this.level+'';
        }
    }
    // 等级重置
    clcLevel(){
        this.LevelEle.innerHTML = 1+'';
    }

}

export default ScorePanel;