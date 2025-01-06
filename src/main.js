import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

// Javascript Imports 

import MobileNav from "./utils/mobile-nav";
import handleTheme from "./utils/theme";
import lazyLoading from './utils/lazyLoading';

MobileNav();
handleTheme();
lazyLoading();
