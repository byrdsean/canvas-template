class FramesPerSecondInstance {
  private readonly FPS = 60;
  private readonly MILLISECONDS_PER_SECOND = 1000;

  public getFramesPerSecond(): FramesPerSecond {
    const millisecondsPerFrame = this.MILLISECONDS_PER_SECOND / this.FPS;
    const minimumMillisecondsToRender = Math.floor(millisecondsPerFrame) - 1;

    return {
      fps: this.FPS,
      millisecondsPerFrame,
      minimumMillisecondsToRender,
    };
  }
}
