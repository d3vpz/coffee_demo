let engine = new Coffee();

engine.createWindow();
engine.displayWindow();

engine.fillColor = 'black';
engine.fillRect(0, 0, 320, 240);

let logo = new CoffeeObject();
logo.setSprite(new CoffeeSprite('logo', 225, 225));
logo.goTo(50, 0);
logo.scaleTo(225, 225);
logo.rotateTo(rad(45));
engine.drawObject(logo);
