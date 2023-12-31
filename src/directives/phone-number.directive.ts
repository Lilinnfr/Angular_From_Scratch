export class PhoneNumberDirective {
  static selector = "[phone-number]";

  willHaveSpaces = true;

  constructor(public element: HTMLElement) {}

  formatPhoneNumber(element: HTMLInputElement) {
    const value = element.value.replace(/[^\d]/g, "").substring(0, 10);

    const groups: string[] = [];

    for (let i = 0; i < value.length; i += 2) {
      groups.push(value.substring(i, i + 2));
    }

    element.value = groups.join(this.willHaveSpaces ? " " : "");
  }

  init() {
    this.element.style.borderColor = "red";

    if (this.element.hasAttribute("with-spaces")) {
      this.willHaveSpaces = this.element.getAttribute("with-spaces") === "true";
    }

    this.element.addEventListener("input", (event) => {
      this.formatPhoneNumber(event.target as HTMLInputElement);
    });
  }
}
