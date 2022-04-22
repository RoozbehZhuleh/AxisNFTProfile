function setTheme(themeName){
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;

}

function toggleTheme(){
    if (localStorage.getItem('theme') === 'dark-mode'){
        setTheme('light-mode');
    }

    else{setTheme('dark-mode')}
}


(function (){
    if (localStorage.getItem('theme') === 'dark-mode'){
        setTheme('dark-mode');
    }
    else{setTheme('light-mode')}
})();
