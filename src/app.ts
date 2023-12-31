import { CardNumberDirective } from "./directives/card-number.directive";
import { PhoneNumberDirective } from "./directives/phone-number.directive";

const directives = [PhoneNumberDirective, CardNumberDirective];

directives.forEach((directive) => {
  const elements = document.querySelectorAll<HTMLElement>(directive.selector);

  elements.forEach((element) => {
    const directiveInstance = new directive(element);
    directiveInstance.init();
  });
});
