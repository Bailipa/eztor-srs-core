/**
 * 借鉴 Anki 的间隔重复（SM-2 精简版）。
 *
 * 记忆模型：
 *  - repetitions: 连续答对次数（答错清零）
 *  - intervalDays: 当前间隔天数
 *  - ease: 难度系数（答对缓慢上升、答错 -0.15，下限 1.3）
 *  - lapses: 遗忘次数
 *  - dueDate: 下次到期时间（到期才进入复习队列）
 */
export interface SrsState {
    repetitions: number;
    intervalDays: number;
    ease: number;
    lapses: number;
    dueDate: Date | null;
}
export declare function applyReview(state: SrsState, isCorrect: boolean, now?: Date): Partial<SrsState>;
export declare const SRS_DEFAULTS: SrsState;
