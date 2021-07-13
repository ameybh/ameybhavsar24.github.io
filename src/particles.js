export const particles = {
  particles: {
    color: {
      value: '#111',
    },
    number: {
      value: 10,
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 2,
      random: true,
    },
    line_linked: {
      enable: false,
      color: '#111',
      opacity: 0.5,
    },
    move: {
      speed: 4,
      direction: 'top',
      out_mode: 'out',
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
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
