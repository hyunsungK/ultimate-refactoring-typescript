import { Quality } from "./Quality"

export class QualityCalculator {
  private score: number = 0

  public rateLocation(quality: string): void {
    if (quality === Quality.Excellent) {
      this.score += 10
    }
    if (quality === Quality.Good) {
      this.score += 7
    }
    if (quality === Quality.Bad) {
      this.score -= 2
    }
    if (quality === Quality.Terrible) {
      this.score -= 10
    }
  }

  public rateFacilities(quality: string): void {
    if (quality === Quality.Excellent) {
      this.score += 2
    }
    if (quality === Quality.Good) {
      this.score += 1
    }
    if (quality === Quality.Bad) {
      this.score -= 1
    }
    if (quality === Quality.Terrible) {
      this.score -= 2
    }
  }

  public getScore(): number {
    return this.score
  }
}
