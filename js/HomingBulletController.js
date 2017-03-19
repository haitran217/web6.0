class HomingBulletController{
  constructor(x,y,direction,spriteName){
     this.sprite = Nakama.bulletGroup.create(x,y,'assets',spriteName);
     this.sprite.anchor = new Phaser.Point(0.5,0.5);
     this.sprite.body.checkWorldBounds = true;
     this.sprite.body.outOfBoundsKill = true;
     this.sprite.body.velocity = direction.setMagnitude(BulletController.BULLET_SPEED);
     this.focus = Nakama.enemyGroup.getFirstAlive();
  }
  update(){
    if(this.focus && this.focus.alive){
      this.sprite.angle = 180*Math.atan((this.focus.x-this.sprite.x)/-(this.focus.y-this.sprite.y))/Math.PI;
      var dir = new Phaser.Point (this.focus.x-this.sprite.x,this.focus.y-this.sprite.y);
      this.sprite.body.velocity = dir.setMagnitude(BulletController.BULLET_SPEED);
    }
  }
}
