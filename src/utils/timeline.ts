export interface TimelineMonth {
  month: number;
  year: number;
  label: string;
  shortLabel: string;
  memories: Memory[];
  color: string;
  gradient: string;
  icon: string;
}

export interface Memory {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  quote?: string;
  type: 'photo' | 'note' | 'milestone' | 'surprise';
  position: 'left' | 'right' | 'center';
}

export const timelineData: TimelineMonth[] = [
  {
    month: 10,
    year: 2025,
    label: 'Octubre 2025',
    shortLabel: 'Oct 25',
    color: '#ff6b9d',
    gradient: 'linear-gradient(135deg, #ff6b9d 0%, #ff9ab3 100%)',
    icon: '🍂',
    memories: [
      {
        id: 'oct25-1',
        date: '05/10/2025',
        title: 'El inicio de todo',
        description: 'En la hora de salida, me acerque y te dije, estarias dipuesta salir a una cita? dijiste que si, y te dije: salgamos.',
        quote: '"Cuatro citas después no hicimos novios un 05 de octubre."',
        type: 'milestone',
        position: 'center',
      },
    ],
  },
  {
    month: 11,
    year: 2025,
    label: 'Noviembre 2025',
    shortLabel: 'Nov 25',
    color: '#f7c948',
    gradient: 'linear-gradient(135deg, #f7c948 0%, #ffe066 100%)',
    icon: '🍁',
    memories: [
      {
        id: 'nov25-1',
        date: '15/11/2025',
        title: 'Pureza',
        description: 'Fuimos a celebrar tarde nuestro primer mesiversario, por primera vez pasamos mas de 2hrs juntos.',
        quote: '"Fue un muy buen día, tome tu virginidad y la hice mía, te hice mia"',
        type: 'note',
        position: 'left',
      },
    ],
  },
  {
    month: 12,
    year: 2025,
    label: 'Diciembre 2025',
    shortLabel: 'Dic 25',
    color: '#b8a9e8',
    gradient: 'linear-gradient(135deg, #b8a9e8 0%, #d4c8f0 100%)',
    icon: '✨',
    memories: [
      {
        id: 'dec25-1',
        date: '07/12/2025',
        title: 'Navidad anticipada',
        description: 'Tu regalo no tenía envoltorio. Era tu tiempo, tu atención, tu mano en la mía.',
        quote: '"Mi regalo alcanzo su punto mas alto el 12 que me presentaste a tu familia."',
        type: 'milestone',
        position: 'center',
      },
    ],
  },
  {
    month: 1,
    year: 2026,
    label: 'Enero 2026',
    shortLabel: 'Ene 26',
    color: '#88b5a3',
    gradient: 'linear-gradient(135deg, #88b5a3 0%, #a8d5c1 100%)',
    icon: '❄️',
    memories: [
      {
        id: 'jan26-1',
        date: '06/01/2026',
        title: 'Un buen dia',
        description: 'Fue un dia muy tranquilo, recuerdo que fue la primera vez que hablamos enserio.',
        quote: '"Me parecio bueno, hablamos de la libertad y el libertinaje, la diferencia entre felicidad y placer."',
        type: 'note',
        position: 'left',
      },
    ],
  },
  {
    month: 2,
    year: 2026,
    label: 'Febrero 2026',
    shortLabel: 'Feb 26',
    color: '#ff6b9d',
    gradient: 'linear-gradient(135deg, #ff6b9d 0%, #ff9ab3 100%)',
    icon: '💕',
    memories: [
      {
        id: 'feb26-1',
        date: '14/02/2026',
        title: 'San Valentín',
        description: 'Pudo haber sido un buen día, no lo fue, discutimos.',
        quote: '"Destruiste la relacion"',
        type: 'milestone',
        position: 'center',
      },
    ],
  },
  {
    month: 3,
    year: 2026,
    label: 'Marzo 2026',
    shortLabel: 'Mar 26',
    color: '#f7c948',
    gradient: 'linear-gradient(135deg, #f7c948 0%, #ffe066 100%)',
    icon: '🌸',
    memories: [
      {
        id: 'mar26-1',
        date: '16/03/2026',
        title: 'Paciencia',
        description: 'Trate de mantenerme presente, dijiste que harias muchas cosas, no hiciste ninguna, de igual forma te di tus flores amarillas.',
        quote: '"Decidi no seguir perdiendo mi tiempo y me dedique a aprender y hacer otras cosas."',
        type: 'note',
        position: 'right',
      },
    ],
  },
  {
    month: 4,
    year: 2026,
    label: 'Abril 2026',
    shortLabel: 'Abr 26',
    color: '#88b5a3',
    gradient: 'linear-gradient(135deg, #88b5a3 0%, #a8d5c1 100%)',
    icon: '🌧️',
    memories: [
      {
        id: 'apr26-1',
        date: '06/04/2026',
        title: 'Fatiga',
        description: 'Me agotaste mucho con cosas que hiciste y de paso, me estabn viendo el perfil, me preguntaban en la oficina, tu papa tambien, a pesar de que fuiste la causante.',
        quote: '"Se Fatigue, mejo me fui a bdt para distraerme y que no me siguieran jodiendo, no queria explotar, recuerdo con gratitud a Enoc, Belkis y al Pelon, porque hablaba de otras cosas."',
        type: 'photo',
        position: 'right',
      },
    ],
  },
  {
    month: 5,
    year: 2026,
    label: 'Mayo 2026',
    shortLabel: 'May 26',
    color: '#b8a9e8',
    gradient: 'linear-gradient(135deg, #b8a9e8 0%, #d4c8f0 100%)',
    icon: '🌹',
    memories: [
      {
        id: 'may26-1',
        date: '10/05/2026',
        title: 'Decision de vida',
        description: 'Te desbloquie, porque queria ver si se arreglaba todo o continuaba por mi lado.',
        quote: '"Me emputaba toda tu actitud, pero bueno se soluciono."',
        type: 'note',
        position: 'left',
      },
    ],
  },
  {
    month: 6,
    year: 2026,
    label: 'Junio 2026',
    shortLabel: 'Jun 26',
    color: '#ff6b9d',
    gradient: 'linear-gradient(135deg, #ff6b9d 0%, #ff9ab3 100%)',
    icon: '☀️',
    memories: [
      {
        id: 'jun26-1',
        date: '01/06/2026',
        title: 'Nuevo inicio',
        description: 'Comence una nueva etapa en otro departamento, otro trabajo, otras persona, fuiste una gran constante.',
        quote: '"Del trabajo, al hambre y luego llegar con vos, fue un gran alivio."',
        type: 'photo',
        position: 'left',
      },
    ],
  },
  {
    month: 7,
    year: 2026,
    label: 'Julio 2026',
    shortLabel: 'Jul 26',
    color: '#f7c948',
    gradient: 'linear-gradient(135deg, #f7c948 0%, #ffe066 100%)',
    icon: '🏖️',
    memories: [
      {
        id: 'jul26-1',
        date: '31/07/2026',
        title: 'Regreso objetivo',
        description: 'Fue el ultimo dia que pase en managua, estabas nerviosa, fue muy bueno.',
        quote: '"Las proximas visitas que te hice, ya no fueron lleno de maletas"',
        type: 'note',
        position: 'right',
      },
    ],
  },
  {
    month: 8,
    year: 2026,
    label: 'Agosto 2026',
    shortLabel: 'Ago 26',
    color: '#88b5a3',
    gradient: 'linear-gradient(135deg, #88b5a3 0%, #a8d5c1 100%)',
    icon: '🌊',
    memories: [
      {
        id: 'aug26-1',
        date: '17/08/2026',
        title: 'Días de calor',
        description: 'Me dieron el carro, hablamos hasta tarde porque llegue noche a casa.',
        quote: 'Desde entonces nos hemos visto mas, me es muy comodo estar contigo, me siento muy bien, me siento en casa, me siento feliz.',
        type: 'note',
        position: 'left',
      },
    ],
  },
  {
    month: 9,
    year: 2026,
    label: 'Septiembre 2026',
    shortLabel: 'Sep 26',
    color: '#b8a9e8',
    gradient: 'linear-gradient(135deg, #b8a9e8 0%, #d4c8f0 100%)',
    icon: '📚',
    memories: [
      {
        id: 'sep26-1',
        date: '13/09/2026',
        title: 'Vuelta a nosotros',
        description: 'Estabas tan maravillosa, tu piel, tu olor, tu voz, todo.',
        quote: '"Me encanto deslizarme en lo mas profundo de lo nuestro, y hacerte mi esposa."',
        type: 'note',
        position: 'right',
      },
    ],
  },
  {
    month: 10,
    year: 2026,
    label: 'Octubre 2026',
    shortLabel: 'Oct 26',
    color: '#ff6b9d',
    gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
    icon: '🎉',
    memories: [
      {
        id: 'oct26-1',
        date: '05/10/2026',
        title: '¡FELIZ ANIVERSARIO, MARCELA! ❤️',
        description: '365 días de ti. 365 días de nosotros. 365 días de la mejor decisión de mi vida. Te amo más que ayer y menos que mañana.',
        quote: '"No puedo decir que te amo mas que antes, pero si diferente, te siento mejor, confio mas, todo es diferente a como debe ser y sera por que el cambio es constante pero la decision de amar es para siempre."',
        type: 'milestone',
        position: 'center',
      },
    ],
  },
];

export const getTotalMemories = (): number => {
  return timelineData.reduce((acc, month) => acc + month.memories.length, 0);
};

export const getMonthByDate = (month: number, year: number): TimelineMonth | undefined => {
  return timelineData.find(m => m.month === month && m.year === year);
};