// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-works",
          title: "Works",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/works/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blogs/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-we-all-deserve-to-be-at-the-top",
        
          title: 'We All Deserve to Be at the Top <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Interview published on platformB.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.platformb.art/work/we-all-deserve-to-be-at-the-top/", "_blank");
          
        },
      },{id: "post-toʊ",
        
          title: "/toʊ/",
        
        description: "For 4 singers, Dom Ambisonic, and a dancer. Premiered by PHØNIX16 at RadialSystem Berlin, November 16, 2024.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tou/";
          
        },
      },{id: "post-lullaby-for-string-quartet",
        
          title: "Lullaby for String Quartet",
        
        description: "For String Quartet.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/lullaby/";
          
        },
      },{id: "post-infinite",
        
          title: "(infinite)",
        
        description: "Generative, rhizomatic music system for Bösendorfer Imperial Piano, nine microphones, and web interface.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/infinite/";
          
        },
      },{id: "post-the-art-of-virtuoso",
        
          title: "The Art of Virtuoso",
        
        description: "For wind instrument, keyboard, and string instrument with EMG sensors, contact microphones, and Max/MSP.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/art-of-virtuoso/";
          
        },
      },{id: "post-hung-hair",
        
          title: "Hung Hair",
        
        description: "Performance work exploring executions, women&#39;s rights, and the fight for freedom of dress.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/hunghair/";
          
        },
      },{id: "post-unknown",
        
          title: "Unknown",
        
        description: "A work for singer and double bass premiered by MusicAEterna soloists, Kristia Michael and Carlo Navarro Herrero",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/unknown/";
          
        },
      },{id: "post-six",
        
          title: "SiX",
        
        description: "A work for pianists integrating a lighting dramaturgy as an integral part of the score.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/six/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6D%69%72.%74%69%6D%61%6A%63%68%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
