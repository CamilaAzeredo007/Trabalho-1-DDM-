export const COLORS = {
  background: '#FBF3FA', 
  surface: '#FFFFFF',     

  primary: '#B48FCB',     
  primaryDark: '#8F6BAE', 
  primarySoft: '#EEE1F6', 

  secondary: '#CBEAF7',     
  secondaryDark: '#4F8CA8', 

  mint: '#C7EEDD',
  mintDark: '#3F8E72',

  peach: '#FCE1C8',
  peachDark: '#B9773A',

  blush: '#F8D2DE',
  blushDark: '#C1587B',

  lavenderGrey: '#DCD2E9',
  lavenderGreyDark: '#5B4A73',

  textPrimary: '#4A3B58',   // títulos
  textSecondary: '#7A6B87', // texto de corpo
  textTertiary: '#A99BB0',  // legendas / textos auxiliares

  border: '#EADFF0',
  white: '#FFFFFF',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  xxxl: 36,
};

export const RADIUS = {
  sm: 10,
  md: 16,
  lg: 22,
  pill: 999,
};

export const FONT = {
  display: { fontSize: 30, fontWeight: '700' },
  h1: { fontSize: 25, fontWeight: '700' },
  h2: { fontSize: 19, fontWeight: '700' },
  h3: { fontSize: 16, fontWeight: '600' },
  body: { fontSize: 15, fontWeight: '400' },
  bodyBold: { fontSize: 15, fontWeight: '700' },
  caption: { fontSize: 13, fontWeight: '500' },
  tiny: { fontSize: 12, fontWeight: '600' },
};

export const SHADOW = {
  soft: {
    shadowColor: '#B48FCB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },
  medium: {
    shadowColor: '#B48FCB',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
  },
};

export const GENRE_COLORS = {
  'FPS tático': { bg: COLORS.blush, text: COLORS.blushDark, icon: 'flash' },
  'Terror e sobrevivência': { bg: COLORS.lavenderGrey, text: COLORS.lavenderGreyDark, icon: 'moon' },
  'Aventura': { bg: COLORS.mint, text: COLORS.mintDark, icon: 'leaf' },
  'Simulação': { bg: COLORS.peach, text: COLORS.peachDark, icon: 'construct' },
  'Aventura gráfica e drama interativo': { bg: COLORS.secondary, text: COLORS.secondaryDark, icon: 'film' },
};

export const getGenreStyle = (genero) =>
  GENRE_COLORS[genero] || { bg: COLORS.primarySoft, text: COLORS.primaryDark, icon: 'game-controller' };
