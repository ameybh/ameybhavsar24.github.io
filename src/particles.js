export const particles = {
  particles: {
    color: {
      value: '#111',
    },
    number: {
      value: 75,
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.25,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        speed: 5,
        size_min: 0.5,
      },
    },
    line_linked: {
      enable: true,
      color: '#111',
      opacity: 0.01,
    },
    move: {
      random: true,
      speed: 5,
      direction: 'top',
      out_mode: 'out',
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      bubble: {
        distance: 100,
        duration: 0.5,
        size: 0,
        opacity: 0.1,
      },
      repulse: {
        distance: 250,
        duration: 0.5,
      },
    },
  },
  retina_detect: true,
};
