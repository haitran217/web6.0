class EnemyController{
  constructor(x,y,spriteName,configs){
    this.sprite = Nakama.game.add.sprite(x,y,'assets',spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;
  }
  update(){
    this.sprite.body.velocity.x = EnemyController.ENEMY_SPEED;
    setTimeout(function(){
      this.sprite.body.velocity.y = EnemyController.ENEMY_SPEED;
    },2000);
  }
}
EnemyController.ENEMY_SPEED = 100;
