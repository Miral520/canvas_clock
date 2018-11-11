class setClock{
    constructor(data){
        this.digit = [
            [
                [0, 0, 1, 1, 1, 0, 0],
                [0, 1, 1, 0, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 0, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 0]
            ],//0
            [
                [0, 0, 0, 1, 1, 0, 0],
                [0, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [1, 1, 1, 1, 1, 1, 1]
            ],//1
            [
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 1]
            ],//2
            [
                [1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],//3
            [
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 0],
                [0, 1, 1, 0, 1, 1, 0],
                [1, 1, 0, 0, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 1, 1]
            ],//4
            [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],//5
            [
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],//6
            [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0]
            ],//7
            [
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],//8
            [
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 1, 1, 0, 0, 0, 0]
            ],//9
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]//:
        ];
        let canvas = document.createElement('canvas');
        data.container.appendChild(canvas);
        this.width = data.width;
        this.height = data.height;
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
        this.normalColor = data.normalColor;
        this.radius = data.radius;
        this.marginTop = (this.height - 18 * (this.radius + 1)) / 2;
        this.marginLeft = (this.width - 107 * (this.radius + 1)) / 2;
        this.ball = [];
        this.ballColor = data.ballColor;
        this.curShowTimeSecond = this.getCurrentTime();
        this.render();
    }
    render(){
        this.context.clearRect(0,0,this.width,this.height);
        let hours = this.curShowTimeSecond.h;
        let minutes = this.curShowTimeSecond.m;
        let seconds = this.curShowTimeSecond.s;
        this.renderDigit(this.marginLeft, this.marginTop, parseInt(hours / 10));
        this.renderDigit(this.marginLeft + 15 * (this.radius + 1), this.marginTop, parseInt(hours % 10));
        this.renderDigit(this.marginLeft + 30 * (this.radius + 1), this.marginTop, 10);
        this.renderDigit(this.marginLeft + 39 * (this.radius + 1), this.marginTop, parseInt(minutes / 10));
        this.renderDigit(this.marginLeft + 54 * (this.radius + 1), this.marginTop, parseInt(minutes % 10));
        this.renderDigit(this.marginLeft + 69 * (this.radius + 1), this.marginTop, 10);
        this.renderDigit(this.marginLeft + 78 * (this.radius + 1), this.marginTop, parseInt(seconds / 10));
        this.renderDigit(this.marginLeft + 93 * (this.radius + 1), this.marginTop, parseInt(seconds % 10));
        for (var i = 0; i < this.ball.length; i++) {
            this.context.fillStyle = this.ball[i].color;
            this.context.beginPath();
            this.context.arc(this.ball[i].x, this.ball[i].y, this.radius, 0, 2 * Math.PI, true);
            this.context.closePath();
            this.context.fill();
        }
        requestAnimationFrame(() => {
            this.render();
            this.updata();
        });
    }
    getCurrentTime(){
        let curTime = new Date();
        return {
            h: curTime.getHours(),
            m: curTime.getMinutes(),
            s: curTime.getSeconds()
        }
    }
    renderDigit(x,y,num){
        this.context.fillStyle = this.normalColor;        
        for (let i = 0; i < this.digit[num].length;i++){
            for(let j = 0;j < this.digit[num][i].length;j++){
                if(this.digit[num][i][j] === 1){
                    this.context.beginPath();
                    this.context.arc(x + j * 2 * (this.radius + 1), y + i * 2 * (this.radius + 1) + (this.radius + 1), this.radius, 0, 2 * Math.PI);
                    this.context.closePath;
                    this.context.fill();
                }
            }
        }
    }
    updata(){
        let nextShowTimeSeconds = this.getCurrentTime();
        let nextHours = nextShowTimeSeconds.h;
        let nextMinutes = nextShowTimeSeconds.m;
        let nextSeconds = nextShowTimeSeconds.s;
        let curHours = this.curShowTimeSecond.h;
        let curMinutes = this.curShowTimeSecond.m;
        let curSeconds = this.curShowTimeSecond.s;
        if (nextSeconds != curSeconds) {
            if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
                this.addBalls(this.marginLeft + 0, this.marginTop, parseInt(curHours / 10));
            }
            if (parseInt(curHours % 10) != parseInt(nextHours % 10)) {
                this.addBalls(this.marginLeft + 15 * (this.radius + 1), this.marginTop, parseInt(curHours / 10));
            }
            if (parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)) {
                this.addBalls(this.marginLeft + 39 * (this.radius + 1), this.marginTop, parseInt(curMinutes / 10));
            }
            if (parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)) {
                this.addBalls(this.marginLeft + 54 * (this.radius + 1), this.marginTop, parseInt(curMinutes % 10));
            }
            if (parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)) {
                this.addBalls(this.marginLeft + 78 * (this.radius + 1), this.marginTop, parseInt(curSeconds / 10));
            }
            if (parseInt(curSeconds % 10) != parseInt(nextSeconds % 10)) {
                this.addBalls(this.marginLeft + 93 * (this.radius + 1), this.marginTop, parseInt(nextSeconds % 10));
            }
            this.curShowTimeSecond.h = nextHours;
            this.curShowTimeSecond.m = nextMinutes;
            this.curShowTimeSecond.s = nextSeconds;
        }
        this.updateBalls();
        for(let i = 0;i < this.ball.length;i++){
            if(this.ball[i].x >= this.width || this.ball[i].x <= 0){
                this.ball.splice(i,1);
            }
        }
    }
    addBalls(x,y,num){
        for (let i = 0; i < this.digit[num].length; i++) {
            for (let j = 0; j < this.digit[num][i].length; j++) {
                if (this.digit[num][i][j] === 1) {
                    this.ball.push({
                        x: x + j * 2 * (this.radius + 1),
                        y: y + i * 2 * (this.radius + 1) + (this.radius + 1),
                        g: 1 + Math.random(),
                        vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                        vy: -5,
                        color: this.ballColor[Math.floor(Math.random() * this.ballColor.length)] 
                    });
                }
            }
        }
    }
    updateBalls(){
        for (let i = 0; i < this.ball.length; i++) {
            this.ball[i].x += this.ball[i].vx * Math.random() * 2;
            this.ball[i].y += this.ball[i].vy;
            this.ball[i].vy += this.ball[i].g;
            if (this.ball[i].y >= this.height - this.radius) {
                this.ball[i].y = this.height - this.radius;
                this.ball[i].vy = Math.abs(this.ball[i].vy) <= 11 ? 0 : - this.ball[i].vy * this.randomMoreNum(0.75);
            }
            // if (this.ball[i].x >= this.width - this.radius || this.ball[i].x <= 0){
            //     this.ball[i].vx = this.ball[i].vx * -1;
            // }
            // this.ball[i].vx = Math.abs(this.ball[i].vx) <= 2 ? 0 : this.ball[i].vx;
        }
    }
    randomMoreNum(n){
        let temp = Math.random();
        return temp = temp >= n ? this.randomMoreNum(n) : temp;
    }
}
