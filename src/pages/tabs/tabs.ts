import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FirePage } from '../fire/fire';
import { NewsPage } from '../news/news';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FirePage;
  tab3Root = NewsPage;
  tab4Root = PerfilPage;

  constructor() {

  }
}
