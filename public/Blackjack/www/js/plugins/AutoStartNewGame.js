/* globals SceneManager */
/*:
 * @plugindesc Auto start a new game when the game boots
 * @author Jeremy Kahn
 */
(function () {
  function poll () {
    if (SceneManager._scene && SceneManager._scene.commandNewGame) {
      SceneManager._scene.commandNewGame();
    } else {
      setTimeout(poll, 10);
    }
  }

  poll();
}());
