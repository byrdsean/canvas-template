class CanvasInstance {
  private static CANVAS_SCREEN_ID = "canvas_screen";
  private static instance: Canvas | null;

  private constructor() {}

  static getInstance(): Canvas {
    return this.instance ? this.instance : this.getNewInstance();
  }

  static getNewInstance(): Canvas {
    const body = document.getElementById("body")! as HTMLElement;
    
    const canvasScreen: HTMLCanvasElement = document.getElementById(
      CanvasInstance.CANVAS_SCREEN_ID
    )! as HTMLCanvasElement;

    const bodyBoundingClientRect = body.getBoundingClientRect();
    canvasScreen.height = Math.ceil(bodyBoundingClientRect.height);
    canvasScreen.width = Math.ceil(bodyBoundingClientRect.width);

    this.instance = {
      canvasContext: canvasScreen.getContext("2d")!,
      height: canvasScreen.height,
      width: canvasScreen.width,
    } as Canvas;

    return this.instance;
  }
}
