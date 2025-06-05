import { useEffect, useState } from "react";
const useTheme = () =>{
    const[theme, setTheme]= useState(()=>{
        return localStorage.getItem('theme')|| 'light';
    })

    useEffect (()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark-theme');
}else{
    document.documentElement.classList.remove('dark-theme');

}

localStorage.setItem('theme',theme);
    },[theme])

    const toggleTheme=() =>{
        setTheme(prev=> (prev==='dark' ? 'light' : 'dark'));
    };
    return {theme, toggleTheme};
}
export default useTheme;