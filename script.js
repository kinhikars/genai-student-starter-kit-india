(function(){
  const btns = document.querySelectorAll('[data-copy]');
  async function copyFrom(id){
    const el = document.getElementById(id);
    if(!el) return false;
    const text = el.innerText;
    try{ await navigator.clipboard.writeText(text); return true; }
    catch(e){
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
      return true;
    }
  }
  btns.forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const id = btn.getAttribute('data-copy');
      const prev = btn.innerText;
      const ok = await copyFrom(id);
      btn.innerText = ok ? 'Copied!' : 'Copy failed';
      setTimeout(()=>btn.innerText = prev, 900);
    });
  });
})();