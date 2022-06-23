import primaryTheme from './primaryTheme';
import darkTheme from './darkTheme';
const themes={
    primaryTheme,
    darkTheme
}

export default function getTheme(theme){
    return themes[theme]
}