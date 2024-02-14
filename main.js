let engine = new Coffee();

engine.createWindow();
engine.displayWindow();

engine.fillColor = 'black';
engine.fillRect(0, 0, 320, 240);

let sprite = new CoffeeSprite('logo', 225, 225);
engine.drawSprite(
    sprite,
    engine.window.width / 2 - sprite.width / 2,
    engine.window.height / 2 - sprite.height / 2
);
