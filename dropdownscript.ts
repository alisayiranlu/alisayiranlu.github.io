
function toggleDropDown(): void{
    const dropdownMenu: HTMLElement|null = document.getElementById('dropdown-menu');
    if(dropdownMenu){
        if(dropdownMenu.style.display==='block'){
            dropdownMenu.style.display = 'none';
        }
        else{
            dropdownMenu.style.display = 'block';
        }
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    const dropdownbutton: HTMLElement|null = document.querySelector('.dropdownbutton');
    if(dropdownbutton){
        dropdownbutton.addEventListener('click', toggleDropDown);
    }
});