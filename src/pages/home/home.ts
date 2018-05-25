import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides') slides: any;

  hasAnswered: boolean = false;
  score: number = 0;
  score2: number = 0;
  score3: number = 0;
  score4: number = 0;
  x: number = 0;
  text: string;
  text2: string;
  ex: string;
  ex2: string;
  avatar: string;
  slogan: string;
  map: string;
  name2: string;
  char: string;
  z: number = 0;

  slideOptions: any;
  questions: any;

  constructor(public navCtrl: NavController, public dataService: Data) {

  }

  ionViewDidLoad() {

    this.slides.lockSwipes(true);

    this.dataService.load().then((data) => {

      data.map((question) => {

        let originalOrder = question.answers;
        question.answers = this.randomizeAnswers(originalOrder);
        return question;

      });

      this.questions = data;

    });

  }

  nextSlide(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);

  }


  prevSlide(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);

  }

  selectAnswer(answer, question){

      this.hasAnswered = true;
      answer.selected = true;

      if(answer.name1 == "amber"){
        this.score++;
      }
    else if(answer.name1 == "sailor"){
      this.score2++;
    }
    else if(answer.name1 == "pirat"){
        this.score3++;
      }
     else if(answer.name1 == "viking") {
        this.score4++;
      }

    console.log(this.x + " " + this.z++, " score 1 =" ,this.score," score 2 =" ,this.score2," score 3 =" ,this.score3," score 4 =",this.score4);



    setTimeout(() => {
      this.hasAnswered = false;
      this.nextSlide();
      answer.selected = false;
    }, 100);
  }


  yourCharacter (){
    this.x = Math.max (this.score,this.score2,this.score3,this.score4);

    if (this.x == this.score){
      console.log("zajebisty amber");
      this.char = "../../assets/imgs/char/amber.png";
      this.name2 = "Princess of ambers";
      this.avatar = "../../assets/imgs/char/amber.png";
      this.slogan = "You are the one who can fill the world with sunshine.";
      this.text = "Have you ever seen the real amber? If not, there is a chance for you in Tirpitz museum! I will teach you ways of recognizing the amber from Yellowstone - can you imagine that there exist three ways of doing it? Let’s try and check your luck!\n" +
        "Can you think of the exhibition full of hundreds of beautiful jewellery with ambers? Oh, I bet that you would feel here like in heaven! By the way, one of the first widely used decorate material was exactly an amber. \n";
      this.text2 =
        "I am sure that you have heard about the dark period in our history, but for Anna and Pleines it was a romantic period full of love and intimacy - I advise you to see Anna’s bunker where you can get to know their love story in the details.\n" +  "Try to imagine your own kingdom full of people with beautiful architecture - Can you guess how many people were involved in building Anna’s bunker? You can experience the feeling of being inside the Tirpitz bunker - its imaging! But do you know the original name of it?\n" +
        "Let’s move to times where Vikings were in possession of all the sea - try to figure out what was the most important thing to them and of what they were the most proud of!\n" +
        "\n" +
        "Your Highness, everything is ready! Let’s start the ride.\n";
      this.ex = "../../assets/imgs/ex/12.jpg";
      this.ex2 = "../../assets/imgs/ex/10.jpg";
      this.map = "../../assets/imgs/map/amber.jpg";
    }
    if (this.x == this.score2) {
      console.log("Sailor");
      this.char = "../../assets/imgs/char/sailor.png";
      this.name2 = "The Sailor";
      this.avatar = "../../assets/imgs/1%20question/sailor.jpg";
      this.slogan = "It’s Not Just a Job, It’s An Adventure";
      this.text = "Have you ever been on a boat during the storm or have you ever seen from the ship deck the breathtaking aurora? If not, you have a unique opportunity to experience that in Tirpitz museum! \n";
      this.text2 = "Just imagine yourself as a sailor on a big ship - let's be inspired by listening story about the catastrophic rescue operation on a west coast sea! Get to know the reasons why the lifeboat service was created and how the rescue missions looked? \n" +
        "You love to travel, explore new places and see original things - try to guess how many bunkers are placed in whole Denmark? You probably know that the roof of the bunkers were made with special ankle in order to avoid the destruction of blowing up grants, estimate how big is the ankle.\n" +
        "I bet that you have seen a lot of nature during your adventures, but have you ever seen the tree during the process of making ambers?! There are three natural ways of creating ambers - let's get to know them! You seem to really like the ambers - can you imagine that it was illegal to bring home the amber which you found on the beach?\n";
      this.map = "../../assets/imgs/map/sailor.jpg";
      this.ex = "../../assets/imgs/ex/02.jpg";
      this.ex2 = "../../assets/imgs/ex/03.jpg";
    }
    if (this.x == this.score3){
      console.log("pirat");
      this.char = "../../assets/imgs/char/pirat.png";
      this.name2 = "The Pirat";
      this.avatar = "../../assets/imgs/1%20question/pirat.jpg";
      this.slogan = "Wherever you want to go, you go. Ship is a freedom.";
      this.text = "Did you know that having a shop was really difficult thing in time of pirate, a lot of exotic products from foreign countries were tempting treasures that pirates could sell in black market for huge price. \n";
      this.text2 = "After long journey on the sea pirate always search rest in tavern to laugh with friends and listen legends about most dangerous pirates and biggest ships. In west coast exhibition you can experience atmosfer like that.\n" +
          "On pirate ship fighting with other was something typical. Can you imagine effect of shooting from cannon? In Tirpitz bunker after World War II have place a huge explosion  you can see how powerful can be explosion  and how it effect to surrounding elements. \n" +
          "\t\tAmber was a valuable treasure, but did you know that naturally there was none aber on west coast? All amber that we can find had to make a long journey, from west europe through baltic sea, africa, north atlantic ocean to finish in north sea on west coast of denmark. \n" +
          "\t\tCan you imagine how expensive would be to build bunkier just for 20 people nowadays ";
      this.map = "../../assets/imgs/map/pirat.jpg";
      this.ex = "../../assets/imgs/ex/04.jpg";
      this.ex2 = "../../assets/imgs/ex/08.jpg";
    }
    if (this.x == this.score4){
      console.log("viking");
      this.char = "../../assets/imgs/char/viking.png";
      this.name2 = "Viking queen ";
      this.avatar = "../../assets/imgs/1%20question/viking.jpg";
      this.slogan = '“I never lose. Either I win or learn.”';
      this.text = "Can you imagine the feeling of discovering new countries and cultures, conquering lands and fighting for it? For us it’s the best feeling in the world. During our raids, the furthest point we reached were Arabic countries. But you don’t have to go that far to learn something - visit the Tirpitz museum! In the exhibition West Coast Stories, you can discover which symbols did we use on the top of our boats and why, and much more!\n";
      this.text2 =
        "        \"Let me tell you something, Vikings were warriors so it was very important for them to have good strategy of fighting. In every fight the biggest advantage you can have is that the enemy doesn’t know your strategy. It’s the same nowadays as it was in the past. Therefore it was illegal to take pictures of bunkers in Danish west coast during the World War II because this would mean the access to strategy of defense.\n" +
        "        \"Every army needs to train their soldiers. Viking teach their kids how to hold the sword as soon as they can walk. But people don’t fight with swords anymore so the training is totally different. You can get to know more about training soldiers in the exhibition The Army of Concrete. \n" +
        "        \"Maybe you think that hey wear only war clothes, but that is not true. Viking’s queen also like to dress herself up like every girl does. Especially she loves all kinds of different jewellery. The most beautiful ones you will see are made of amber. Did you know that the best time to hunt for ambers in the sea is after storm? You can learn more about this in the Gold of the Sea exhibition. \n" +
        "        \"Farewell, and may the odds be ever in your favor!\n";
      this.ex = "../../assets/imgs/ex/11.jpg";
      this.ex2 = "../../assets/imgs/ex/16.jpg";

    }


console.log(this.x + "  " + this.score + "  " + this.score2 + "  " + this.score3 + "  " + this.score4);
    this.nextSlide();
  }

  randomizeAnswers(rawAnswers: any[]): any[] {

    for (let i = rawAnswers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = rawAnswers[i];
      rawAnswers[i] = rawAnswers[j];
      rawAnswers[j] = temp;
    }

    return rawAnswers;

  }


  restartQuiz() {
    this.score = 0;
    this.score2 = 0;
    this.score3 = 0;
    this.score4 = 0;
    this.slides.lockSwipes(false);
   //  this.slides.slideTo(1, 1000);
    this.slides.lockSwipes(true);
    location.reload();
  }

}
