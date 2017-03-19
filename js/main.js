var Nakama = {};
Nakama.configs = {
  GAME_WIDTH : 640,
  GAME_HEIGHT : 960,
  MIN_WIDTH : 320,
  MIN_HEIGHT : 460,
  MAX_WIDTH : 640,
  MAX_HEIGHT : 960,
  PLAYER1_PCS:{
    x:200,
    y:200
  },
  PLAYER2_PCS:{
    x:400,
    y:200
  },
  ENEMY : {
    x:0,
    y:100
  }
};

window.onload = function(){
  Nakama.game = new Phaser.Game(
    Nakama.configs.GAME_WIDTH,
    Nakama.configs.GAME_HEIGHT,
    Phaser.AUTO,
    '',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = Nakama.configs.MIN_WIDTH;
  Nakama.game.scale.minHeight =  Nakama.configs.MIN_HEIGHT ;
  Nakama.game.scale.maxWidth =  Nakama.configs.MAX_WIDTH;
  Nakama.game.scale.maxHeight = Nakama.configs.MAX_HEIGHT;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;
  Nakama.game.add.sprite(0,0,'background')
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();

  Nakama.players= [];
  Nakama.enemys = [];
  Nakama.players.push(
    new ShipController(
      Nakama.configs.PLAYER1_PCS.x,
      Nakama.configs.PLAYER1_PCS.y,
      "Spaceship1-Player.png",
      {
          up       : Phaser.Keyboard.UP,
          down     : Phaser.Keyboard.DOWN,
          left     : Phaser.Keyboard.LEFT,
          right    : Phaser.Keyboard.RIGHT,
          fire     : Phaser.Keyboard.SPACEBAR,
          cooldown : 0.1
      }
    )
  );
  Nakama.players.push(
    new ShipController(
      Nakama.configs.PLAYER2_PCS.x,
      Nakama.configs.PLAYER2_PCS.y,
      "Spaceship2-Player.png",
      {
          up    : Phaser.Keyboard.W,
          down  : Phaser.Keyboard.S,
          left  : Phaser.Keyboard.A,
          right : Phaser.Keyboard.D,
          fire  : Phaser.Keyboard.F,
          cooldown : 0.1
      }
    )
  );
  Nakama.enemys.push(
    new EnemyController(
      Nakama.configs.ENEMY.x,
      Nakama.configs.ENEMY.y,
      "EnemyType4.png",
      {
        health : 15
      }
    )
  );
}

// update game state each frame
var update = function(){
  Nakama.players.forEach(function(ship){
    ship.update();
  });
  Nakama.enemys.forEach(function(ene){
    ene.update();
  });
  Nakama.game.physics.arcade.overlap(
    Nakama.bulletGroup,
    Nakama.enemyGroup,
    onBulletHitEnemy
  );
}

var onBulletHitEnemy = function(bulletSprite,enemySprite){
  enemySprite.damage(1);
  bulletSprite.kill();
}

// before camera render (mostly for debug)
var render = function(){}
