(function() {
    window.onload = function () {
        var el = document.getElementById('node');

        if(localStorage.getItem('node')) {
            el.value = localStorage.getItem('node');
            var len = txtCount(el);
            document.getElementById('count').innerHTML = len;
        }

         function txtCount(el) {
             var val = el.value;
             var eLen = val.length;
             return eLen;
         }
         
         el.addEventListener('input',function () {
             var len =  txtCount(this);
             document.getElementById('count').innerHTML = len;
             localStorage.setItem('node', el.value)
         });
     }
})();