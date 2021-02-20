function accordions(triggersSelector, itemSelector) {
    const btns = document.querySelectorAll(triggersSelector); //добавляем кнопки и контент
    const content = document.querySelectorAll(itemSelector);

    //перебираем контент, чтобы добавить им классы анимации для плавного появления 
    content.forEach(block => {
        block.classList.add('in-down');
    });

    //навешиваем обработчик событий на кнопки
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {//проверяем есть или нет класс активности у элемента
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style'); //удаляем у всех и добавляем тому, на который кликнули
                });
                this.classList.add('active', 'active-style');
            } else {
                btn.classList.remove('active', 'active-style');   //если второй раз кликнуть, контент скроется
            }
        });
    });

}

accordions('.accordion-title', '.accordion-body');