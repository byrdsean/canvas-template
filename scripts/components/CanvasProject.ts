class CanvasProject {
  private lastTimestamp = 0;
  private canvasInstance: Canvas;
  private readonly keyboardControls: KeyboardControls;
  private readonly framesPerSecond: FramesPerSecond;

  constructor() {
    this.canvasInstance = CanvasInstance.getInstance();
    this.keyboardControls = new KeyboardControls();

    const framesPerSecondInstance = new FramesPerSecondInstance();
    this.framesPerSecond = framesPerSecondInstance.getFramesPerSecond();
  }

  renderFrame(timestamp: number) {
    if (!this.shouldRenderFrame(timestamp)) return;

    const ctx = this.canvasInstance.canvasContext;
    ctx.clearRect(0, 0, this.canvasInstance.width, this.canvasInstance.height);

    /*** Draw your canvas components ***/
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, this.canvasInstance.width, this.canvasInstance.height);
    /*** Draw your canvas components ***/
  }

  private shouldRenderFrame(timestamp: number): boolean {
    if (timestamp === 0) return false;

    if (this.lastTimestamp === 0) {
      this.lastTimestamp = timestamp;
      return false;
    }

    const deltaTimeMilliseconds: number = Math.floor(
      timestamp - this.lastTimestamp
    );

    const framesPerSecond = this.framesPerSecond;
    const shouldRender =
      framesPerSecond.minimumMillisecondsToRender <= deltaTimeMilliseconds;

    if (shouldRender) {
      this.lastTimestamp = timestamp;
    }

    return shouldRender;
  }
}
