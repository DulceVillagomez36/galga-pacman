controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        5 . . . 1 1 . . . . . . . . . . 
        . . . . . 5 . . 1 1 1 1 . . . . 
        . . 1 2 . . 5 1 2 2 4 2 1 . . . 
        . . . 4 1 . 1 2 4 4 4 5 2 2 . . 
        . 5 . . 4 . 1 2 4 5 5 4 4 . . . 
        . . 5 . . . 1 1 2 2 4 1 . . . . 
        . . . 2 . . 5 1 1 1 1 . . . . . 
        . 4 2 . . . . 1 . . . . . . . . 
        . . 4 1 . 1 2 4 . . . . . . . . 
        5 . . . . . 4 . . . . . . . . . 
        . . . . 5 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . 4 5 5 8 8 8 5 5 5 . . . 
    . . . 4 5 5 5 8 6 5 5 5 5 5 . . 
    . . 4 5 5 5 5 5 5 5 5 5 4 4 4 . 
    . . 4 5 5 5 5 5 5 5 5 4 . . . . 
    . 4 5 5 5 5 5 5 5 5 4 4 . . . . 
    . 4 5 5 5 5 5 5 5 4 . . . . . . 
    . 4 5 5 5 5 5 5 5 5 . . . . . . 
    . 4 5 5 5 5 5 5 5 5 5 . . . . . 
    . . 4 5 5 5 5 5 5 5 5 5 . . . . 
    . . 4 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 4 4 5 5 5 5 5 5 5 5 5 . . 
    . . . . 4 5 5 5 5 5 5 4 4 . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 8 8 8 8 . . . . . . 
        . . . . . 6 8 8 8 8 8 8 . . . . 
        . . . 6 8 8 8 8 8 8 8 8 . . . . 
        . . . 6 8 6 6 8 8 6 6 8 8 . . . 
        . . 6 6 8 1 6 8 8 1 6 8 8 8 . . 
        . . 6 8 8 9 6 8 8 9 6 8 8 8 . . 
        . . 6 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 6 8 8 8 8 9 6 8 8 8 8 8 . . 
        . . 6 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 6 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 6 8 8 8 8 6 6 6 8 8 8 8 . . 
        . . . 6 8 8 8 6 . . . 6 8 . . . 
        . . . 6 8 8 6 . . . . 6 8 8 . . 
        . . 6 8 8 8 6 . . . . 6 8 8 8 . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
