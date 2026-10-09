import { applyReview, SRS_DEFAULTS } from '../src/srs.js'

const now = new Date('2026-01-01T09:00:00Z')
const firstPass = applyReview(SRS_DEFAULTS, true, now)
const afterMistake = applyReview({ ...SRS_DEFAULTS, ...firstPass }, false, now)

console.log({ firstPass, afterMistake })
