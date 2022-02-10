class Snake{
    // 表示蛇的元素
    head:HTMLElement;
    // 蛇的身体
    bodies:HTMLCollection;
    // 
    element:HTMLElement;
 

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies =this.element.getElementsByTagName('div');
        

    }

    // 获取蛇头的坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }

    // 设置蛇头的坐标
    set X(value:number){
        // 如果新值和旧值相同，则不修改
        if(this.X === value){
            return;
        }

        // // 合法范围
        if(value<0 || value>290){
            // 
            throw new Error('垃圾！！！')
        }

        // 不能掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value>this.X){
                value = this.X-10;
            }else if(value < this.X){
                value = this.X+10;
            }
        }
      

        this.moveBody();

        this.head.style.left = value+'px';
        this.checkHeadBody();
    }
    set Y(value:number){

        if(this.Y === value){
            return;
        }

        if(value<0 || value>290){
            // 
            throw new Error('垃圾！！！')
        }

        // 不能掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value ){
            if(value>this.Y){
                value = this.Y-10;
            }else if(value < this.Y){
                value = this.Y+10;
            }
        }
        

        this.moveBody();

        this.head.style.top = value+'px';
    }

    // 蛇增加身体
    addBody(){
        let newDiv = document.createElement("div");
        this.element.insertAdjacentElement('beforeend',newDiv);
    }

    // 身体移动
    moveBody(){
        // 将后方身体设置为前方身体
        console.log(this.bodies);
        // 遍历所有身体
        for(let i = this.bodies.length-1; i>0;i--){
            // 获取前面身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            console.log(X,Y);

            // 将这个值设置到当前身体
            (this.bodies[i] as HTMLElement).style.left = X+'px';
            (this.bodies[i] as HTMLElement).style.top = Y+'px';
        }
    }

    // 自己撞自己
    checkHeadBody(){
        for(let j=1; j<this.bodies.length;j++){
            if(this.X === (this.bodies[j]as HTMLElement).offsetLeft){
                if(this.Y === (this.bodies[j] as HTMLElement).offsetTop){
                    throw new Error('自己吃自己');
                }
            }
        }
    }

}

export default Snake;