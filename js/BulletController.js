class BulletController{
  constructor(x,y,direction,spriteName){
    this.sprite = Nakama.bulletGroup.create(x,y,'assets',spriteName);

    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    this.sprite.angle = 180*Math.atan(direction.x/-direction.y)/Math.PI;
    this.sprite.body.checkWorldBounds = true;
    this.sprite.body.outOfBoundsKill = true;
    this.sprite.body.velocity = direction.setMagnitude(BulletController.BULLET_SPEED)

  }
}
BulletController.BULLET_SPEED = 500;
