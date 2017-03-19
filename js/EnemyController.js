class EnemyController{
  constructor(x,y,spriteName,configs){
    this.sprite = Nakama.enemyGroup.create(x,y,'assets',spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;
    this.sprite.health = this.configs.health;
  }
  update(){
    if(this.sprite.x <100){
      this.sprite.body.velocity.x = EnemyController.ENEMY_SPEED;
    }
    if(this.sprite.x >=470){
      this.sprite.body.velocity.x = -EnemyController.ENEMY_SPEED;
    }
   }



}
EnemyController.ENEMY_SPEED = 1000;
