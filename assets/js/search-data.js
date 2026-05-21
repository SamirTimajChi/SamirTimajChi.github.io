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
        },{id: "post-toʊ",
        
          title: "/toʊ/",
        
        description: "For 4 singers, Dom Ambisonic, and a dancer. Premiered by PHØNIX16 at RadialSystem Berlin, November 16, 2024.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tou/";
          
        },
      },{id: "post-a-sample-interview",
        
          title: "a sample interview",
        
        description: "A placeholder interview post to populate the interviews section.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/sample-interview/";
          
        },
      },{id: "post-a-sample-writing",
        
          title: "a sample writing",
        
        description: "A placeholder writing post to populate the writings section.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/sample-writing/";
          
        },
      },{id: "post-project-2",
        
          title: "project 2",
        
        description: "a project with a background image and giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/composition-1/";
          
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
