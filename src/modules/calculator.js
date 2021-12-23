export default () => {
  const calculator = {
    products: {
      "product": {
        "4": {
          "1": 100,
          "0.67": 800,
          "0.5": 600,
        },
        "6": {
          "1": 1000,
          "0.67": 4000,
          "0.5": 2000,
        },
        "8": {
          "1": 2000,
          "0.67": 6000,
          "0.5": 4000,
        },
        "10": {
          "1": 1000,
          "0.67": 8000,
          "0.5": 6000,
        }
      }
    },
  };

  [].forEach.call(document.querySelectorAll(".calculator"), function(form) {
    form.addEventListener('change', function() {

        let product = form.querySelector('input[name="product"]');

        if (product.type !== 'hidden'){
          product = form.querySelector('input[name="product"]:checked');
        }

        let length = form.querySelector('input[name="length"]:checked');

        let interval = form.querySelector('input[name="interval"]:checked');
        let sum = 0;

        try{
            sum += calculator.products[product.value][length.value][interval.value];
            // [].forEach.call(additional, function(el){
            //     sum += calculator.additional[el.value]
            // });

            const animateBlock = form.querySelector('.catalog__price');
            const out = form.querySelector('.calculator-price');
            const outOld = form.querySelector('.calculator-price-old');

            const animationName = 'pulse';
            animateBlock.classList.add('animated', 'faster', animationName);
            animateBlock.addEventListener('animationend', function(){animateBlock.classList.remove('animated', 'faster', animationName)});

            let numberFrom = Number(typeof out.dataset.from === 'undefined' ? 0 : out.dataset.from);
            let numberTo = Number(sum);
            const time = {
                start: performance.now(),
                duration: 1000
            };
            const tick = function(now){
                const progress = Math.min((now - time.start) / time.duration, 1);
                const easing = Math.pow(progress - 1, 5) + 1;
                const value = numberFrom + (numberTo - numberFrom) * easing;
                out.textContent = value.toFixed();
                if(progress < 1) {
                    requestAnimationFrame(tick);
                }else{
                    out.dataset.from = numberTo.toFixed();
                    outOld.textContent = Number(numberTo * 1.27).toFixed();
                }
            };
            requestAnimationFrame(tick);
        }catch(e){console.error(e);}
    });
    form.dispatchEvent(new Event('change'));
});
}