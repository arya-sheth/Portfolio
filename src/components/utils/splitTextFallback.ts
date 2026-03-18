/**
 * A simple fallback for GSAP's SplitText plugin (Standard/Free version doesn't include it).
 * Splits text into characters, words, or lines by wrapping them in spans.
 */
export class SplitText {
  elements: HTMLElement[];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  originalContent: string[] = [];

  constructor(target: string | string[] | HTMLElement | HTMLElement[] | NodeList, vars: any = {}) {
    if (typeof target === "string") {
      this.elements = Array.from(document.querySelectorAll(target)) as HTMLElement[];
    } else if (Array.isArray(target) && typeof target[0] === "string") {
      this.elements = [];
      (target as string[]).forEach(selector => {
        this.elements.push(...Array.from(document.querySelectorAll(selector)) as HTMLElement[]);
      });
    } else if (target instanceof HTMLElement) {
      this.elements = [target];
    } else {
      this.elements = Array.from(target as any) as HTMLElement[];
    }


    this.originalContent = this.elements.map(el => el.innerHTML);
    this.split(vars);
  }

  split(vars: any) {
    const type = vars.type || "chars,words,lines";
    const types = type.split(",");

    this.elements.forEach(el => {
      const text = el.innerText;
      el.innerHTML = ""; // Clear content

      // For simplicity, we'll implement a basic version that handles chars and words.
      // True "lines" splitting is complex (requires layout calculation), 
      // but we can simulate it or just provide the words as a fallback for lines.
      
      const words = text.split(" ");
      words.forEach((wordText, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.className = vars.wordsClass || "split-word";
        
        if (types.includes("chars")) {
          wordText.split("").forEach(char => {
            const charSpan = document.createElement("span");
            charSpan.style.display = "inline-block";
            charSpan.className = vars.charsClass || "split-char";
            charSpan.innerText = char;
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          });
        } else {
          wordSpan.innerText = wordText;
        }

        el.appendChild(wordSpan);
        this.words.push(wordSpan);

        // Add space after word if not last
        if (wordIndex < words.length - 1) {
          el.appendChild(document.createTextNode(" "));
        }
      });

      // Simple "lines" fallback: treat the whole block as lines if requested
      if (types.includes("lines")) {
        // In a real SplitText, this would be much more complex.
        // For our purposes, we'll just wrap the existing content in a line class if specified.
        if (vars.linesClass) {
          const lineWrapper = document.createElement("div");
          lineWrapper.className = vars.linesClass;
          // Move everything into the line wrapper
          while (el.firstChild) {
            lineWrapper.appendChild(el.firstChild);
          }
          el.appendChild(lineWrapper);
          this.lines.push(lineWrapper);
        }
      }
    });
  }

  revert() {
    this.elements.forEach((el, i) => {
      el.innerHTML = this.originalContent[i];
    });
  }
}
