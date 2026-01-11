import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  selector: 'app-step4-for-directive',
  imports: [Step3PersonTableInput],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {

  person: Person[] = [{"firstname":"Jaymie","lastname":"Jellyman","email":"jjellyman0@mediafire.com"},
{"firstname":"Franky","lastname":"Wolland","email":"fwolland1@parallels.com"},
{"firstname":"Ethe","lastname":"Shaefer","email":"eshaefer2@arizona.edu"},
{"firstname":"Pris","lastname":"Sainteau","email":"psainteau3@ftc.gov"},
{"firstname":"Gaelan","lastname":"Terran","email":"gterran4@ehow.com"},
{"firstname":"Gloriane","lastname":"Sixsmith","email":"gsixsmith5@ihg.com"},
{"firstname":"Nathaniel","lastname":"Wickliffe","email":"nwickliffe6@creativecommons.org"},
{"firstname":"Darnall","lastname":"Crosseland","email":"dcrosseland7@canalblog.com"},
{"firstname":"Ermentrude","lastname":"Fulger","email":"efulger8@shareasale.com"},
{"firstname":"Karmen","lastname":"Godsmark","email":"kgodsmark9@angelfire.com"},
{"firstname":"Alica","lastname":"Pettigree","email":"apettigreea@netvibes.com"},
{"firstname":"Ange","lastname":"Benthall","email":"abenthallb@quantcast.com"},
{"firstname":"Fifi","lastname":"Carnegy","email":"fcarnegyc@t-online.de"},
{"firstname":"Carly","lastname":"Passman","email":"cpassmand@dyndns.org"},
{"firstname":"Leta","lastname":"Kiera","email":"lkierae@networksolutions.com"},
{"firstname":"Lin","lastname":"Josey","email":"ljoseyf@behance.net"},
{"firstname":"Britta","lastname":"McKernan","email":"bmckernang@ucoz.ru"},
{"firstname":"Conni","lastname":"Pynner","email":"cpynnerh@fda.gov"},
{"firstname":"Amalee","lastname":"De Bernardi","email":"adebernardii@cornell.edu"},
{"firstname":"Krystal","lastname":"Keher","email":"kkeherj@washingtonpost.com"}]
}
