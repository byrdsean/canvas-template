// @ts-ignore
const canvasProject = new CanvasProject();

function animate(timestamp: number) {
  canvasProject.renderFrame(timestamp);
  requestAnimationFrame(animate);
}
animate(0);
