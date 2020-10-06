import { Injectable } from '@angular/core';
import { CoverArt } from '../_interfaces/cover-art';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoverArtService {


  constructor() { }
  coverArts: CoverArt[] = [
    //Cover Arts of "crushes" album
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655166/vallenteen.com/Cover%20Arts/Cover_Art_That_new_girl_is_kinda_cute_S_r311qr.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655176/vallenteen.com/Cover%20Arts/Cover_Art_When_you_start_to_like_somebody_S_ydxsm5.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655178/vallenteen.com/Cover%20Arts/Cover_Art_When_you_re_thinking_about_your_crush_in_class_S_lvxj0x.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655166/vallenteen.com/Cover%20Arts/Cover_Art_When_you_can_t_sleep_and_she_s_on_your_mind_S_ixodyy.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655168/vallenteen.com/Cover%20Arts/Cover_Art_Staring_at_your_crush_s_instagram_photos_S_gvivsh.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655162/vallenteen.com/Cover%20Arts/Cover_Art_How_to_talk_to_your_crush_tutorial_S_jpufhj.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655175/vallenteen.com/Cover%20Arts/Cover_Art_Why_are_you_so_perfect_all_the_time_S_txzzkt.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655175/vallenteen.com/Cover%20Arts/Cover_Art_Butterflies_and_blooming_flowers_from_within_S_o0tyrc.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655176/vallenteen.com/Cover%20Arts/Cover_Art_When_you_finally_ask_your_crush_out_S_lsqgpd.png'
    },
    // Cover Arts outside of "crushes" album
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655161/vallenteen.com/Cover%20Arts/Cover_Art_Don_t_bother_S_twoqe0.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655175/vallenteen.com/Cover%20Arts/Cover_Art_Coming_home_S_bfbiak.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655160/vallenteen.com/Cover%20Arts/Cover_Art_I_think_I_got_used_to_my_acne_S_ul1ovq.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655161/vallenteen.com/Cover%20Arts/Cover_Art_Not_another_sad_song_S_azfezs.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655169/vallenteen.com/Cover%20Arts/Cover_Art_When_you_re_feeling_a_bit_homesick_S_otwdxj.png'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601655161/vallenteen.com/Cover%20Arts/Cover_Art_Letting_go_of_the_past_S_igwnbv.png'
    },
  ];

  heroSlides: CoverArt[] = [
    {
      url: '../../assets/img/hero-slides/That new girl is kinda cute [B].png'
    },
    {
      url: '../../assets/img/hero-slides/When you start to like someone [B].png'
    },
    {
      url: '../../assets/img/hero-slides/When you\'re thinking about your crush in class [B].png'
    },
    {
      url: '../../assets/img/hero-slides/When you can\'t sleep and she\'s on your mind [B].png'
    },
    {
      url: '../../assets/img/hero-slides/Staring at your crush\'s instagram photos [B].png'
    },
    {
      url: '../../assets/img/hero-slides/How to talk to your crush tutorial [B].png'
    },
    {
      url: '../../assets/img/hero-slides/Why are you so perfect all the time [B].png'
    },
    {
      url: '../../assets/img/hero-slides/Butterflies and blooming flowers from within [B].png'
    },
    {
      url: '../../assets/img/hero-slides/When you finally ask your crush out [B].png'
    },
  ];

  stickyNotes: CoverArt[] = [
    {
      url: '../../assets/img/hero-slides/That new girl is kinda cute [S].png'
    },
    {
      url: '../../assets/img/hero-slides/When you start to like someone [S].png'
    },
    {
      url: '../../assets/img/hero-slides/When you\'re thinking about your crush in class [S].png'
    },
    {
      url: '../../assets/img/hero-slides/When you can\'t sleep and she\'s on your mind [S].png'
    },
    {
      url: '../../assets/img/hero-slides/Staring at your crush\'s instagram photos [S].png'
    },
    {
      url: '../../assets/img/hero-slides/How to talk to your crush tutorial [S].png'
    },
    {
      url: '../../assets/img/hero-slides/Why are you so perfect all the time [S].png'
    },
    {
      url: '../../assets/img/hero-slides/Butterflies and blooming flowers from within [S].png'
    },
    {
      url: '../../assets/img/hero-slides/When you finally ask your crush out [S].png'
    },
  ];

  discographyArts: CoverArt[] = [
    //"crushes" album discography
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652864/vallenteen.com/Discography/That_new_girl_is_kinda_cute_dirjrj.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652880/vallenteen.com/Discography/When_you_start_to_like_someone_lgj0f7.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652893/vallenteen.com/Discography/When_you_re_thinking_about_your_crush_wouibf.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652863/vallenteen.com/Discography/When_you_can_t_sleep_pubpuo.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652884/vallenteen.com/Discography/Staring_at_your_crush_s_instagram_photos_omsthm.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652897/vallenteen.com/Discography/How_to_talk_to_your_crush_tutorial_bykkh4.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652887/vallenteen.com/Discography/Why_are_you_so_perfect_all_the_time_qoweeh.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652893/vallenteen.com/Discography/Butterflies_and_blooming_flowers_from_inside_n2cmoo.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652868/vallenteen.com/Discography/When_you_finally_ask_your_crush_out_xhagwf.jpg'
    },
    //not from the album "crushes"
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652891/vallenteen.com/Discography/Don_t_even_bother_owjkgn.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652886/vallenteen.com/Discography/Coming_Home_ea6gh3.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652894/vallenteen.com/Discography/I_think_I_got_used_to_my_acne_ni7pak.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652873/vallenteen.com/Discography/Not_another_sad_song_odowmx.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652879/vallenteen.com/Discography/When_you_re_feeling_a_bit_homesick_mrclh3.jpg'
    },
    {
      url: 'https://res.cloudinary.com/sergiuradu5/image/upload/v1601652897/vallenteen.com/Discography/Letting_go_of_the_past_sa9hfk.jpg'
    }
  ];



  getCoverArts()
  {
    return of(this.coverArts);
  }

  getHeroSlides()
  {
    return of(this.heroSlides);
  }

  getStickyNotes()
  {
    return of(this.stickyNotes);
  }

  getDiscographyArts()
  {
    return of(this.discographyArts);
  }

}
