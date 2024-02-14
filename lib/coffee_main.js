class Coffee {
  constructor() {
    this.lineWidth = 1;
    this.lineColor = "#000000";

    this.fillColor = "#000000";

    this.ux = 0;
    this.uy = 0;
    this.uw = null;
    this.uy = null;

    this.windowScale = 1;
  }

  /**
   * Create the window object for the Coffee engine.
   * @param {Number} width
   * @param {Number} height
   */
  createWindow(width = 320, height = 240) {
    this.window = document.createElement("canvas");
    this.window.id = "coffee_window";
    this.window.width = width;
    this.window.height = height;
    this.window.style.border = "1px solid white";
    this.ctx = this.window.getContext("2d");

    this.origin_x = this.window.width / 2;
    this.origin_y = this.window.height / 2;
  }

  /**
   * Makes the Coffee window visible.
   */
  displayWindow() {
    document.body.appendChild(this.window);
  }

  /**
   * Adjusts window dimensions to the specified width and height.
   * @param {Number} width
   * @param {Number} height
   */
  resizeWindow(width = this.window.width, height = this.window.height) {
    this.window.width = width;
    this.window.height = height;

    this.origin_x = this.window.width / 2;
    this.origin_y = this.window.height / 2;
  }

  /**
   * Draws a CoffeeSprite on to the window.
   * @param {CoffeeSprite} sprite
   * @param {Number} x
   * @param {Number} y
   */
  drawSprite(sprite, x, y) {
    this.ctx.beginPath();
    let is_cropped =
      this.ux != null && this.uy != null && this.uw != null && this.uh != null;
    if (is_cropped) {
      this.ctx.drawImage(
        sprite.image,
        this.ux,
        this.uy,
        this.uw,
        this.uh,
        x * this.windowScale,
        y * this.windowScale,
        sprite.width * this.windowScale,
        sprite.height * this.windowScale
      );
    } else {
      this.ctx.drawImage(
        sprite.image,
        x * this.windowScale,
        y * this.windowScale,
        sprite.width * this.windowScale,
        sprite.height * this.windowScale
      );
    }
  }

  /**
   * Crops a sprite to specified dimensions. Great for spritesheets.
   * @param {Number} ux
   * @param {Number} uy
   * @param {Number} uw
   * @param {Number} uh
   */
  cropSprite(ux, uy, uw, uh) {
    this.ux = ux;
    this.uy = uy;
    this.uw = uw;
    this.uh = uh;
  }

  /**
   * Draws a line on the Coffee surface.
   * @param {Number} x0
   * @param {Number} y0
   * @param {Number} x1
   * @param {Number} y1
   */
  line(x0, y0, x1, y1) {
    this.ctx.strokeStyle = this.lineColor;
    this.ctx.lineWidth = this.lineWidth * this.windowScale;
    this.ctx.beginPath();
    this.ctx.moveTo(x0 * this.windowScale, y0 * this.windowScale);
    this.ctx.lineTo(x1 * this.windowScale, y1 * this.windowScale);
    this.ctx.stroke();
  }

  /**
   * Draws a line based on angle instead of coordinates.
   * @param {Number} x
   * @param {Number} y
   * @param {Number} angle
   * @param {Number} length
   */
  angledLine(x, y, angle, length) {
    this.ctx.strokeStyle = this.lineColor;
    this.ctx.lineWidth = this.lineWidth * this.windowScale;
    this.ctx.beginPath();
    this.ctx.moveTo(x * this.windowScale, y * this.windowScale);
    let end_x = x + Math.sin(angle) * length;
    let end_y = y + Math.cos(angle) * length;
    this.ctx.lineTo(end_x * this.windowScale, end_y * this.windowScale);
    this.ctx.stroke();
  }

  /**
   * Draws a single pixel on the Coffee surface.
   * @param {Number} x
   * @param {Number} y
   * @param {String} col
   */
  pixel(x, y, col) {
    this.ctx.fillStyle = col;
    this.ctx.beginPath();
    this.ctx.fillRect(
      x * this.windowScale,
      y * this.windowScale,
      1 * this.windowScale,
      1 * this.windowScale
    );
  }

  fillRect(x, y, w, h) {
    this.ctx.fillStyle = this.fillColor;
    this.ctx.beginPath();
    this.ctx.fillRect(
      x * this.windowScale,
      y * this.windowScale,
      w * this.windowScale,
      h * this.windowScale
    );
  }

  /**
   * Clears the Coffee surface.
   */
  wipe() {
    this.ctx.clearRect(0, 0, this.window.width, this.window.height);
  }

  drawObject(object) {
    this.drawSprite(object.sprite, object.x, object.y);
  }
}

class CoffeeSprite {
  /**
   * Creates new sprite for use with the Coffee engine.
   * @param {String} image_path
   * @param {Number} width
   * @param {Number} height
   */
  constructor(image_id, width = 128, height = 128) {
    this.image = document.getElementById(image_id);
    this.width = width;
    this.height = height;
  }
}

let CoffeeKeys = {};

document.addEventListener("keydown", function (event) {
  CoffeeKeys[event.key] = true;
});

document.addEventListener("keyup", function (event) {
  CoffeeKeys[event.key] = false;
});

class CoffeeObject {
  /**
   * The main building block of the game. Can be a player, box, enemy, etc.
   */
  constructor() {
    this.x = 0;
    this.y = 0;
    this.sprite = null;
  }

  /**
   * Sets object's x and y.
   * @param {Number} x
   * @param {Number} y
   */
  goTo(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Scales an object to the specified width and height.
   * @param {Number} w
   * @param {Number} h
   */
  scaleTo(w, h) {
    this.sprite.width = w;
    this.sprite.height = h;
  }
}
