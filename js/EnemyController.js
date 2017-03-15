class EnemyController{
  constructor(x,y,spriteName,configs){
    this.sprite = Nakama.game.add.sprite(x,y,'assets',spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;
  }
  update(){
    if(this.sprite.x <100){
      this.sprite.body.velocity.x = EnemyController.ENEMY_SPEED;
    }
    if(this.sprite.x >100){
      this.sprite.body.velocity.y = EnemyController.ENEMY_SPEED;
    }
    if(this.sprite.x >450){
      this.sprite.body.velocity.x = -EnemyController.ENEMY_SPEED;
    }
    if(this.sprite.y > 450){
      this.sprite.body.velocity.y = -EnemyController.ENEMY_SPEED;
    }
   }



}
EnemyController.ENEMY_SPEED = 100;
