import { Player } from "../src/signatureChange/Player"
import { Role } from "../src/signatureChange/Role"

describe("Player", () => {
  it("increases score when dragon plays", () => {
    const player = new Player(Role.Dragon, "WhiteDragon", 0)

    player.play()

    expect(player.getScore()).toEqual(20)
  })

  it("sets the initial score", () => {
    const player = new Player(Role.Dragon, "WhiteDragon", 0)

    player.play()

    expect(player.getScore()).toEqual(20)
  })
})
