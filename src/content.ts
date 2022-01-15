import { Images } from './assets'

export const MAIN_CONTENT = {
  h1: 'Your weekly personal feed digest.',
  p: 'with IndieBrew, get personal feeds from resources all around the web, including Reddit, HackerNews, IndieHackers, ans much more.',
  users: Images.UserAvatars,
  under_users: 'Join 32,642 IndieBrewers in curating their personal digest.', 
  feed_mockup: Images.FeedMockup
}

export const RESOURCES_CONTENT = {
  h1: 'Curate your feed from dozens of resources.',
  p: 'We cover all major platforms where one could want to curate their feed from Reddit, ProductHunt, IndieHackers, and so much more.',
  link: {
    p: 'See full list of resources',
    img: Images.BackArrow,
  },
  social_media_icons: Images.SocialMediaIcons
}

export const ADVANTAGE_CONTENT = {
  phone_mockup: Images.PhoneMockup,
  h1: 'Access your feed from the comfort of your phone.',
  p: 'With native apps for both IOS and Android, accessing your curated content has never been easier.',
  link: {
    p: 'Sign up for the waitlist',
    img: Images.BackArrow,
  }
}

export const SIGNUP_CONTENT = {
  h1: 'Create your personalized feed.',
  information: [
    { p: "Over 20 resources. With resources ranging from Reddit to IndieHackers, we've got all your needs covered." },
    { p: "Delivered weekly. Every week at exactly Tuesday 12:00 P.M EST - expect a value - packed digest right in your email." },
    { p: "Unlimited ideas. With a;; the ideas you'll be reading about, what's stopping you from creating a sustainable startup?" }
  ]
}