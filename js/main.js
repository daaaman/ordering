'use strict';
{
  function debugLog(log) {
    // console.log(log);
  }

  function decideOrder(list) {
    for(let i = (list.length - 1); 0 < i; i--){
      let r = Math.floor(Math.random() * (i + 1));
      debugLog(r);
      let tmp = list[i];
      list[i] = list[r];
      list[r] = tmp;
    }  
    return list;
  }  

  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mocalText = document.getElementById('modal-text');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');

    const textarea = document.getElementById('namelist').value;

    let str_array = textarea.split ( "\n" ) ;
    debugLog(str_array);
    str_array = decideOrder(str_array);
    debugLog(str_array);

    mocalText.textContent = "";
    str_array.forEach(element => {
      const li = document.createElement('li');
      li.textContent = element;
      mocalText.appendChild(li);
    });
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });


}