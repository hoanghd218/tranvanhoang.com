import { masterPromptA } from "./master-prompt-a"
import { masterPromptB } from "./master-prompt-b"
import { masterPromptC } from "./master-prompt-c"

/**
 * Master Prompt "AI Opportunity Advisor V1.0" — ghép từ ba phần, giữ nguyên văn giáo trình.
 * Chỗ người học dán Market Fit Report ghi dạng {{...}} ở cuối prompt.
 */
export const masterPrompt = [masterPromptA, masterPromptB, masterPromptC].join("\n\n")
