class KeyboardControls {
  private readonly EVENT_LISTENER_KEY_UP = "keyup";
  private readonly EVENT_LISTENER_KEY_DOWN = "keydown";
  private readonly userInputModel: UserInputModel;

  public constructor() {
    this.userInputModel = {
      up: false,
      down: false,
      left: false,
      right: false,
    };

    this.addKeyPressedUp();
    this.addKeyPressedDown();
  }

  public getKeyboardInputs(): UserInputModel {
    return this.userInputModel;
  }

  private addKeyPressedDown() {
    window.addEventListener(this.EVENT_LISTENER_KEY_DOWN, (e) => {
      switch (e.code) {
        case KeyCodes.ARROWLEFT:
          this.userInputModel.left = true;
          break;
        case KeyCodes.ARROWRIGHT:
          this.userInputModel.right = true;
          break;
        case KeyCodes.ARROWUP:
          this.userInputModel.up = true;
          break;
        case KeyCodes.ARROWDOWN:
          this.userInputModel.down = true;
          break;
      }
    });
  }

  private addKeyPressedUp() {
    window.addEventListener(this.EVENT_LISTENER_KEY_UP, (e) => {
      switch (e.code) {
        case KeyCodes.ARROWLEFT:
          this.userInputModel.left = false;
          break;
        case KeyCodes.ARROWRIGHT:
          this.userInputModel.right = false;
          break;
        case KeyCodes.ARROWUP:
          this.userInputModel.up = false;
          break;
        case KeyCodes.ARROWDOWN:
          this.userInputModel.down = false;
          break;
      }
    });
  }
}
