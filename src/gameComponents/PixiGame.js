import { Application, Sprite, Loader, Texture, Text } from "pixi.js";

export const Assets = {
  PRIZE_SYMBOLS_CASH: "./prize_symbols_cash.json",
};

export const IndividualAssets = {
  INDIVIDUAL_0_50: "./individuals/individual-0_50.png",
  INDIVIDUAL_1: "./individuals/individual-1.png",
  INDIVIDUAL_2: "./individuals/individual-2.png",
  INDIVIDUAL_5: "./individuals/individual-5.png",
  INDIVIDUAL_10: "./individuals/individual-10.png",
  INDIVIDUAL_100: "./individuals/individual-100.png",
  INDIVIDUAL_250: "./individuals/individual-250.png",
  INDIVIDUAL_1000: "./individuals/individual-1000.png",
  INDIVIDUAL_10000: "./individuals/individual-10000.png",
  INDIVIDUAL_20000: "./individuals/individual-20000.png",
};

export default function PixiGame() {
  const game = new Application({
    width: 1024,
    height: 564,
  });

  document.getElementsByClassName("canvas")[0].appendChild(game.view);

  const cashPrize = Assets.PRIZE_SYMBOLS_CASH;
  const loader = new Loader("", 100);

  let title = new Text(
    `Spritesheet VS Single Reel loading time test`,
    {
      fontFamily: "Arial",
      fontSize: 42,
      fill: 0xffffff,
      align: "center",
    }
  );
  title.position.set(80, 10);
  game.stage.addChild(title);

  function spritesheetSetup() {
    loader.reset();
    loader.add(cashPrize);

    const startTime = performance.now();
    loader.load(build);

    function build() {
      const endTime = (performance.now() - startTime).toFixed(2)
      const spritesheetImage = Sprite.from(Texture.from("sprite_cash-1.png"));
      spritesheetImage.position.set(20, 80);
      game.stage.addChild(spritesheetImage);

      let spritesheetText = new Text(
        `Loading the Spritesheet took:
        \n${endTime}ms.`,
        {
          fontFamily: "Arial",
          fontSize: 24,
          fill: 0xffffff,
          align: "center",
        }
      );
      spritesheetText.position.set(660, 140);
      game.stage.addChild(spritesheetText);
    }
  }

  function individualImageSetup() {
    loader.reset();
    loader.add(Object.values(IndividualAssets));

    const startTime = performance.now();
    loader.load(build);

    function build() {
      const endTime = (performance.now() - startTime).toFixed(2)
      const singleImage = Sprite.from(Texture.from("./individuals/individual-1.png"));
      singleImage.position.set(20, 330);
      game.stage.addChild(singleImage);
      let singleImageText = new Text(
        `Loading the single images took:
        \n${endTime}ms.`,
        {
          fontFamily: "Arial",
          fontSize: 24,
          fill: 0xffffff,
          align: "center",
        }
      );
      singleImageText.position.set(660, 400);
      game.stage.addChild(singleImageText);
    }
  }

  spritesheetSetup();
  setTimeout(() => {
    individualImageSetup();
  }, 2000);
}
