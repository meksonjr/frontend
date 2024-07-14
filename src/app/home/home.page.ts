import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

 img = 'https://img.freepik.com/fotos-gratis/cachorro-basenji-vermelho-e-branco-de-aparencia-chique-com-capuz-de-algodao-preto-com-capuz-levantado-parece-a-esquerda-isolado-no-branco_346278-418.jpg?t=st=1720900298~exp=1720903898~hmac=e660672a348aab65d570736c6edda974966d280090a5e7166cdaa33c3e91a264&w=1380'
  userInfo = {
    nome: 'Seu nome',
    bio: 'Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida.',
  };

  blogs = [
    {
      titulo: '5 dicas para sua carreira profissional',
      descricao:
        'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end',
    },
    {
      titulo: '5 dicas para sua carreira profissional',
      descricao:
        'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end',
    },
    {
      titulo: '5 dicas para sua carreira profissional',
      descricao:
        'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end',
    },
    {
      titulo: '5 dicas para sua carreira profissional',
      descricao:
        'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end',
    },
  ];
}
