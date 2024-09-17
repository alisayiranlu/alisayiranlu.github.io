function toggleStyle(): void{
    const file = document.getElementById('themeStylesheet') as HTMLLinkElement|null;
    if(file.href.indexOf('landingcss.css')!==-1){
        file.href = 'secondstyle.css';
        localStorage.setItem('theme','secondstyle');
    }
    else{
        file.href = "landingcss.css";
        localStorage.setItem('theme','landingcss');
    }
}
window.addEventListener('DOMContentLoaded', (): void=>{
    const currTheme: string|null = localStorage.getItem('theme');
    const file = document.getElementById('themeStylesheet') as HTMLLinkElement|null;
    if(file&&currTheme){
        if(currTheme === 'secondstyle'){
            file.href = 'secondstyle.css';
        }
        else{
            file.href = 'landingcss.css';
        }
    }
});
const toggleButton = document.getElementById('toggleButton');
if(toggleButton){
    toggleButton.addEventListener('click',toggleStyle);
}