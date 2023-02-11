import { Pipe, PipeTransform } from "@angular/core";
import { CONTACT } from "../Types/contact";

@Pipe({
  name: "filterPipe",
})
export class FilterPipePipe implements PipeTransform {
  transform(value: CONTACT[], input: string): CONTACT[] {
    if (input) {
      const filtered = value.filter((contact) =>
        contact.firstName.toLowerCase().indexOf(input.toLowerCase()) > -1 ||
        contact.lastName.toLowerCase().indexOf(input.toLowerCase()) > -1
      );
      return filtered
    } else {
      return value;
    }
  }
}
