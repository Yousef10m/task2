(function () {
    'use strict';
    let start = document.querySelector('#play'),
        ctrl = document.querySelectorAll('.ctrl'),
        pause = document.querySelector('#pause'),
        toast = document.querySelector('#liveToast'),
        robot = document.querySelector('#robot');

    start.onclick = () => {
        start.classList.add('d-none');
        pause.classList.remove('d-none');
        ctrl.forEach(btn => {
            btn.classList.remove('disabled');   
            btn.disabled = false;
            let x = 0,
                y = 0;
            btn.onclick = () => {
                if (btn.classList.contains('up')) {
                    y -= 1;
                    robot.style.transform = `translate(${x}rem, ${y}rem)`;
                    showMessage('تحرك الروبوت <strong>للأعلى</strong>')
                } else if (btn.classList.contains('right')) {
                    x += 1;
                    robot.style.transform = `translate(${x}rem, ${y}rem)`;
                    showMessage('تحرك الروبوت <strong>لليمين</strong>')
                } else if (btn.classList.contains('down')) {
                    y += 1;
                    robot.style.transform = `translate(${x}rem, ${y}rem)`;
                    showMessage('تحرك الروبوت <strong>للأسفل</strong>')
                } else if (btn.classList.contains('left')) {
                    x -= 1;
                    robot.style.transform = `translate(${x}rem, ${y}rem)`;
                    showMessage('تحرك الروبوت <strong>لليسار</strong>')
                }
            }
        })
        showMessage('تم <strong>تشغيل</strong> التحكم بنجاح')
    }
    pause.onclick = () => {
        pause.classList.add('d-none');
        start.classList.remove('d-none');
        ctrl.forEach(btn => {
            btn.classList.add('disabled');   
            btn.disabled = true;
        })
        showMessage('تم <strong>ايقاف</strong> التحكم بنجاح')
    }

    function showMessage (msg) {
        toast.classList.add('show');
        toast.classList.remove('hide');
        toast.querySelector('.toast-body').innerHTML = msg;
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
        }, 3000)
    }

})()